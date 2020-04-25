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
            CompanyName: "Sopra",
            specialization: "Full Stack Develloper",
            MonthOfLeaving: "05",
            YearOfLeaving: "2019",
            Achievements: ["appli de l'ofii", "CIR / CIR presta"]
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

