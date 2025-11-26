const mongoose=require("mongoose")


const facultyScheme=new mongoose.Schema({

    name:{
        type: String,
        required:true
    
    },
    department:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    
    }


})


const faculties=mongoose.model("faculties",facultyScheme)
module.exports=faculties

