const Service = require('../../models/service');
const fetch = require('node-fetch');

module.exports = {
  getAll
};

async function getAll(req, res) {
  const service = await Service.find({});
  res.json(service);
}

