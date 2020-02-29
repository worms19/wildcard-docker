const mongoose = require('mongoose');
const { Schema } = mongoose;

const workSchema = new Schema({
    CompanyName:{
        type:String,
        required:true,
    },
    specialization:{
        type:String,
        required:true,
    },
    MonthOfLeaving:{
        type:String,
        required:true,
    },
    YearOfLeaving:{
        type:String,
        required:true,
    },
    Achievements:{
        type:Array,
        required:true,
    },
});

module.exports = mongoose.model('Work', workSchema);


