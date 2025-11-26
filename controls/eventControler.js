const events=require("../modals/eventmodal")


exports.addevent=async(req,res)=>{
    try{
         const{title,date,description}=req.body
    const existing=await events.findOne({title})
    if(existing){
        res.status(400).json("event already exists")
    }
    else{
        const newevent=new events({title,date,description})
        await newevent.save()
        res.status(200).json(newevent)
    }
    }catch(err){
        res.status(500).json(err)
        console.log(err);
        
    }
   
}

exports.getevent=async(req,res)=>{
    try{
        const response=await events.find()
    res.status(200).json(response)
    }catch(err){
        res.status(500).json(err)
        console.log(err);
        
    }   
}


exports.deleteEvent=async(req,res)=>{
    try{
      const{id}=req.params
    const response=await events.findByIdAndDelete(id)
    res.status(200).json(response)
    }catch(err){
        res.status(500).json(err)
        console.log(err);
        
    }   
  

    
}