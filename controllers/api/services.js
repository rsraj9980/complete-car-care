const Service = require('../../models/service');

module.exports = {
  index,
  show
};

async function index(req, res) {
  const service = await Service.find({});
  res.json(service);
}

async function show(req, res) {
  const service = await Service.findById(req.params.id);
  res.json(service);
}
