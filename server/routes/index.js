const express = require('express');
const router = express.Router();

const {
    registerValidator,
    userValidator
} = require('../middleware/validator');
const {
    registerParticipant
} = require("./event/register")

router.post(
    '/participant/register', 
    registerValidator(),
    userValidator,
    registerParticipant
);

module.exports = router;