const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // Your API endpoint prefix
    createProxyMiddleware({
      target: 'http://localhost:5000', // Your backend URL
      changeOrigin: true,
      // cookieDomainRewrite: 'localhost', // or your frontend domain in production
    })
  );
};