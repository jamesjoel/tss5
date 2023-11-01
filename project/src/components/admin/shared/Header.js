import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/admin">Administrator</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/admin">Dashboard</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/admin/product">Product</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/admin/teacher">Teacher</NavLink>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Header