const faculties = require("../modals/facultyModal");



exports.addfaculty=async(req,res)=>{
    try{
           const{name,department,image}=req.body
    const existing=await faculties.findOne({name})
    if(existing){
        res.status(400).json("faculty already exists")
    }
    else{
        const newfaculty=new faculties({name,department,image})
        await newfaculty.save()
        res.status(200).json(newfaculty)

    }
    }catch(err){
        res.status(500).json(err)
        console.log(err);
        
    }
   
}

exports.getfaculty=async(req,res)=>{
    try{
         const response=await faculties.find()
    res.status(200).json(response)
    }catch(err){
        res.status(500).json(err)
        console.log(err);
        
    }
}

exports.deletefaculty=async(req,res)=>{
    try{
        const id=req.params.id
    const response=await faculties.findByIdAndDelete(id)
    res.status(200).json(response)
    }catch(err){
        res.status(500).json(err)
        console.log(err);
        
    }
   


}