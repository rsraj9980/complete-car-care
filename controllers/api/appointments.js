const sgMail = require('@sendgrid/mail');
const appointment = require('../../models/appointment');
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const Appointment = require('../../models/appointment');
const user = require('../../models/user');

const FROM_EMAIL = 'test9646@outlook.com'
module.exports = {
  create,
  getAll
};

async function create(req, res) {
    req.body.user = req.user._id;
    req.body.services = req.body.selectedServices;
    console.log(req.body);
    const appointment = await Appointment.create(req.body);
    sendEmail(appointment, req.user);
    res.json(appointment);
}

async function getAll(req, res) {
    const appointment = await Appointment.find({"user" :`${req.user._id}`});
    res.json(appointment);
}
  
  

//Helper functions
async function sendEmail (appointment, user) {
    let formattedDateTime = appointment.date.toLocaleString();
    let AmPm = formattedDateTime.slice(-2);
    formattedDateTime = formattedDateTime.substr(0 ,formattedDateTime.length - 6) + " " + AmPm;
    const msg = {
      to: [`${user.email}` , 'test4696@outlook.com'], 
      from: FROM_EMAIL,
      subject: 'Appointment Confirmation',
      text: `Your appointment has been confirmed for ${formattedDateTime}`,
      html: `<p>Your appointment has been confirmed for ${formattedDateTime}</p>`,
    }
  //return sgMail.send(msg);
}
  




