const Work = require('../models/Work');

module.exports = {
    getWork: async () =>{
        try {

            return  await Work.find();

        }catch (e) {
            throw e;
        }
    },
    createWork: async () => {
        const educObject = new Work({
            CompanyName: "Solent",
            specialization: "Full Stack Develloper",
            MonthOfLeaving: "2020",
            YearOfLeaving: "02",
            Achievements: ["mise en prod de easylink", "destruction de ogive"]
        });
        try {
            const result = await educObject.save();
            return result;
        }catch (e) {
            throw e;
        }
    },
    deleteWork: async (id) => {
        try{
            console.log(id);
            // const message = await Work.findOneAndDelete(id);
            return id;
        }catch (e) {
            throw e;
        }
    }
};

