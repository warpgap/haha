// import React, { useState,useEffect } from 'react'
// import { Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
// import Layout from "../components/layouts";
// //import { useInput } from '../hooks/input-hook';
// import useInput from '../hooks/custom-hook';
// import {addCourse} from "../actions/courseAction"

// export default function courseadd() {
 
//     const {inputs, handleInputChange} = useInput({courseName: '', courseDescription: '', courseInstructor: '', courseLevel: '', courseFullPrice: '',courseDiscountPrice: ''}, );
    
//     useEffect(() => {
//         return () => {
//             console.log(inputs)
//         };
//     }, [inputs])

//     const handleSubmit = (evt) => {
//         evt.preventDefault();
//         addCourse(inputs)
//         console.log(inputs)
//     }
//     return (
//         <Layout>
//             <h1>Course Add/Edit</h1>
           
//         <Form onSubmit={handleSubmit} >

//         <FormGroup>
//           <Label for="NameText">Name</Label>
//           <Input type="text" id="NameText" name="courseName" onChange={handleInputChange}/>
//         </FormGroup>
//         <FormGroup>
//           <Label for="DescriptionText">Description</Label>
//           <Input type="textarea"  id="DescriptionText" name="courseDescription" onChange={handleInputChange} />
//         </FormGroup>
//         <FormGroup>
//           <Label for="InstructorText">Instructor</Label>
//           <Input type="text"  id="InstructorText" name="courseInstructor" onChange={handleInputChange} />
//         </FormGroup>
//         <FormGroup>
//           <Label for="LevelSelect">Level : Grade</Label>
//           <Input type="select"  id="LevelSelect" name="courseLevel" onChange={handleInputChange}>
//             <option>1</option>
//             <option>2</option>
//             <option>3</option>
//             <option>4</option>
//             <option>5</option>
//           </Input>
//         </FormGroup>
//         <FormGroup>
//           <Label for="PriceText">Price</Label>
//           <Input type="text"  id="PriceText" name="courseFullPrice" onChange={handleInputChange} />
//           <Label for="DiscountText">Discount (%)</Label>
//           <Input type="text"  id="DiscountText" name="cousreDiscountPrice" onChange={handleInputChange} />
//         </FormGroup>
//        <br/>
//         <Button>Submit</Button>
//       </Form>
     
//       </Layout>
//     )
// }
