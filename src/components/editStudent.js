import React, { useState } from "react";

const editStudent = ({ student }) => {
  const [formData, setFormData] = useState({
    firstname: student.firstname,
    lastname: student.lastname,
    email: student.email,
    gpa: student.gpa,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
//prevents refreshing page when data is submitted in the form
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
        />
      </label>
      <label>
        E-Mail:
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Image URL:
        <input
          type="text"
          name="imageurl"
          value={formData.imageurl}
          onChange={handleChange}
        />
      </label>
      <label>
        GPA:
        <input
          type="text"
          name="gpa"
          value={formData.gpa}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default editStudent;