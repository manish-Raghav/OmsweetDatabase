const mongoose = require('mongoose');

const createdata=()=>{
    try{
      const conn=  mongoose.connect(process.env.MONGO_URL)
      console.log('database connnected Successfuly')
    }
    catch(error)
    {
        console.log('problem in database')
    }
  }

  module.exports =createdata;