const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    services: [servicesSchema],
    date: {type: Date, required: true},
    desc:{type:String, required:true}
  }, {
    timestamps: true
  });
  
  module.exports = mongoose.model('Appointment', appointmentSchema);