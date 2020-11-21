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
    activity: [activitySchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Trip', tripSchema);