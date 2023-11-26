import {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { API_URL } from '../../../util/API'
import { useFormik } from 'formik'
import { UpdateIndividualVali} from '../../../schemas/UpdateSchema'

const Updation = () => {

  let navigate = useNavigate();

  let [userData, setUserData] = useState()
let IDPost = async() =>{
  let ID = localStorage.getItem('Token')
  let response = await axios.get(`${API_URL}/authentication/accounts/${ID}`)
  // console.log(response.data)
  setUserData(response.data)
}
  useEffect(()=>{
    IDPost()
  }, [])

  let [alertMsg, setAlertMsg] = useState("")
  let [showAlert, setShowAlert] = useState(false)
  let updateForm = useFormik({
    validationSchema : UpdateIndividualVali,
    initialValues :{
      contact : "",
      address : ""
    },
    onSubmit : async(formData)=>{
      let ID = localStorage.getItem('Token')
      await axios.post(`${API_URL}/authentication/update/${ID}`, formData).then(response =>{
        // console.log(response.data)
        if(response.data.status == 200){
          navigate(`/admin/settings/profile/${ID}`)
        }else{
          setShowAlert(true)
          setAlertMsg("A number must contain 10 Digits")
          setTimeout(()=>{
            setShowAlert(false)
          }, 3000);
        }
      })
    }
  })

  let pageData = [
    {
      name : "First Name",
      data : userData?.firstname
    },
    {
      name : "Last Name",
      data : userData?.lastname
    },
    {
      name : "Contact",
      data : userData?.contact
    },
    {
      name : "email ID",
      data : userData?.email
    },
    {
      name : "Date of Birth",
      data : userData?.dob
    },
    {
      name : "State",
      data : userData?.state
    },
    {
      name : "City",
      data : userData?.city
    },
    {
      name : "Address",
      data : userData?.address
    }
  ]

  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12 my-4'>
            <form onSubmit={updateForm.handleSubmit}>
            <div className='card'>
              <div className='card-body'>
                {
                  showAlert === true ? <div class="alert alert-danger">
                  <strong>Invalid Number!</strong> { alertMsg } <button data-dismiss='alert' className='btn' style={{float : "right"}}>X</button>
                </div> : null
                }
                <table className='table table-hover table-striped'>
                  <tr>
                  {
                    pageData.map((value)=>{
                      return(value.data === "" ? <thead>
                        <th>{value.name}</th>
                        <td><input type='text' onChange={updateForm.handleChange} name={value.name.toLowerCase()} placeholder={`Enter Your ${value.name}`} className={'form-control '+(updateForm.errors[value.name.toLowerCase()] && updateForm.touched[value.name.toLowerCase()] ? 'is-invalid' : '')} />
                        {
                          updateForm.errors[value.name.toLowerCase()] && updateForm.touched[value.name.toLowerCase()] ? <small className='text-danger'>{updateForm.errors[value.name.toLowerCase()]} !</small> : ''
                        }
                        </td>
                      </thead> : null)
                    })
                  }
                  </tr>
                </table>
              </div>
              <div className='card-footer text-center'>
                <button type='submit' className='btn btn-primary'>Save Changes</button>
              </div>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Updation