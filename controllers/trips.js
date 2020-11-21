const Trip = require ('../models/trip');

module.exports = {
    index,
    // show,
    new: newTrip,
    create
};

function index(req, res) {
    Trip.find({}, function(err, trips) {
      res.render('trips/index', { title: 'Your Upcoming Trips', trips });
    });
  }
  
function newTrip(req, res) {
  res.render('trips/new', { title: 'Create New Trip'});
}

function create(req, res) {
  const trip = new Trip(req.body);
  trip.save(function(err) {
    if (err) return res.redirect('/trips/new');
    res.redirect('/trips');
  });
}