const mongoose = require('mongoose');

const ParticipantSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    teamName: {
        type: String,
        required: true
    },
    college: {
        type: String,
        required: true
    },
    yearOfStudy: {
        type: Number,
        required: true
    },
    phoneNum: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    regNum: {
        type: String,
        required: true
    },
    regEvents: {
        type: Array
    },
    timeStamp: {
        type: Date
    },
    isUpdated: {
        type: Boolean,
        default: false
    },
    isUpdatedCount: {
        type: Number,
        default: 1
    },
    mailSent: {
        type: Boolean,
        default: false
    },
    reminderSent: {
        type: Boolean,
        default: false
    }
});

module.exports = Participant = mongoose.model('Participant', ParticipantSchema);