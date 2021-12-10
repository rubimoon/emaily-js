const keys = require('./config/keys');
const express = require('express');

const app = express();
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/User');
require('./services/passport');
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5050;
// express telling node to listen to the port.
mongoose.connect(keys.mongoURL);
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

// in production, the PORT will be provided by heroku
app.listen(PORT);
