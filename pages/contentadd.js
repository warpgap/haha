// import React, { useState,useEffect } from 'react'
// import axios from "axios";

// import { Button, Form, FormGroup, Label, Input, FormText,Dropdown,DropdownItem,DropdownMenu,DropdownToggle} from 'reactstrap';
// import Layout from "../components/layouts";
// import useInput from '../hooks/custom-hook';
// import {addContent} from "../actions/courseAction"
// export default function courseadd() {
//   const [courseName,setCourseName] = useState("SelectCourse")
//   const {inputs, handleInputChange} = useInput({courseName:'',sectionName:'',sectionNumber:1,lessionName: '', lessionCategory: 'video', lessionNumber: '1', lessionPreview: 'no', lessionContent: ''}, );
//   const [dropDownStatus,setdropDownStaus] = useState(false)
//   const [courseData,setCourseData] = useState()
//   const [courseId,setCourseId] = useState("")

//   useEffect( async () => {
    
//       const res = await axios.get("http://localhost:9000/api/course").then(res=>{
//       setCourseData(res.data)
//         console.log(courseData)
    
//       })
// },[])
// useEffect(() => {
//   return () => {
//     console.log(inputs)
//   };
// }, [inputs])


//     const handleSubmit = (evt) => {
//         evt.preventDefault();
//         inputs.courseName = courseName
//         addContent(inputs)
//         console.log(inputs)
//     }

//     function renderCourseDropdown () {
//       if(courseData != undefined){
//       return(
//         <Dropdown isOpen={dropDownStatus} toggle={()=>setdropDownStaus(!dropDownStatus)} >
//            <DropdownToggle caret>
//           {courseName}
//         </DropdownToggle>
//         <DropdownMenu>
         
//        { courseData.map((data)=>{
//           return(
//           <DropdownItem  onClick={()=>{setCourseId(data._id);setCourseName(data.courseName)}}>{data.courseName}</DropdownItem>
//           )
       
//         })}
//         </DropdownMenu>
//       </Dropdown>
//       )
//     }
//   }

    

//     return (
//         <Layout>
//             <h1>Content Add/Edit</h1>
//             <br/><br/>
//             <h2>Select Course</h2>
//             {renderCourseDropdown()}
//            <br/><br/>
//         <Form onSubmit={handleSubmit} >

//         <FormGroup>
//           <Label for="sectionName">sectionName</Label>
//           <Input type="text" name="sectionName" id="sectionName"  onChange={handleInputChange} />
//         </FormGroup>
//         <FormGroup>
//           <Label for="sectionNumber">sectionNumber</Label>
//           <Input type="select" name="sectionNumber" id="sectionNumber"  onChange={handleInputChange} >
//             <option>1</option>
//             <option>2</option>
//             <option>3</option>
//             <option>4</option>
//             <option>5</option>
//           </Input>
//         </FormGroup>
      
        

//         <FormGroup>
//           <Label for="TitleTetx">Title</Label>
//           <Input type="text" name="lessionName" id="TitleTetx"  onChange={handleInputChange} />
//         </FormGroup>
//         <FormGroup>
//           <Label for="TypeSelect">Type</Label>
//           <Input type="select" name="lessionCategory" id="TypeSelect"  onChange={handleInputChange} >
//             <option>Video</option>
//             <option>Text</option>
//             <option>Exam</option>
//           </Input>
//         </FormGroup>
//         <FormGroup>
//           <Label for="OrderSelect">Order</Label>
//           <Input type="select" name="lessionNumber" id="OrderSelect"  onChange={handleInputChange} >
//             <option>1</option>
//             <option>2</option>
//             <option>3</option>
//             <option>4</option>
//             <option>5</option>
//           </Input>
//         </FormGroup>
//         <FormGroup>
//           <Label for="AllowPreviewSelect">AllowPreview</Label>
//           <Input type="select" name="lessionPreview" id="AllowPreviewSelect" onChange={handleInputChange} >
//             <option>Yes</option>
//             <option>No</option>
            
//           </Input>
//         </FormGroup>
//         <FormGroup>
//           <Label for="VideoText">Video (url)</Label>
//           <Input type="text" name="lessionContent" id="VideoText"  onChange={handleInputChange} />
//         </FormGroup>
//        <br/>
//         <Button>Submit</Button>
//       </Form>
     
//       </Layout>
//     )
// }
