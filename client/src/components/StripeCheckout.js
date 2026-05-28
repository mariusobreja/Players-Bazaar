import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { loadStripe } from '@stripe/stripe-js';
import {
  CardElement,
  useStripe,
  Elements,
  useElements
} from '@stripe/react-stripe-js';
import axios from 'axios';
import { useCartContext } from '../context/cartContext';
import { useUserContext } from '../context/userContext';
import { formatMarketValue } from '../utils/helpers';
import { useHistory } from 'react-router-dom';

const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
const API_BASE_URL = process.env.REACT_APP_API_URL || '';

const CheckoutForm = () => {
  const { cart, total_amount, our_fee, clearCart } = useCartContext();
  const totalToPay = our_fee + total_amount;

  const { myUser } = useUserContext();
  const history = useHistory();

  const [succeeded, setSucceeded] = useState(false);
  const [setupError, setSetupError] = useState(null);
  const [cardError, setCardError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [cardComplete, setCardComplete] = useState(false);
  const [clientSecret, setClientSecret] = useState('');
  const [intentLoading, setIntentLoading] = useState(true);
  const stripe = useStripe();
  const elements = useElements();

  const isPaymentReady =
    Boolean(stripe && elements && clientSecret) && !intentLoading;

  const cardStyle = {
    style: {
      base: {
        color: '#1e293b',
        fontFamily: "'DM Sans', sans-serif",
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#94a3b8'
        }
      },
      invalid: {
        color: '#dc2626',
        iconColor: '#dc2626'
      }
    }
  };

  const createPaymentIntent = useCallback(async () => {
    if (!API_BASE_URL) {
      setSetupError(
        'API URL is not configured. Add REACT_APP_API_URL to your .env file and restart the dev server.'
      );
      setIntentLoading(false);
      return;
    }

    setIntentLoading(true);
    setSetupError(null);

    try {
      const { data } = await axios.post(
        `${API_BASE_URL}/api/checkout/intent`,
        {
          cart,
          our_fee,
          total_amount
        }
      );

      const secret =
        data?.data?.clientSecret || data?.clientSecret || '';

      if (!secret) {
        setSetupError('Could not start payment. Please refresh and try again.');
        return;
      }

      setClientSecret(secret);
    } catch (err) {
      const message =
        err.response?.data?.message ||
        'Could not connect to the payment server. Is the API running?';
      setSetupError(message);
    } finally {
      setIntentLoading(false);
    }
  }, [cart, our_fee, total_amount]);

  useEffect(() => {
    createPaymentIntent();
  }, [createPaymentIntent]);

  const handleChange = (event) => {
    setCardComplete(event.complete);
    setCardError(event.error ? event.error.message : null);
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    if (intentLoading) {
      return;
    }

    if (!isPaymentReady) {
      setSetupError(
        setupError ||
          'Payment is still loading. Wait a moment, then try again.'
      );
      return;
    }

    setProcessing(true);
    setSetupError(null);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    });

    if (payload.error) {
      setCardError(payload.error.message);
      setProcessing(false);
    } else {
      setCardError(null);
      setProcessing(false);
      setSucceeded(true);
      setTimeout(() => {
        clearCart();
        history.push('/');
      }, 5000);
    }
  };

  const displayError = setupError || cardError;
  const payDisabled =
    processing || succeeded || intentLoading || !cardComplete || !isPaymentReady;

  return (
    <div className='checkout-body'>
      {succeeded ? (
        <article className='summary success'>
          <h4>Thank you!</h4>
          <p>Your payment was successful. Redirecting to home shortly…</p>
        </article>
      ) : (
        <article className='summary'>
          <p className='eyebrow'>Secure checkout</p>
          <h4>Hello, {myUser && myUser.name}</h4>
          <p className='total-line'>
            Total due: <strong>{formatMarketValue(totalToPay)}</strong>
          </p>
          <p className='hint'>
            Test card: <code>4242 4242 4242 4242</code>
          </p>
        </article>
      )}
      <form id='payment-form' onSubmit={handleSubmit}>
        {intentLoading && (
          <p className='status loading' role='status'>
            Preparing secure payment…
          </p>
        )}
        <CardElement
          id='card-element'
          options={cardStyle}
          onChange={handleChange}
        />
        <button
          type='submit'
          disabled={payDisabled}
          id='submit'
          aria-busy={processing || intentLoading}
        >
          <span id='button-text'>
            {processing ? (
              <div className='spinner' id='spinner'></div>
            ) : intentLoading ? (
              'Loading…'
            ) : (
              'Pay'
            )}
          </span>
        </button>
        {displayError && (
          <div className='card-error' role='alert'>
            {displayError}
          </div>
        )}
        <p className={succeeded ? 'result-message' : 'result-message hidden'}>
          Payment succeeded, see the result in your
          <a href='https://dashboard.stripe.com/test/payments'>
            {' '}
            Stripe dashboard.
          </a>{' '}
          Refresh the page to pay again
        </p>
      </form>
    </div>
  );
};

