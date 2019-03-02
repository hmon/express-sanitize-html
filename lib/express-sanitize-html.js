const sanitizeHtml = require('sanitize-html');

const expressSanitize = function sanitize(options) {
  return function(req, res, next) {
    req.sanitize = function(param) {
      if (param) {
        return sanitizeHtml(param, options);
      }
    };
    next();
  };
};
module.exports = expressSanitize;
