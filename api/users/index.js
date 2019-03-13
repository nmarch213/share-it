const mongo = require('mongo');

module.exports = async (req, res) => {
  const t = Date.now();
  const db = await mongo();
  res.end(`Connection took ${Date.now() - t}ms`);
};
