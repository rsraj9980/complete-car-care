const Appointment = require('../../models/appointment');
module.exports = {
  create
};

async function create(req, res) {
    req.body.user = req.user._id;
    console.log(req.body);
    const appointment = await Appointment.create(req.body);
    res.json(appointment);
  }
  




