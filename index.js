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

// middleware for authentication
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

// middleware for routing
require('./routes/authRoutes')(app);
require('./routes/paymentRoutes')(app);
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5050;
// in production, the PORT will be provided by heroku
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
