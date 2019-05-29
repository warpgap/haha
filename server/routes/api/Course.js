const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const CourseSchema = require("../../models/Course");
const ContentSchema = require("../../models/Content");
/////////
const Course = mongoose.model("course", CourseSchema);
///////

//////

router.get("/test", (req, res) => res.json({ msg: "Course Works" }));

//GetCourse
router.get("/", async (req, res) => {

  Course.find()
  .then(data => {
    res.status(200).json(data)
  });

})

//Get Content
router.get("/:coursename", async (req, res) => {
  const MatchCourse = mongoose.model(req.params.coursename, ContentSchema);
  MatchCourse.find()
  .then(data => {
    res.status(200).json(data)
  });

})

//





//Add Course
router.post("/",async (req, res) => {
  const newCourse = new Course({
    courseName: req.body.courseName,
    courseDescription: req.body.courseDescription,
    courseInstructor: req.body.courseInstructor,
    courseLevel: req.body.courseLevel||1,
    coursePrice:[
      {
        fullPrice:req.body.courseFullPrice,
        discount:req.body.cousreDiscountPrice
      }

    ]

  });

  newCourse.save().then(course => res.json(course));
})

//Add Content
router.post("/:coursename" ,async (req,res)=>{
  const MatchContent = mongoose.model(req.params.coursename, ContentSchema);
  const newContent = new MatchContent({
    sectionName: req.body.sectionName,
    sectionNumber: req.body.sectionNumber,
      lessionList: [
      {
        lessionName: req.body.lessionName,
        lessionNumber:req.body.lessionNumber,
        lessionContent:req.body.lessionContent,
       
      }
    ]
  });

  newContent.save().then(content => res.json(content));
    })



module.exports = router;


// router.get("/:coursename", async (req, res) => {  
// var reqkey = req.params.coursename.toString()
//   var searchKey = new RegExp(reqkey, 'i')
//   Course.find({name:searchKey})
//   .then(data => {
//     res.status(200).json(data)
//   });
// })

//Add Content
// router.post("/content" ,async (req,res)=>{
//   console.log(req.body.CourseId)
//   Course.findById(req.body.CourseId).then(
//     course =>{
//       const newContent ={
//         title:req.body.ContentTitle,
//         type:req.body.ContentType,
//         order:req.body.ContentOrder || 1,
//         preview:req.body.ContentPreview || "Yes",
//         data:req.body.ContentData || "video"
//       }
//       course.coursecontent.unshift(newContent);
//       course.save().then(course=>res.json(course))
//     }
    
//   ).catch(err=>res.status(404).json({coursenotfound:'No course found'}))
//   })