import {combineReducers} from 'redux';
import studentReducer from './students/students.reducer';
import campusReducer from './campuses/campuses.reducer';

const allReducers = combineReducers({
    students: studentReducer,
    campuses: campusReducer
}); 

export default allReducers;

