import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {addNewCampusThunk} from "../redux/campuses/campuses.action"
import { useNavigate } from "react-router-dom";

function AddCampus (){
    const [newCampus, setNewCampus] = useState({
        campusName: "",
        imageUrl: "",
        address: "",
        description: ""
    });
    const allCampuses = useSelector((newCampus) => newCampus.campuses.allCampuses);
    const dispatch = useDispatch();


    // //clear form - didnt work
    // function clear(){
    //     let element = document.getElementById("form");
    //     element.reset()
    // }

    function handleChange(event){
        setNewCampus({ ...newCampus, [event.target.name]: event.target.value });
    };

    function handleSubmit(event) {
        event.preventDefault();
        console.log(newCampus);
    
        const submitObj = {
          name: newCampus.campusName,
          address: newCampus.address,
          imageurl: newCampus.imageUrl,
          description: newCampus.description
        };
        console.log("my obj is:", submitObj);
        dispatch(addNewCampusThunk(submitObj));

        setNewCampus({
            campusName: "",
            imageUrl: "",
            address: "",
            description: ""
        });
        


      }
    // function handleSubmit(event) {
    //     console.log(newCampus);
        
    //     try {
    //         axios.post('http://localhost:8080/api/campus/addCampus', {
    //             name: newCampus.campusName,
    //             imageurl: newCampus.imageUrl,
    //             address: newCampus.address,
    //             description: newCampus.description
    //         })
    //         .then(response => {
    //             console.log(response.data);

    //             //clear form here after data is used 
    //             
    //         });
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    
    return(
        <div>
            <h1 style = {{fontFamily:'georgia,garamond,serif'}} >Add Campus:</h1>
            <form id="form" >
            <p></p>
                College Name: <input type = "text" 
                                id = "nameCollege" 
                                name = "campusName"
                                value={newCampus.campusName}
                                onChange={handleChange} 
                                placeholder="Enter Campus Name" /> 
                                <p></p>
                Image Url:    <input type = "text" 
                                id = "imageUrl" 
                                name = "imageUrl"
                                value={newCampus.imageUrl}
                                onChange={handleChange} 
                                placeholder="Enter URL" /> 
                                <p></p>
                Address:      <input type = "text" 
                                id = "address" 
                                name = "address"
                                value={newCampus.address}
                                onChange={handleChange} 
                                placeholder="Enter Address" /> 
                                <p></p>
                Description:  <input type = "text" 
                                id = "description" 
                                name = "description"
                                value={newCampus.description}
                                onChange={handleChange} 
                                placeholder="Enter description" /> 
                                <p></p>
            </form>
      
        <p></p>
        {/* <Link to= {`/campuses/${newCampus.id}`}> */}
            <button onClick={handleSubmit} id="submit">
                Submit
            </button>
        {/* </Link> */}
        </div>
    )
};

export default AddCampus;
