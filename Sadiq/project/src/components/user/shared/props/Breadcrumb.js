import React from 'react'
import { NavLink } from 'react-router-dom'

const Breadcrumb = (props) => {
  return (
    <>
        <section className="breadcrumb-option">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumb__text">
                        <h4>About Us</h4>
                        <div className="breadcrumb__links">
                            <NavLink to="/">Home</NavLink>
                            <span>{props.data}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Breadcrumb