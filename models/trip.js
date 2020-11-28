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
    date: {
        type: Date,
        required: true
    },

    time: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    activity: [activitySchema],
}, {
    timestamps: true
});

function deleteOne(id) {
    const idx = trips.findIndex(trip => trip.id === parseInt(id));
    trips.splice(idx, 1);
  }
  

module.exports = mongoose.model('Trip', tripSchema),
                 deleteOne;