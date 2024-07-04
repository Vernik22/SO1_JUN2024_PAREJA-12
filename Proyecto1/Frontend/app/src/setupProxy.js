import { createProxyMiddleware } from 'http-proxy-middleware';

module.exports = function(app) {
  app.use(
    '/getRam',
    createProxyMiddleware({
      target: 'http://backend:8000',
      changeOrigin: true,
    })
  );

  app.use(
    '/insertRam',
    createProxyMiddleware({
      target: 'http://backend:8000',
      changeOrigin: true,
    })
  );

  app.use(
    '/getCPU',
    createProxyMiddleware({
      target: 'http://backend:8000',
      changeOrigin: true,
    })
  );

  app.use(
    '/insertProcess',
    createProxyMiddleware({
      target: 'http://backend:8000',
      changeOrigin: true,
    })
  );

  app.use(
    '/delProcess',
    createProxyMiddleware({
      target: 'http://backend:8000',
      changeOrigin: true,
    })
  );
};
