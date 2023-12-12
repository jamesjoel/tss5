import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
  <>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand"to="/admin">deshbord</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <NavLink className="nav-link"to="/admin/product">product<span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link"to="/admin/teacher">Teacher</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link"to="#"></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link disabled"to="#"></NavLink>
      </li>
    </ul>
  </div>
</nav>
  
  </>
  )
}

export default Header;