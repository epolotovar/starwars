import React, { useState,useEffect } from 'react'
import axios from 'axios'

import Character from '../components/Character'

function Characters() {

  const [list, setList] = useState({results:[]})

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://swapi.dev/api/people/',
      );
      setList(result.data);
    };
    fetchData()
  }, [])

  return(
    <div className="row">
      <div className="col s12"><h1>Characters List</h1></div>
      <div className="col s12">
      {
        list.results.map((item,key) => (
          <Character data={item} id={key+1}/>
        ))
      }
      </div>

    </div>
  )
}


export default Characters
