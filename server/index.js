const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express();

passport.use(new GoogleStrategy());

// client ID 858926767105-v5secnreg34n7h1u2ta2qin6b9pl4viv.apps.googleusercontent.com
// client Secret 

// app.get('/', (req, res)=>{
//   res.send({ hi: 'there'});
// });

const port = 5000;
const PORT = process.env.PORT || port;
app.listen(PORT);