const Trip = require ('../models/trip');

module.exports = {
    index,
    new: newTrip,
    // show,
    create
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

// function show(req, res) {
//   Trip.findById(req.params.id)
//     .populate('activity').exec(function(err, trip) {
//       // // Performer.find({}).where('_id').nin(movie.cast)
//       // Performer.find({_id: {$nin: movie.cast}})
//       // .exec(function(err, activity) {
//         console.log(activity);
//         res.render('trips/show', {
//           title: 'Trip Itinerary', trip, activity
//         // });
//       });
//     });
//   }

  
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