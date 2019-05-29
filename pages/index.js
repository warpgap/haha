import React, { useState, useEffect,Fragment } from "react";
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
import Layout from "../components/layouts";
import axios from "axios";
import Link from "next/link";

function Index({ data3 }) {

  return (
    <Fragment>
      <Row>
        <Col xs={6}>
          <h1>CourseList</h1>
          <Link  href={`/course/tata`}>
                  "tata"
            </Link>

          <ul>
            {data3.map(mdata => (
              <li key={mdata._id}>
                <Link as={`/course/${mdata.courseName}`} href={`/tcourse/?coursename=${mdata.courseName}`}>
                  
                  {mdata.courseName}
                 
                </Link>
              </li>
            ))}
          </ul>
        </Col>
        <Col xs={6}>
          <p>dfhdfh</p>
        </Col>
      </Row>
      <Row>
      <p>dfdfd</p>
      </Row>
    </Fragment>
  );
}

Index.getInitialProps = async function() {
  const res = await axios.get('http://localhost:8000/api/course');

  return {
    data3: res.data
  };
};
export default Index;