import React from 'react'
import {NavLink}from 'react-router-dom'

const Header = () => {
  return (
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <NavLink className='nav-link' to='/'>Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className='nav-link' to='teacher'>Teacher</NavLink>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Header