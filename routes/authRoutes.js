const passport = require('passport');

module.exports = (app) => {
  //the first time to grant permission
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));
};
