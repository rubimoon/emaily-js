const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');
//pull out the User model class from mongoose in order to create User instance
const User = mongoose.model('users');

// kinda like generic Register
// callback which is called when the google redirect the user after the authentication
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      new User({
        googleId: profile.id,
      }).save();
    }
  )
);
