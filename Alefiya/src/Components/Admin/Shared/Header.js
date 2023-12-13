import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <>


            <div className="container-fluid sticky-top" style={{ backgroundColor: "#90BC79" }}>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light p-0">
                        <a href="index.html" className="navbar-brand">
                            <h2 className="text-white">Hairnic</h2>
                        </a>
                        <button type="button" className="navbar-toggler ms-auto me-0" data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav ms-auto">
                                <NavLink to="/admin/dashboard" className="nav-item nav-link">dashboard</NavLink>
                                <NavLink to="/admin/Patients" className="nav-item nav-link">Patients</NavLink>
                                {/* <a href="/about" className="nav-item nav-link">About</a>
                                <a href="/student" className="nav-item nav-link">Add Student</a>
                                <a href="/view-student" className="nav-item nav-link">View Student</a> */}
                                <NavLink to="/admin/products" className="nav-item nav-link">Products</NavLink>
                                {/* <div className="nav-item dropdown">
                                    <NavLink to="/admin/products" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Products</NavLink>
                                    <div className="dropdown-menu bg-light mt-2">
                                        <NavLink to="/admin/add" className="dropdown-item">Add products</NavLink>
                                        <a href="how-to-use.html" className="dropdown-item">How To Use</a>
                                        <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                        <a href="blog.html" className="dropdown-item">Blog Articles</a>
                                        <a href="404.html" className="dropdown-item">404 Page</a>
                                    </div> */}
                            </div>
                            {/* <NavLink to="" className="nav-item nav-link">Contact</NavLink>
                            </div>
                            <a href="" className="btn btn-dark py-2Pr px-4 d-none d-lg-inline-block">Shop Now</a> */}
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Header;