import axios from "axios";

// Add Course
export const addCourse = courseData => {
  axios
    .post("/api/course", courseData)
    .then(res => {})
    .catch(err => {
      console.log(err);
    });
};

// Add Content
export const addContent = courseContent => {
  const getcoursename = courseContent.courseName
  //console.log(courseContent)
  axios
    .post(`/api/course/${getcoursename}`, courseContent)
    .then(res => {})
    .catch(err => {
      console.log(err);
    });
};