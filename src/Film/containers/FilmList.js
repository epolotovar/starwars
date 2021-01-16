import React, { useState,useEffect } from 'react'
import axios from 'axios'

import Film from '../components/Film'


function FilmList() {

  const [list, setList] = useState({results:[]})

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://swapi.dev/api/films/',
      );
      setList(result.data);
    };
    fetchData()
  }, [])

  return(
    <div className="row">
      <div className="col s12"><h1>Lista de peliculas</h1></div>

      {
        list.results.map(item => (
          <Film data={item}/>
        ))
      }
    </div>
  )
}


export default FilmList
