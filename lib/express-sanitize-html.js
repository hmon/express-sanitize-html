const sanitizeHtml = require('sanitize-html');

const expressSanitize = function sanitize(options) {
  return function(req, res, next) {
    req.sanitizeHtml = function(param) {
      if (param) {
        return sanitizeHtml(param, options);
      }
    };
    next();
  };
};
module.exports = expressSanitize;
