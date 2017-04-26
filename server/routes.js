const guestController = require('./controllers/guest');

module.exports = (router) => {

  router.get('/', function(req,res) {
    res.json({message: 'welcome to node api boilerplate!'});
  });

  router.route('/rsvp').
    post(guestController.rsvp);

  router.route('/health').
    get(function(req,res) { res.sendStatus(200) });

}
