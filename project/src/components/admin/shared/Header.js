import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

  let [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  useEffect(()=>{
    if(localStorage.getItem("lorem"))
    {
      setIsAdminLoggedIn(true);
    }
  }, [])

  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/admin">Administrator</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      {
        isAdminLoggedIn ? <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/admin/dashboard">Dashboard</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/admin/product">Product</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/admin/category">Category</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/admin/category-list">Category List</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/admin/teacher">Teacher</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/admin/logout">Logout</NavLink>
        </li>
        
      </ul> : ''
      }
    </div>
  </div>
</nav>
  )
}

export default Header