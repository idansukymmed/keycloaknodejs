const createProxyMiddleware = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api/",
    createProxyMiddleware({
      target: "http://192.168.1.9:3018",
      changeOrigin: true,
    })
  );
  app.use(
    "/master",
    createProxyMiddleware({
      target: "http://192.168.1.9:8080",
      changeOrigin: true,
    })
  );
};