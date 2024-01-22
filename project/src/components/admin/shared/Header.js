import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'
import {API_URL} from '../../../util/API'

const Header = () => {

  let data = useSelector(state=>state.StudentSlice);

  let [allCate, setAllCate] = useState([]);

  let [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  useEffect(()=>{
    if(localStorage.getItem("lorem"))
    {
      setIsAdminLoggedIn(true);
    }
  }, [])

  useEffect(()=>{
    axios.get(`${API_URL}/category`).then(response=>{
      
      console.log(response.data.result);
      setAllCate(response.data.result);
    })
  },[])


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
          <NavLink className="nav-link" to="/admin/dashboard">Dashboard ({data.length})</NavLink>
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
            Category ({allCate.length})
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
          <NavLink className="nav-link" to="/admin/student">Student</NavLink>
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