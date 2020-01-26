const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    proxy('/auth/google',{
      target: 'https://emaily-239.herokuapp.com'
    })
  );
};