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
        <li className="nav-item dropdown">
          <a className='nav-link dropdown-toggle' data-toggle="dropdown">
            Product
          </a>
          <div className='dropdown-menu'>
          <NavLink className="dropdown-item" to="/admin/product">Add</NavLink>
          <NavLink className="dropdown-item" to="/admin/product-list">List</NavLink>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a className='nav-link dropdown-toggle' data-toggle="dropdown">
            Category
          </a>
          <div className='dropdown-menu'>
          <NavLink className="dropdown-item" to="/admin/category">Add</NavLink>
          <NavLink className="dropdown-item" to="/admin/category-list">List</NavLink>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a className='nav-link dropdown-toggle' data-toggle="dropdown">
            Sub-Category
          </a>
          <div className='dropdown-menu'>
          <NavLink className="dropdown-item" to="/admin/subcategory">Add</NavLink>
          <NavLink className="dropdown-item" to="/admin/subcategory-list">List</NavLink>
          </div>
        </li>
        
        <li className="nav-item">
          <NavLink className="nav-link" to="/admin/teacher">Teacher</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/admin/users">Users</NavLink>
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