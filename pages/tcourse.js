import React, { useState,Fragment } from "react";
import { withRouter } from 'next/router'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  ListGroup,
  ListGroupItem,
  Col,
  Row
} from "reactstrap";
import axios from "axios";
import fetch from 'isomorphic-unfetch'
import Layout from "../components/layouts";

 function Course(props){
  
    return(
        
      <Fragment>
      <Row>
        <Col xs={6}>
          <h1>CourseContent</h1>
      
          <ul>
            {props.courseData.map(cdata => (
              <li key={cdata._id}>
               
                  {cdata.sectionName}
                 
              </li>
            ))}
          </ul>
        </Col>
        <Col xs={6}>
          
        </Col>
      </Row>
      <Row>
      
      </Row>
    </Fragment>
       
    )
}

// Course.getInitialProps = async function(context) {
//   const {coursename} = context.query
//   const res = await axios.get(`http://localhost:9000/api/course/${coursename}`);
//   console.log(res.data)
//   return {
//     courseData: res.data
//   };
// };


Course.getInitialProps = async function(context) {
  const { coursename } = context.query  

  const res = await fetch(`http://localhost:8000/api/course/${coursename}`)
  const data = await res.json()
  console.log(data)
  return {
    courseData: data
  };
};


export default Course