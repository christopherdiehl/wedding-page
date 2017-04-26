//Require Mongoose
var mongoose = require('mongoose');

//Define a schema

var Guest = new mongoose.Schema({
    name                   : String,
    plusOneName            : Date,
    attending              : Boolean
});
