const mongoose=require('mongoose');// require library

const contactSchema= new mongoose.Schema({// create db schema


    name: {
        type: String,
        required: true
        
    },
    mobile:
    {
        type: Number,
        required: true
    }
});

const Contact= mongoose.model('Contact', contactSchema);

module.exports=Contact;// export the module for another modules;


