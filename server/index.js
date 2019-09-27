const express = require('express');

const app = express();


app.get('/', (req, res)=>{
  res.send({ hi: 'there'});


});

const port = 5000;

const PORT = process.env.PORT || port;

app.listen(PORT);