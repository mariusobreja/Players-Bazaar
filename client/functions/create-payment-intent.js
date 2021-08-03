// domain/.netlify/functions/create-payment-intent

require('dotenv').config();

const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY);

exports.handler = async function (event, context) {
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
      console.log('silly: ', error);
      return {
        statusCode: 500,
        body: JSON.stringify({ msg: error.message })
      };
    }
  }
};
//     return {
//       statusCode: 200,
//       body: JSON.stringify(cart)
//     };

//   return {
//     statusCode: 200,
//     body: 'Create Payment Intent'
//   };
