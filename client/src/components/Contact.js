import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <div className='card'>
          <div className='copy'>
            <p className='eyebrow'>Newsletter</p>
            <h3>Get alerts when featured players go on sale</h3>
            <p>
              Join the list and be the first to know about new listings and
              limited-time deals on our marketplace.
            </p>
          </div>
          <form
            className='contact-form'
            action='https://formspree.io/f/mwkarvdn'
            method='POST'
          >
            <label htmlFor='newsletter-email' className='sr-only'>
              Email address
            </label>
            <input
              id='newsletter-email'
              type='email'
              className='form-input'
              placeholder='you@club.com'
              name='_replyto'
              required
            />
            <button type='submit' className='submit-btn btn'>
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 4rem 0 5rem;
  background: var(--clr-grey-9);

  .card {
    max-width: 56rem;
    margin: 0 auto;
    padding: 2.5rem 2rem;
    background: linear-gradient(135deg, var(--clr-grey-1) 0%, #134e4a 100%);
    border-radius: var(--radius-xl);
    color: var(--clr-white);
    box-shadow: var(--dark-shadow);
  }

  .eyebrow {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
  }

  h3 {
    font-size: clamp(1.35rem, 3vw, 1.75rem);
    margin-bottom: 0.75rem;
    color: var(--clr-white);
  }

  .copy p:last-child {
    color: var(--clr-grey-7);
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .form-input {
    font-family: inherit;
    font-size: 1rem;
    padding: 0.85rem 1rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: var(--radius);
    background: rgba(255, 255, 255, 0.08);
    color: var(--clr-white);

    &::placeholder {
      color: var(--clr-grey-6);
    }

    &:focus {
      outline: 2px solid var(--clr-primary-5);
      outline-offset: 2px;
    }
  }

  .submit-btn {
    width: 100%;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  @media (min-width: 768px) {
    .card {
      padding: 3rem;
    }

    .contact-form {
      flex-direction: row;
      align-items: stretch;
    }

    .form-input {
      flex: 1;
    }

    .submit-btn {
      width: auto;
      white-space: nowrap;
    }
  }
`;

export default Contact;
