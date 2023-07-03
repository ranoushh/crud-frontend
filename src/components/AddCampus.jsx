import React from 'react'
import { useState } from 'react';
import axios from 'axios';

function AddCampus (){
    const [newCampus, setNewCampus] = useState({
        campusName: "",
        imageUrl: "",
        address: "",
        description: ""
    });

    // //clear form - didnt work
    // function clear(){
    //     let element = document.getElementById("form");
    //     element.reset()
    // }

    function handleChange(event){
        setNewCampus({ ...newCampus, [event.target.name]: event.target.value });
    };

    function handleSubmit() {
        console.log(newCampus);
        
        try {
            axios.post('http://localhost:8080/api/campus/addCampus', {
                name: newCampus.campusName,
                imageurl: newCampus.imageUrl,
                address: newCampus.address,
                description: newCampus.description
            })
            .then(response => {
                console.log(response.data);

                //clear form here after data is used 
                setNewCampus({
                    campusName: "",
                    imageUrl: "",
                    address: "",
                    description: ""
                });
            });
        } catch (error) {
            console.log(error);
        }
    }

    
    return(
        <div>
            <h1>Add Campus:</h1>
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

            <button onClick={handleSubmit} id="submit">
                Submit
            </button>
        </div>
    )
};

export default AddCampus;