//action creators and thunks

import axios from "axios";
import studentsActionTypes from "./students.type";

//action creators
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
  payload: id,
});

export const editStudent = (updateInput) => ({
  type: studentsActionTypes.edit_a_student,
  payload: updateInput,
});

// Thunks

export const fetchAllStudentsThunk = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("https://crud-backend-alpha.vercel.app/api/student");
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
        "https://crud-backend-alpha.vercel.app/api/student/addStudent",
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
      //Returning response.data to pass student data to components
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteStudentThunk = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios({
        url: `https://crud-backend-alpha.vercel.app/api/student/removeStudent/${id}`,
        method: "delete",
      });
      console.log(id);
      dispatch(deleteStudent(id));
    } catch (error) {
      console.error(error);
    }
  };
};

export const editStudentThunk = (updateInput) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `https://crud-backend-alpha.vercel.app/api/student/updateStudent/${updateInput.id}`,
        updateInput
      );
      console.log(response.data);
      console.log("Update Completed");
      dispatch(editStudent(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};
