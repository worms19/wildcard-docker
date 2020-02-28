const Prout = require('../models/test');

module.exports = {

    getProut: async () =>{
        try {

            return  await Prout.find();

        }catch (e) {
            throw e;
        }
    },
    createProut: async (args, req) => {
        const pp = new Prout({
            test1:"c",
            test2:"d"
        });
        try {
            const result = await pp.save();
            return result;
        }catch (e) {
            throw e;
        }
    },
    cancelMessage: async (args, req) => {
        if (!req.isAuth){
            throw new Error('Unauthentificated');
        }
        try{
            const message = await Contact.findById(args.messageId);
            await Contact.deleteOne({_id: args.messageId});
            return message;
        }catch (e) {
            throw e;
        }
    }
};

