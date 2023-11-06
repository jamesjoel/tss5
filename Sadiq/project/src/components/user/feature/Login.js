import React from 'react'
import {NavLink} from 'react-router-dom'
import { useState } from 'react'
import Modal from '../shared/props/Modal'

const Login = () => {

  // password seen un-seen section starts
  let [value, setValue] = useState('password')
  let [count, setCount] = useState(1)

  let password = (x)=>{
    setCount(count + x)
    let preCount = 1;
    preCount += count;
    console.log(preCount)
      if(preCount % 2 == 0){
        setValue('text')
      }else{
        setValue('password')
      }
  }
  // password seen un-seen section ends

  let [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <div className='container my-5' style={{minHeight:"700px"}}>
        <div className='row'>
          <div className='col-md-8 offset-md-2'>
            <div className='card'>
              <div className='card-header text-center bg-primary'>
                <h2 className='text-light'>Login Form</h2>
              </div>
              <div className='card-body'>
                  <div className='my-3'>
                  <label>Gmail ID</label>
                  <input type='email' className='form-control' placeholder='Enter Your G-mail' />
                  </div>
                  <div className='my-3'>
                  <label>Password</label>
                  <input type={value} style={{display:"inline", float:"right"}} className='form-control' placeholder='Enter Your Password' />
                  <button className=' btn text-primary'  onClick={()=>password(1)} style={{ display:"inline", float:"right"}}>see password</button>
                  </div>
              </div>
              <div className='card-footer bg-primary'>
                <NavLink to='/admin' className=' btn btn-primary' style={{display:"inline", float:"left"}}>LOGIN</NavLink> 
                <button className="btn openModalBtn text-light" style={{display:"inline", float:"right"}}
                  onClick={() => {
                  setModalOpen(true);
                  }}
                >
                  create account
                </button>
                {modalOpen && <Modal setOpenModal={setModalOpen} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login