const { cleanHash } = require('../services/database/cache');

module.exports = async (req, res, next) => {
  await next();
  await cleanHash(req.user.id);
};
