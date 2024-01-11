import React, { useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {

  let [IsAdminLoggedIn , setIsAdminLoggedIn] = useState(false);
  useEffect(()=>{
    if(localStorage.getItem('pistoluu'))
    setIsAdminLoggedIn(true);
  },[])


  return (
    <>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
    <div className="container-fluid">
        <a className="navbar-brand" href="/admin">Admin Front</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
       
       {IsAdminLoggedIn ? 
        <ul className="navbar-nav">
            
            
              
              <li className="nav-item">
            <a className="nav-link" href="/admin" style={{color: "white"}} >Dashboard</a>
            </li>
            
            
            
              
              <li className="nav-item">
            <a className="nav-link" href="/admin/stock" style={{color: "white"}} >Stock</a>
            </li>
            
        
             
              <li className="nav-item">
            <NavLink className="nav-link text-light " to="/admin/logout" >Log Out</NavLink>
            </li>

            <li className="nav-item dropdown me-4">
                <NavLink className="nav-link dropdown-toggle text-light" to="#" id="dropdownPages" data-bs-toggle="dropdown"
                >Categories</NavLink>
                <ul className="dropdown-menu list-unstyled">
                  <li>
                    <NavLink to="/admin/category-add" className="dropdown-item item-anchor">Add </NavLink>
                  </li>
                  <li>
                    <NavLink to="/admin/category-list" className="dropdown-item item-anchor">List </NavLink>
                  </li>
                </ul>
              </li>


            <li className="nav-item dropdown me-4">
                <NavLink className="nav-link dropdown-toggle text-light" to="#" style={{color:"white"}} id="dropdownPages" data-bs-toggle="dropdown"
                >Sub Categories</NavLink>
                <ul className="dropdown-menu list-unstyled">
                  <li>
                    <NavLink to="/admin/subcategory-add" className="dropdown-item item-anchor">Add </NavLink>
                  </li>
                  <li>
                    <NavLink to="/admin/subcategory-list" className="dropdown-item item-anchor">List </NavLink>
                  </li>
                </ul>
              </li>
            <li className="nav-item dropdown me-4">
                <NavLink className="nav-link dropdown-toggle text-light" to="#" style={{color:"white"}} id="dropdownPages" data-bs-toggle="dropdown"
                >Products</NavLink>
                <ul className="dropdown-menu list-unstyled">
                  <li>
                    <NavLink to="/admin/product-add" className="dropdown-item item-anchor">Add </NavLink>
                  </li>
                  <li>
                    <NavLink to="/admin/product-list" className="dropdown-item item-anchor">List </NavLink>
                  </li>
                </ul>
              </li>
            



            


            
        </ul> : ''}
        </div>
    </div>
    </nav>
    </>
  )
}

export default Header