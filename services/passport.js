const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');
//pull out the User model class from mongoose in order to create User instance
const User = mongoose.model('users');

//user is either existingUser or newUser in the callback function
//user.id is the token that is carried in the cookie
// id is not profile.id but the property generated automatically by mongoDB
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

// kinda like generic Register
// callback which is called when the google redirect    the user after the authentication
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true,
    },
    (accessToken, refreshToken, profile, done) => {
      try {
        User.findOne({ googleId: profile.id }).then((existingUser) => {
          if (existingUser) {
            done(null, existingUser);
          } else {
            new User({
              googleId: profile.id,
            })
              .save()
              .then((newUser) => {
                done(null, newUser);
              });
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  )
);
