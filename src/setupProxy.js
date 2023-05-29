/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line import/no-extraneous-dependencies
const createProxyMiddleware = require("http-proxy-middleware");

const host = "http://localhost:3100/";
const controllers = ["/api"];

const proxyAll = createProxyMiddleware("/", {
  target: host,
});

module.exports = (app) => {
  app.use((req, res, next) => {
    if (controllers.some((c) => req.path.startsWith(c))) {
      proxyAll(req, res, next);
    } else {
      next();
    }
  });
};
