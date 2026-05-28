const Stripe = require('stripe');
const { z } = require('zod');
const env = require('../config/env');

const stripe = env.STRIPE_SECRET_KEY ? new Stripe(env.STRIPE_SECRET_KEY) : null;

const checkoutIntentSchema = z.object({
  cart: z.array(z.unknown()).default([]),
  our_fee: z.coerce.number().min(0),
  total_amount: z.coerce.number().min(0)
});

const createCheckoutIntent = async (req, res, next) => {
  try {
    if (!stripe) {
      return res.status(500).json({
        success: false,
        message: 'Stripe is not configured. Add STRIPE_SECRET_KEY on the server.'
      });
    }

    const parsedBody = checkoutIntentSchema.parse(req.body);
    const amount = Math.round(parsedBody.our_fee + parsedBody.total_amount);

    if (amount <= 0) {
      return res.status(400).json({
        success: false,
        message: 'Invalid payment amount'
      });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'eur',
      metadata: {
        cart_items_count: String(parsedBody.cart.length)
      }
    });

    return res.status(200).json({
      success: true,
      data: {
        clientSecret: paymentIntent.client_secret
      }
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  createCheckoutIntent
};
