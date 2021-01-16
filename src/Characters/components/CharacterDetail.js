import React, { useState,useEffect } from 'react'

import axios from 'axios'

import {
  useParams
} from "react-router-dom";

function Character() {

  const [character, setCharacter] = useState({})
  let { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://swapi.dev/api/people/'+id,
      );
      setCharacter(result.data);
    };
    fetchData()
  }, [])

  return(
    <div className="col s12">
      <h1>Character Detail</h1>
      <div className="card">
        <div className="card-content">
        <span className="card-title">Name: {character.name}</span>
          <p><b>Eye color:</b> {character.eye_color}</p>
          <p><b>Gender:</b> {character.gender}</p>

        </div>
      </div>
    </div>
  )
}

export default Character
