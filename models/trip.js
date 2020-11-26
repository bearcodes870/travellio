const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitySchema = new Schema({
    activity: String,
    time: {
        type: String, 
        default: 'Morning'}
}, {
    timestamps: true 
});

const tripSchema = new Schema({
    date: Date,
    location: String,
    activity: [activitySchema],
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