const Service = require('../../models/service');

module.exports = {
  index,
  show
};

async function index(req, res) {
  res.json(req.body);
}

async function show(req, res) {
  const service = await Service.findById(req.params.id);
  res.json(service);
}
