const Courses=require("../modals/coursemodal")


exports.addcourse=async(req,res)=>{
    try{
      const{title,description,duration}=req.body
const existing=await Courses.findOne({title})
if(existing){
    res.status(400).json("course already exists")

}
else{
    const newcourse=new Courses({title,description,duration})
    await newcourse.save()
    res.status(200).json(newcourse)

    
}
    }
    catch(err){
        res.status(500).json(err)
        console.log(err);
        
    }

}


exports.getcourse=async(req,res)=>{
    try{
      const response= await Courses.find()
    res.status(200).json(response)
    }
    catch(err){
        res.status(500).json(err)
        console.log(err);
    }
    

}