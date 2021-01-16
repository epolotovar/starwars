import React from 'react'

import {
  Link
} from "react-router-dom"

function Film(props) {
  const data = props.data

  return(
    <div className="col s4">
      <div className="card">
        <div className="card-content">
        <span className="card-title">{data.title}</span>
          <p><b>Episode:</b> {data.episode_id}</p>
          <p><b>Director:</b> {data.director}</p>

          <Link to="/characters">See Characters</Link>

        </div>
      </div>
    </div>
  )
}

export default Film
