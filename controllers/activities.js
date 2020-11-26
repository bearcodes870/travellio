const Trip = require('../models/trip');

module.exports = {
  create
};

function create(req, res) {
  Trip.findById(req.params.id, function(err, trip) {
    trip.activity.push(req.body);
    trip.save(function(err) {
      res.redirect(`/trips/${trip._id}`);
    });
  });
}
