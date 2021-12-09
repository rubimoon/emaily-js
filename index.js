const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

// kinda like generic Register
passport.use(new GoogleStrategy());

// in production, the PORT will be provided by heroku
const PORT = process.env.PORT || 5050;

// express telling node to listen to the port.
app.listen(PORT);
