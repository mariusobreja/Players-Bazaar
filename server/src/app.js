const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const env = require('./config/env');
const healthRoutes = require('./routes/healthRoutes');
const playerRoutes = require('./routes/playerRoutes');
const checkoutRoutes = require('./routes/checkoutRoutes');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: env.CLIENT_ORIGIN
  })
);
app.use(express.json({ limit: '1mb' }));
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 200
  })
);

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Players Bazaar API is running'
  });
});

app.use('/api/health', healthRoutes);
app.use('/api/players', playerRoutes);
app.use('/api/checkout', checkoutRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
