import React from 'react'

export default function Campuses() {

    //need our allCampuses array.
    //array will have the name, image, address, description,
    //name and address cannot be null
    //uncomment once connected with backend.

  return (
    <div>
        <h1>All Campuses</h1>

        <div style = {{display: 'inline', float: 'left'}} >
            {allCampuses.length > 0 ? (
        <ul>
          {allCampuses.map((campus, index) => (
            <li key={index} N>
              <p>
                <h4> Campus: {campus.name} </h4>
              <p></p> 
              <img style={{ width: 350, height: 300 }} src= {campus.imageurl}></img></p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No campuses registered.</p>
      )}
        </div>
        

    </div>
  )
};
