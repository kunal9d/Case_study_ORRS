const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/admin',
    createProxyMiddleware({
      target: 'http://localhost:9055',
      changeOrigin: true,
    })
  );
  app.use(
    '/orders',
    createProxyMiddleware({
      target: 'http://localhost:9055',
      changeOrigin: true,
    })
  );
   app.use(
     '/trains',
     createProxyMiddleware({
       target: 'http://localhost:9055',
       changeOrigin: true,
     })
   );
    app.use(
      '/user',
      createProxyMiddleware({
        target: 'http://localhost:9055',
        changeOrigin: true,
      })
    );
  };