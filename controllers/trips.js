const Trip = require ('../models/trip');

module.exports = {
    index,
    new: newTrip,
    show,
    create,
    delete: deleteTrip
};

function index(req, res) {
    Trip.find({}, function(err, trips) {
      if (err) {
          console.log("failed", err);
      }
      console.log('trips', trips);
      res.render('trips/index', { title: 'Your Upcoming Trips', trips });
    });
  }

function show(req, res) {
  Trip.findById(req.params.id)
  .populate('activity').exec(function(err, trip) {
      res.render('trips/show', {
        title: 'Itinerary', trip
    });
  });
}


function newTrip(req, res) {
  res.render('trips/new', { title: 'Create New Trip'});
}

function create(req, res) {
  const trip = new Trip(req.body);
  trip.save(function(err) {
    if (err) {console.log(err);
      return res.redirect('/trips/new')};
    res.redirect('/trips');
  });
}

function deleteTrip(req, res) {
  console.log(req.params.id);
  Trip.deleteOne({ _id: req.params.id }).catch(err => console.log(err));
  res.redirect('/trips');
}