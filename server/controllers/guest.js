// Load required packages
const Guest = require('../models/guest');

/*plus one field optional*/
exports.rsvp = function(req,res) {
  let { guest, plusone, attending } = req.body;
  let status = 400;
  if (attending === '') {
    attending = false;
  } else {
    attending = true;
  }
  if( guest ) {
    status = 200;
    let guestInstance = new Guest({
      name: guest,
      plusOne: plusone,
      attending: attending
    });
    guestInstance.save(function(err){
      if (err) {
        console.error(err);
        status = 500;
      }
    });
  }
  console.log(`guest: ${guest} plusone: ${plusone} attending: ${attending}`);
  console.log('rsvp recieved');
  res.sendStatus(status);
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
