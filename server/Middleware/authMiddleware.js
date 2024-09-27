const rateLimit = require('express-rate-limit')

const resetPasswordLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour 
    max: 5, // limit each IP to 5 requests
    message: 'Too many password reset requests, please try again after an hour.',
    headers: true,
  });

module.exports = {resetPasswordLimiter}