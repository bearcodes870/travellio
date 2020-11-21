const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitySchema = new Schema({
    name: String,
    date: Date
}, {
    timestamps: true 
});

const tripSchema = new Schema({
    date: Date,
    location: String,
    activity: []
}, {
    timestamps: true
});

function deleteOne(id) {
    // Find the index based on the id of the todo object
    const idx = trips.findIndex(trip => trip.id === parseInt(id));
    trips.splice(idx, 1);
  }
  

module.exports = mongoose.model('Trip', tripSchema),
                 deleteOne;