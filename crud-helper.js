// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Appointment = require('./models/appointment');
const Service = require('./models/service');
// const Order = require('./models/order');

// Local variables will come in handy for holding retrieved documents
let user, appointment, service;
let users, appointments, services;
