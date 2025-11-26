const express=require("express")
const facultyControler=require("../controls/facultyController")
const eventController=require("../controls/eventControler")
const courseController=require("../controls/coursesControl")
const contactController=require("../controls/contactController")







const router=express.Router()

router.post("/addfaculty",facultyControler.addfaculty)
router.get("/getfaculty",facultyControler.getfaculty)
router.delete("/deletefaculty/:id",facultyControler.deletefaculty)



router.post("/addevent",eventController.addevent)
router.get("/getevent",eventController.getevent)
router.delete("/deletevent/:id",eventController.deleteEvent)

router.post("/addcourse",courseController.addcourse)
router.get("/getcourse",courseController.getcourse)

router.post("/addcontact",contactController.addcontact)
router.get("/getcontact",contactController.getcontact)



module.exports=router
