const mongoose = require('mongoose');

const ParticipantSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    college: {
        type: String,
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
    timeStamp: {
        type: Date
    },
    regEvents: {
        type: Array
    },
    isUpdated: {
        type: Boolean,
        default: false
    },
    mailSent: {
        type: Boolean,
        default: false
    }
});

module.exports = Participant = mongoose.model('Participant', ParticipantSchema);