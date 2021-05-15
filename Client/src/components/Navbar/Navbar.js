import React from "react";
import { Link } from "react-router-dom";
import './Navbar'






  

const Navbar = () => {
  const changeTheme = () => {
    const btnMoon = document.querySelector('.btn-moon')
    const header = document.querySelector('.header')
    const details = document.querySelectorAll('.details')
    const uls = document.querySelectorAll('ul')

    btnMoon.addEventListener('click', () => {
      document.body.classList.toggle('light-theme')
      header.classList.toggle('light-theme')

      details.forEach((detail) => {
        detail.classList.toggle('light-theme')
      })

      uls.forEach((ul) => {
        ul.classList.toggle('light-theme')
      })
    })
  }

  return (

    <>
     
        <div>
          <h1>Where in the world?</h1>
        </div>

        <div>
          <button className="btn-moon" onClick={() => changeTheme()}>
            <i className="fas fa-moon"></i>
          </button>
        </div>
    
    
 
  
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light navblog">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/"><Link to="/capital">Capital</Link> </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/"><Link to="/codes">Code</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/"><Link to="/langues">Langage</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/"><Link to="/paysN">country</Link></a>
            </li>
          </ul>
    
        </div>
    
      </div>
    </nav>
    </div>
    </>
  );
};

export default Navbar;