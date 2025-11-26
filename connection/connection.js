const mongoose=require("mongoose")
mongoose.connect(process.env.DBCONNECTION).then((res)=>{
    console.log("server connected with atlas");
    
}).catch((err)=>{
    console.log(err);
    
})