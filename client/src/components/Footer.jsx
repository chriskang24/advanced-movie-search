import React from 'react';

import './Footer.scss'


export default function footer() {

  return (

    <div className="flex">
      <div className="default-padding">
        <h3 style={{ color: "#f4c10f", fontSize: "25px"}}>ABOUT US:</h3>
        <p style={{fontSize: "25px"}}>
          Hello! Welcome to our movie database project. We are three full-stack developers that have
          built this project from the ground up as part of a two week finals project for Lighthouse Labs
          web development bootcamp!
      </p>
        <p style={{ fontSize: "25px"}}>
          This movie database leverages React on the front end combined with two main APIs to render all the media search elements. PostgreSQL is used to store user favorites and watchlists. The backend is functional off node-express. If you would like to contact us, please see below:
      </p>
        <ul className="list-inline">
          <h4 style={{ color: "#f4c10f", fontSize: "25px"}}>Project Contributers: (GitHub Links)</h4>
          <li className="list-inline-item">
            <a className="footer-anchor" href="https://github.com/Cernuie" style={{ color: "#f4c10f", fontSize: "30px"}}>
              Alexander Nguyen
          </a>
          </li>
          <li className="list-inline-item">
            <a className="footer-anchor"href="https://github.com/stephant98" style={{ color: "#f4c10f", fontSize: "30px"  }}>
              Stephan Truchsess
          </a>
          </li>
          <li className="list-inline-item">
            <a className="footer-anchor" href="https://github.com/chriskang24" style={{ color: "#f4c10f", fontSize: "30px" }}>
              Christopher Kang
          </a>
          </li>
        </ul>
      </div>
      <div className="default-padding">
        <h3>APIs Used:</h3>
        <div>
          <img src="TMDB.png" alt="tmdb" width="135px" />
          <img src="OMDB.png" alt="omdb"height="100px" />
        </div>
      </div>
    </div>

  )
}