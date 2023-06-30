import React, { useEffect } from 'react'
import {  useDispatch, useSelector } from 'react-redux';
import {fetchAllStudentsThunk} from "../redux/students/students.action"


export default function Students() {

      //need our allStudents array.
    //array will have the name, image, address, description,
    //name and address cannot be null
    const allStudents = useSelector(state => state.students.allStudents);
    const dispatch = useDispatch();
    const fetchAllStudents = () => {
    console.log('RUNNING DISPATCH FROM fetchAllStudents')
    return dispatch(fetchAllStudentsThunk());
  };
   
    useEffect(() => {
      console.log('FETCH ALL STUDENTS FIRING IN USEEFFECT')
      fetchAllStudents();
    }, []);

  return (
    <div>
        <h1>All Students</h1>


        {allStudents.length > 0 ? (
        <ul>
          {allStudents.map((student, index) => (
            <li key={index}>
              <p>Student: {student.firstname} {student.lastname}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No students registered.</p>
      )}

    </div>
  )
}
