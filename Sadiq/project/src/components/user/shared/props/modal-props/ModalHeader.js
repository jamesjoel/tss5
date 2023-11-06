import React from 'react'

const ModalHeader = (props, {setOpenModal}) => {
  return (
    <>
        <div className="card">
                <div className="card-header ">
                <div className="row  p-0">
                    <div className="col-md-10">
                        <p style={{display : "inline"}} >
                        <span style={{ fontSize : "30px", fontFamily : "SFProDisplay-Bold, Helvetica, Arial, sans-serif;" ,fontWeight : "bolder"}}>Create an Account</span>
                    <br />
                        <span style={{fontSize :"16px", fontFamily : "inherit"}}>It's quick and easy</span>
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
                            <div className="">
                                <input type="text" className="form-control"  placeholder="Enter Your First Name" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="">
                                <input type="text" className="form-control" placeholder="Enter Your Second Name" />
                            </div>
                        </div>
                    </div>
                    <div className="my-2">
                        <input type="email" className="form-control"  placeholder="email address" />
                    </div>
                    <div className="my-2">
                        <input type="password" className="form-control"  placeholder="Create Password" />
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="">
                                <label>Date of Birth <i class="fa fa-question-circle"></i></label>
                                <input type="date" className="form-control"  placeholder="Enter Your First Name" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="">
                        <label>Select Your State</label>
                        <select onChange={(event)=>City(event)} className="form-control" >
                            <option>Select</option>
                            {
                                indiaState.map((value)=>{
                                    return(
                                        <option>{value}</option>
                                    )
                                })
                            }
                        </select>
                            </div>
                        </div>
                    </div>
                    <div className="my-2">
                        <label>Select Your State</label>
                        <select className="form-control">
                            <option>Select</option>
                            {
                                indiaCity.map((value)=>{
                                    return(
                                        <option>{value.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className=" my-0 text-center">
                        <p style={{fontSize :"14px", fontFamily : "inherit"}}> By clicking Sign Up, you agree to our
                        <NavLink to="/" className=" text-primary"> Terms </NavLink>, 
                        <NavLink to="/" className=" text-primary">Privacy Policy </NavLink> and 
                        <NavLink to="/" className=" text-primary"> Cookies Policy</NavLink>.
                        You may receive SMS notifications from us and can opt out at any time.</p>
                    <NavLink to="/admin" onClick={()=>setOpenModal(false)}
                        className="btn for"
                        style={{backgroundColor : "#00a400"}}
                    >
                        <h6 className="text-light" style={{fontWeight : "bolder"}}>SignUp</h6>
                    </NavLink>
                    </div>
                </div>
            </div>
    </>
  )
}

export default ModalHeader