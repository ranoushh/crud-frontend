//action creators and thunks

import axios from "axios";
import studentsActionTypes from "./students.type";

//action creator
const fetchAllStudents = (payload) => ({
    type:studentsActionTypes.fetch_all_students, //action  type
    payload: payload, //data to be sent w/ action
})

// Thunk

const fetchAllStudentsThunk = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get("http://localhost:8080/") //!!!ADD ENDPOINT LATER!!!
            console.log("data", response.data)
            dispatch(fetchAllStudents(response.data));
        }catch (error){
            console.error(error);
        }
    }
}