const StripeCheckout = () => {
  return (
    <Wrapper>
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  max-width: 28rem;
  margin: 2rem auto 0;

  .checkout-body {
    background: var(--clr-white);
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius-lg);
    box-shadow: var(--card-shadow);
    overflow: hidden;
  }

  .summary {
    padding: 1.75rem 1.75rem 0;

    &.success h4 {
      color: var(--clr-primary-4);
    }
  }

  .eyebrow {
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--clr-primary-4);
    margin-bottom: 0.35rem;
  }

  .total-line {
    margin: 0.75rem 0;
    color: var(--clr-grey-3);

    strong {
      color: var(--clr-grey-1);
    }
  }

  .hint {
    font-size: 0.85rem;
    color: var(--clr-grey-5);
    margin-bottom: 0;

    code {
      font-size: 0.8rem;
      padding: 0.15rem 0.4rem;
      background: var(--clr-grey-9);
      border-radius: var(--radius);
    }
  }

  form {
    padding: 1.5rem 1.75rem 1.75rem;
  }

  .status.loading {
    font-size: 0.9rem;
    color: var(--clr-grey-5);
    margin-bottom: 1rem;
    text-align: center;
  }

  .result-message {
    line-height: 1.5;
    font-size: 0.9rem;
    margin-top: 1rem;
  }

  .result-message a {
    color: var(--clr-primary-4);
    font-weight: 600;
  }

  .hidden {
    display: none;
  }

  .card-error {
    color: var(--clr-red-dark);
    font-size: 0.9rem;
    margin-top: 0.75rem;
    text-align: center;
  }

  #card-element {
    padding: 0.85rem 1rem;
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    background: var(--clr-grey-10);
    margin-bottom: 1rem;
  }

  #submit {
    font-family: var(--font-sans);
    background: linear-gradient(135deg, var(--clr-primary-4), var(--clr-primary-5));
    color: var(--clr-white);
    border: 0;
    border-radius: 999px;
    padding: 0.85rem 1.25rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    width: 100%;
    box-shadow: 0 4px 14px rgba(16, 185, 129, 0.35);
    transition: var(--transition);
  }

  #submit:hover:not(:disabled) {
    transform: translateY(-1px);
  }

  #submit:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }

  .spinner,
  .spinner:before,
  .spinner:after {
    border-radius: 50%;
  }
  .spinner {
    color: #ffffff;
    font-size: 22px;
    text-indent: -99999px;
    margin: 0px auto;
    position: relative;
    width: 20px;
    height: 20px;
    box-shadow: inset 0 0 0 2px;
    transform: translateZ(0);
  }
  .spinner:before,
  .spinner:after {
    position: absolute;
    content: '';
  }
  .spinner:before {
    width: 10.4px;
    height: 20.4px;
    background: var(--clr-primary-5);
    border-radius: 20.4px 0 0 20.4px;
    top: -0.2px;
    left: -0.2px;
    transform-origin: 10.4px 10.2px;
    animation: loading 2s infinite ease 1.5s;
  }
  .spinner:after {
    width: 10.4px;
    height: 10.2px;
    background: var(--clr-primary-5);
    border-radius: 0 10.2px 10.2px 0;
    top: -0.1px;
    left: 10.2px;
    transform-origin: 0px 10.2px;
    animation: loading 2s infinite ease;
  }
  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default StripeCheckout;
