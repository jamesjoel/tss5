import React from "react";
import "../../assets/Modal.css";

function Modal({ setOpenModal }) {
return (
    <div className="modalBackground">
        <div className="modalContainer container">
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-10">
                        <p style={{display : "inline"}} >
                    <span style={{ fontSize : "24px", fontWeight : "bolder"}}>Create an Account</span>
                    <br />
                    It's quick and easy
                    </p>
                        </div>
                        <div className="col-md-2">
                    <button
                        onClick={()=>setOpenModal(false)}
                        className="btn"
                        style={{display : "inline", float : "right"}}
                        >
                            X
                        </button>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="my-3">
                                <input type="text"  placeholder="Enter Your First Name" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="my-3">
                                <input type="text"  placeholder="Enter Your Second Name" />
                            </div>
                        </div>
                    </div>
                    <div className="my-3">
                        <input type="email" className="form-control"  placeholder="example@email.com" />
                    </div>
                    <div className="my-3">
                        <label>Select Your State</label>
                        <select className="form-control">
                            <option>Select</option>
                        </select>
                    </div>
                    <div className="my-3">
                        <label>Select Your State</label>
                        <select className="form-control">
                            <option>Select</option>
                        </select>
                    </div>
                </div>
                <div className="card-footer"><h6>This is Footer</h6></div>
            </div>
        </div>
    </div>
  );
}

export default Modal;