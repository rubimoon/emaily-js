const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

// kinda like generic Register
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
    },
    (accessToken, refreshToken, profile) => {
      console.log(accessToken);
      console.log(refreshToken);
      console.log(profile);
    }
  )
);

//the first time to grant permission
app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

app.get('/auth/google/callback', passport.authenticate('google'));

// in production, the PORT will be provided by heroku
const PORT = process.env.PORT || 5050;
// express telling node to listen to the port.
app.listen(PORT);
