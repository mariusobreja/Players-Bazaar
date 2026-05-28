require('dotenv').config();

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripe = stripeSecretKey ? require('stripe')(stripeSecretKey) : null;

exports.handler = async function (event, context) {
  if (!stripe) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        msg: 'Stripe is not configured. Missing STRIPE_SECRET_KEY.'
      })
    };
  }

  if (event.body) {
    const { cart, our_fee, total_amount } = JSON.parse(event.body);

    const calculateOrderAmount = () => {
      return our_fee + total_amount;
    };

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(),
        currency: 'eur'
      });
      return {
        statusCode: 200,
        body: JSON.stringify({ clientSecret: paymentIntent.client_secret })
      };
    } catch (error) {
      console.error('create-payment-intent failed:', error);
      return {
        statusCode: 500,
        body: JSON.stringify({ msg: error.message })
      };
    }
  }

  return {
    statusCode: 400,
    body: JSON.stringify({ msg: 'Missing request body' })
  };
};
