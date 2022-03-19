const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/User');
require('./services/passport');

// express telling node to listen to the port.
mongoose
  .connect(keys.mongoURL, { dbName: 'test' })
  .then(() => {
    console.log('Successfully connected to DB');
  })
  .catch(() => {
    console.log('Failed to connect to DB');
  });

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/paymentRoute.js')(app);

const PORT = process.env.PORT || 5050;
// in production, the PORT will be provided by heroku
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
