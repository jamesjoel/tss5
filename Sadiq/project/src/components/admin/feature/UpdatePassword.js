import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useFormik } from 'formik'
import { API_URL } from '../../../util/API'
import ChangePassword from '../../../schemas/UpdatePasswordSchema'

const UpdatePassword = () => {

  let navigate = useNavigate();

  let updatePass = useFormik({
    validationSchema : ChangePassword,
    initialValues : {
      currentpassword : "",
      changepassword : "",
      rechangepassword : ""
    },
    onSubmit : async(formData)=>{
      let ID = localStorage.getItem('Token')
      let response = await axios.post(`${API_URL}/authentication/update/password/${ID}`, formData)
      if(response.data.status == 200){
        navigate(`/admin/settings/profile/${ID}`)
      }else{
        if(response.data.errType == 1){
          console.log(response.data.errType)
        }else if(response.data.errType == 2){
          console.log(response.data.errType)
        }
      }
    }
  })

  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12'>
            <form onSubmit={updatePass.handleSubmit}>
            <div className='card'>
              <div className='card-body'>
                <div className='my-3'>
                  <input type='text' name='currentpassword' onChange={updatePass.handleChange}  placeholder='Enter Current Password' className={ 'form-control '+(updatePass.errors.currentpassword && updatePass.touched.currentpassword ? 'is-invalid' : '') } />
                </div>
                <div className='my-3'>
                  <input type='text' name='changepassword' onChange={updatePass.handleChange} className='form-control' placeholder='Enter New Password' />
                </div>
                <div className='my-3'>
                  <input type='text' name='rechangepassword' onChange={updatePass.handleChange} className='form-control' placeholder='Re-Enter New Password' />
                </div>
              </div>
              <div className='card-footer text-center'>
                <button type='submit' className='btn btn-sm btn-primary'>Change Password</button>
              </div>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default UpdatePassword