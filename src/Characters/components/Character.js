import React from 'react'

import {
  Link
} from "react-router-dom";

function Character(props) {
  const data = props.data
  console.log(props.id);

  return(
    <div className="col s4">
      <div className="card">
        <div className="card-content">
        <span className="card-title">Name: {data.name}</span>
          <p><b>Eye color:</b> {data.eye_color}</p>
          <p><b>Gender:</b> {data.gender}</p>
          
          <Link to={"/character/"+props.id}>See Details</Link>
        </div>
      </div>
    </div>
  )
}

export default Character
