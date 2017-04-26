// Load required packages
const Guest = require('../models/guest');

exports.rsvp = function(req,res) {
  res.send(200);
}
// // Create endpoint /api/user for POST
// exports.postUser = function(req, res) {
//   var user = User.create({
//     username: req.body.username,
//     password: req.body.password,
//     email: req.body.email,
//     firstName: req.body.firstName,
//     lastName: req.body.lastName
//   }).then((user, created) => {
//     res.json(user);
//   }).catch((err) =>{
//     res.send(400);
//   });
// };
