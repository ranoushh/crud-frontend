//action creators and thunks

import axios from "axios";
import campusesActionTypes from "./campuses.type";

//action creator
export const fetchAllCampuses = (payload) => ({
    type:campusesActionTypes.fetch_all_campuses, //action  type
    payload: payload, //data to be sent w/ action this is the data taken from thunk
});

export const addNewCampus = (payload) => ({
    type: campusesActionTypes.add_new_campus,
    payload: payload,
});

export const deleteCampus = (id) => ({
    type: campusesActionTypes.delete_campus,
    payload: id
});


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
        };
    };
};

export const addNewCampusThunk = ({
    name,
    address,
    imageUrl,
    description
  }) => {
    return async (dispatch) => {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/campus/addCampus",
          {
            name: name,
            address: address,
            imageUrl: imageUrl,
            description: description
          }
        );
        console.log(response);
        dispatch(addNewCampus(response.data));
      } catch (error) {
        console.log(error);
      };
    };
};

export const deleteCampusThunk = (id) => {
    return async (dispatch) => {
    try {
            const response = await axios({
               url: `http://localhost:8080/api/campus/removeCampus/${id}`, 
               method: 'delete'
            });
            console.log(id);
            dispatch(deleteCampus(id));
         } catch (error) {
            console.error(error);
        };
    };
};
