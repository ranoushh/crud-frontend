import React, { useState , useEffect} from "react";
import { useParams } from "react-router-dom";
import { editCampusThunk } from "../redux/campuses/campuses.action";
import axios from "axios";
import { useDispatch } from "react-redux";

const EditCampus = ({ campus }) => {

const [currentCampus, setCurrentCampus] = useState(undefined);
const [updatedCampus, setUpdatedCampus] = useState([]);
const { id } = useParams();


useEffect(() => {
    const fetchCampus = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/campus/${id}`
        );
        console.log(response);
        setCurrentCampus(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCampus(); //do we need this ? 
  }, [id]);

  const [formData, setFormData] = useState({
    name: "", 
    imageurl: "",
    address: "",
    description: ""
  });

  function handleChange(e){
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setUpdatedCampus(formData);
  };

  function handleSubmit(e){
    e.preventDefault();
//prevents refreshing page when data is submitted in the form
  };

  const dispatch = useDispatch();

  function handleEditCampus(id){
    console.log("editing campus reached");
    dispatch(editCampusThunk(id, updatedCampus));
  };

  return (
    <div>
        <p></p>
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br></br>
      <label>
        Image URL:
        <input
          type="text"
          name="imageurl"
          value={formData.imageurl}
          onChange={handleChange}
        />
      </label>
      <br></br>
      <label>
        Address:
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </label>
      <br></br>
      <label>
        Description:
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </label>
      <br></br>
      <button onClick = {handleEditCampus(campus?.id)} type="submit">Submit</button>
    </form>
    </div>
  );
};

export default EditCampus;