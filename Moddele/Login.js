
const mongoose = require('mongoose');

const Loginscheema = mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Lastname:{
        type:String,
        required:true

    },  
    Email:{
        type:String,
        required:true
        
    },

    password:{
        type:String,
        required:true
    }
})

const mymodel = mongoose.model('user' ,Loginscheema);
module.exports = mymodel;