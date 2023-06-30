//action creators and thunks

import axios from "axios";
import campusesActionTypes from "./campuses.type";

//action creator
export const fetchAllCampuses = (payload) => ({
    type:campusesActionTypes.fetch_all_campuses, //action  type
    payload: payload, //data to be sent w/ action this is the data taken from thunk
})

// Thunk fetches data from our endpoint, and we return it to our action, 
//so that when action is called it has the data needed

export const fetchAllCampusesThunk = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get("http://localhost:8080/api/campus") 
            console.log("data", response.data)
            dispatch(fetchAllCampuses(response.data));
        }catch (error){
            console.error(error);
        }
    }
}