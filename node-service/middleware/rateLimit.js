
    const rateLimit = require("express-rate-limit");
    const apiLimiter = rateLimit({
      windowMs: 60 * 60 * 1000, // 1 hours
      max: 5, // start blocking after 5 requests
      message: "您评论过于频繁，请稍后再试！"
    })
    module.exports = apiLimiter