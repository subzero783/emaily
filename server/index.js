const express = require('express');

const app = express();

const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth20');

const port = 5000;



passport.use(new GoogleStrategy());

const PORT = process.env.PORT || port;

app.listen(PORT);