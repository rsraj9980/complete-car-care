const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
  make: {type: String, required: true},
  model:{type:String, required:true},
  year: {type:Number,required: true}
}, {
  timestamps: true
});

module.exports = mongoose.model('Service', serviceSchema);