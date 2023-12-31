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
      //replaces allStudents with a new version where the student to be added is included in the allstudents array
      return { ...state, allStudents: [...state.allStudents, action.payload] };
    case studentsActionTypes.delete_a_student:
      console.log(action.payload)
      return {...state,
        //returns a filtered version of the allstudents array where it is replaced with a version of the array where the deleted student is filtered out
          allStudents: state.allStudents.filter(allStudents => allStudents.id !== action.payload)};
    case studentsActionTypes.edit_a_student:
      return { ...state,
        // mapping the array to check if student id matches the id in the action pl
        //if the IDs match, the student object is replaced with new object in the pl
        //if the id's don't match, the student object remains the same
      allStudents: state.allStudents.map((student) =>  student.id === action.payload.id ? action.payload : student
       ),
      };
      default:
      return state;
  }
};

export default studentReducer;
