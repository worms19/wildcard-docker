const Education = require('../models/Education');

module.exports = {
    getEducation: async () =>{
        try {

            return  await Education.find();

        }catch (e) {
            throw e;
        }
    },
    createEducation: async () => {
        const educObject = new Education({
            UniversityName:"IUT",
            specialization:"Electronic",
            MonthOfPassing:"August",
            YearOfPassing:"2011",
            Achievements:"FPGA projects",
        });
        try {
            const result = await educObject.save();
            return result;
        }catch (e) {
            throw e;
        }
    },
    deleteEducation: async (id) => {
        try{
            console.log(id);
            // const message = await Education.findOneAndDelete(id);
            return id;
        }catch (e) {
            throw e;
        }
    }
};

