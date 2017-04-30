//Require Mongoose
var mongoose = require('mongoose');

//Define a schema

var GuestSchema = new mongoose.Schema({
  name                   : String,
  plusOne                : String,
  attending              : Boolean
});

module.exports = mongoose.model('Guest',GuestSchema);
