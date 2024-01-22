 import React from 'react'
 import { NavLink } from 'react-router-dom'
 
 const Header = () => {
   return (
    
    
    
    <nav className="container-fulid navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">My Crud</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">

          <NavLink className="nav-link active" aria-current="page" to="/student">student</NavLink>
        </li>

      </ul>
    </div>
  </div>
</nav>
   )
 }
 
 export default Header