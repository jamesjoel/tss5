import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    let [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("access_token")) {
            setLoggedIn(true);
        }

    }, [])

    return (
        <>
            {/* <!-- Navbar Start --> */}

            <div className="col-lg-9">
                <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                    <a href="" className="text-decoration-none d-block d-lg-none">
                        <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
                    </a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav mr-auto py-0">
                            <NavLink to="/" className="nav-item nav-link active">Home</NavLink>
                            {/* <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                            <NavLink to="/shopdetail" className="nav-item nav-link">Shop Detail</NavLink>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <a href="cart.html" className="dropdown-item">Shopping Cart</a>
                                    <a href="checkout.html" className="dropdown-item">Checkout</a>
                                </div>
                            </div> */}
                            <NavLink to="/about" className="nav-item nav-link">About</NavLink>

                        </div>
                        {
                            loggedIn ?
                                <>
                                    <div className="navbar-nav ml-auto py-0">
                                        <NavLink to="/login" className="nav-item nav-link">Login</ NavLink>
                                        <NavLink to="/signup" className="nav-item nav-link">Register</ NavLink>
                                    </div>
                                </>
                                :
                                <>
                                    <div className="navbar-nav ml-auto py-0">
                                        <NavLink to="/myaccount" className="nav-item nav-link">My account</ NavLink>
                                        <NavLink to="/logout" className="nav-item nav-link">Logout</ NavLink>
                                    </div>
                                </>
                        }
                    </div>
                </nav>
            </div>

        </>
    )
}

export default Navbar;