// import React, { useState, useEffect } from "react";
// import {
//   Button,
//   Form,
//   FormGroup,
//   Label,
//   Input,
//   FormText,
//   ListGroup,
//   ListGroupItem,
//   Col,
//   Row
// } from "reactstrap";
// import Layout from "../components/layouts";
// import useSignUpForm from "../hooks/custom-hook";
// import { getCourse } from "../actions/courseAction";
// import axios from "axios";
// import fetch from "isomorphic-unfetch";
// import { type } from "os";

// export default function Courselist({ data3 }) {
//   useEffect(() => {
//     return () => {};
//   }, [courseList]);
//   const [courseList, SetcourseList] = useState();

//   function handleOnClick(mdata) {
//     SetcourseList(mdata);
//   }
//   function renderdetail() {
//     if (!(courseList == undefined)) {
//       return (
//         <div>
//           <ul>
//             <li>Name: {courseList.name}</li>
//             <li>Description: {courseList.description}</li>
//             <li>Instructor: {courseList.instructor}</li>
//             <li>Level: {courseList.level}</li>
//           </ul>
//           <iframe
//             src="https://player.vimeo.com/video/241978642"
//             width="640"
//             height="360"
//             frameBorder="0"
//             allow="autoplay; fullscreen"
//             allowFullScreen
//           />
//         </div>
//       );
//     }
//   }

//   function renderContent() {
//     if (!(courseList == undefined)) {
//       //console.log(courseList.coursecontentreturn(

//       //  courseList.coursecontent.map((conArr,index) => {
//       //   console.log(conArr)
//       //    return(
//       //    //console.log(conArr)
//       //    <div>
//       //     <ul key={index}>
//       //     <li>Title: {conArr.title}</li>
//       //     <li>Type: {conArr.type}</li>
//       //     <li>Preview: {conArr.preview}</li>
//       //     <li>Data: {conArr.data}</li>
//       //   </ul>
//       //   </div>
//       //    )
//       //   })
//       var temp;
//         courseList.coursecontent.map((conArr,index) => {
//           console.log(conArr)
//           temp=conArr;
//         })
//       return (
//         <div>
//             <h1>
//             wowoow {temp.date}
//           </h1>
//         </div>

//         // courseList.coursecontent.map((conArr,index) => {
//         //   // console.log(conArr)
//         //  <h1>
//         //    wowoow
//         //  </h1>
//         // })
        
//       );
//     }
//   }

//   function renderDemo() {
//     [1, 2, 3, 4].map(function(item, i) {
//       console.log("test");
//       return <li>Test</li>;
//     });
//   }
//   return (
//     <Layout>
//       <Row>
//         <Col xs={6}>
//           <h1>CourseList</h1>

//           <ul>
//             {data3.map(mdata => (
//               <li key={mdata._id}>
//                 <button onClick={() => handleOnClick(mdata)}>
//                   {mdata.name}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </Col>
//         <Col xs={6}>
//           <h1>CourseDetail</h1>
//           {renderdetail()}
//         </Col>
//       </Row>
//       <Row>
//         <h1>CourseContent</h1>
//         {renderContent()}
//         <ul>{renderDemo()}</ul>
//       </Row>
//     </Layout>
//   );
// }

// Courselist.getInitialProps = async function() {
//   const res = await axios.get("http://localhost:9000/api/course");

//   return {
//     data3: res.data
//   };
// };
