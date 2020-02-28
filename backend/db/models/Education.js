const mongoose = require('mongoose');
const { Schema } = mongoose;

const educationSchema = new Schema({
    UniversityName:{
        type: String,
        required:true,
    },
    specialization:{
        type: String,
        required:true,
    },
    MonthOfPassing:{
        type: String,
        required:true,
    },
    YearOfPassing:{
        type: String,
        required:true,
    },
    Achievements:{
        type: String,
        required:true,
    },
});

module.exports = mongoose.model('Education', educationSchema);