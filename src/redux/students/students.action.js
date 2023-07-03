//action creators and thunks

import axios from "axios";
import studentsActionTypes from "./students.type";

//action creator
export const fetchAllStudents = (payload) => ({
  type: studentsActionTypes.fetch_all_students, //action  type
  payload: payload, //data to be sent w/ action
});
export const addNewStudent = (payload) => ({
  type: studentsActionTypes.add_a_student,
  payload: payload,
});

export const deleteStudent = (id) => ({
  type: studentsActionTypes.delete_a_student,
  payload: id
});

// Thunk

export const fetchAllStudentsThunk = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:8080/api/student");
      console.log("data", response.data);
      dispatch(fetchAllStudents(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const addNewStudentThunk = ({
  firstname,
  lastname,
  email,
  imageurl,
  gpa,
  CampusId,
}) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/student/addStudent",
        {
          firstname: firstname,
          lastname: lastname,
          email: email,
          imageurl: imageurl,
          gpa: gpa,
          CampusId: CampusId,
        }
      );
      console.log(response);
      dispatch(addNewStudent(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteStudentThunk = (id) => {
  return async (dispatch) => {
  try {
          const response = await axios({
             url: `http://localhost:8080/api/student/removeStudent/${id}`, 
             method: 'delete'
          });
          console.log(id);
          dispatch(deleteStudent(id));
       } catch (error) {
          console.error(error);
      };
  };
};
