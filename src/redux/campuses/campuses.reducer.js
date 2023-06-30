import campusesActionTypes from "./campuses.type";

//initial empty array for campuses
export const Initial_State = {
    allCampuses: [],
};

//reducer
const campusReducer = (state=Initial_State, action) => {
    console.log("PL", action);
    //logs which action is being used
    switch(action.type){
        case campusesActionTypes.fetch_all_campuses:
            //putting payload from fetch into the initial empty array
            return{...state, allCampuses: action.payload};
        default:
            return state;
    }
};

export default campusReducer;