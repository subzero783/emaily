
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const app = express();

passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  }, accessToken => {
    console.log(accessToken);
  })
);

app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

app.get('/auth/google/callback', passport.authenticate('google'));

// client ID 858926767105-v5secnreg34n7h1u2ta2qin6b9pl4viv.apps.googleusercontent.com
// client Secret 

app.get('/', (req, res)=>{
  res.send({ hi: 'there'});
});

const port = 5000;
const PORT = process.env.PORT || port;
app.listen(PORT);