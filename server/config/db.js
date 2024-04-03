const mongoose = require("mongoose")

const connectDB=async(data)=>{
    try{
      const dataname={
        dbName:"ducat"
      }
      await mongoose.connect(data,dataname);
      console.log("connection on");
    }
    catch(err){
        console.log(err);
    }
    }

module.exports = connectDB