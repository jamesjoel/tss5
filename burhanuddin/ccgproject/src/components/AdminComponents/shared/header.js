import React from 'react'

const header = () => {
  return (
    <>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
    <div className="container-fluid">
        <a className="navbar-brand" href="/admin">Admin Front</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
            <li className="nav-item">
            <a className="nav-link" href="/admin">Dashboard</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/admin/stock">Link</a>
            </li>
            
        </ul>
        </div>
    </div>
    </nav>
    </>
  )
}

export default header