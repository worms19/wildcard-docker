const mongoose = require('mongoose');

const { Schema } = mongoose;

const proutSchema = new Schema({
    test1: {
        type: String,
        required: true,
    },
    test2: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Prout', proutSchema);