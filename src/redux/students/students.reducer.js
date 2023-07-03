import studentsActionTypes from "./students.type";

//initial empty array for students
export const Initial_State = {
  allStudents: [],
};

//reducer
const studentReducer = (state = Initial_State, action) => {
  console.log("PL", action);
  //logs which action is being used
  switch (action.type) {
    case studentsActionTypes.fetch_all_students:
      //putting payload from fetch into the initial empty array
      return { ...state, allStudents: action.payload };
    case studentsActionTypes.add_a_student:
      return { ...state, allStudents: [...state.allStudents, action.payload] };
      case studentsActionTypes.delete_a_student:
        return {...state,
            allStudents: state.allStudents.filter(allStudents => allStudents.id !== action.payload)};
      default:
      return state;
  }
};

export default studentReducer;
