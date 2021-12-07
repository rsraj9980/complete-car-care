const Appointment = require('../../models/appointment');
module.exports = {
  create
};

async function create(req, res) {
    req.body.user = req.user._id;
    req.body.services = req.body.selectedServices;
    console.log(req.body);
    const appointment = await Appointment.create(req.body);
    res.json(appointment);
  }
  




