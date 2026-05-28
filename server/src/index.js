const app = require('./app');
const env = require('./config/env');

app.listen(env.PORT, () => {
  console.log(`Players Bazaar API listening on http://localhost:${env.PORT}`);
});
