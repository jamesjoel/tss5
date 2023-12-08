import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { API_URL } from '../../../util/API';
import { useFormik } from 'formik';
import Footer from '../shared/Footer';
import Header from '../shared/Header';

let initialValues ={
    firstname : "",
        lastname : "",
        state : "",
        city : "",
        dob : "",
        address : ""
}

const UpdateProfile = () => {

    let navigate = useNavigate();
    let [ showAlert, setShowAlert ] = useState(false);
    let [ alertMsg, setAlertMsg ] = useState("");
    let [ userData, setUserData ] = useState({});

    let PageLoad = async() =>{
        let ID = localStorage.getItem('Token');
        let response = await axios.get(`${API_URL}/user/authentication/accounts`, { headers : { Authorization : ID } })
        if(response.data.status === 200){
            setUserData(response.data.account)

            initialValues.firstname = response.data.account?.firstname
            initialValues.lastname = response.data.account?.lastname
            initialValues.dob = response.data.account?.dob
            initialValues.state = response.data.account?.state
            initialValues.city = response.data.account?.city
            initialValues.address = response.data.account?.address

        }else if(response.data.status === 403){
            setShowAlert(true);
            setAlertMsg("Error 403! account not found")
            setTimeout(()=>{
                setShowAlert(false)
            }, 3000);
        }else{
            setShowAlert(true);
            setAlertMsg("Error 404! account not found")
            setTimeout(()=>{
                setShowAlert(false)
            }, 3000);
        }
    }

    useEffect(()=>{
        PageLoad();
    }, [])


    let updateProfile = useFormik({
        initialValues ,
        onSubmit : async(formData) =>{
            let ID = localStorage.getItem('Token')
            let response = await axios.post(`${API_URL}/user/authentication/update/profile`, formData, { headers : { Authorization : ID } })
            if(response.data.status === 200){
                navigate(`/user/my-account`)
            }else{
                setShowAlert(true)
                setAlertMsg("Error 404! user not found")
                setTimeout(()=>{
                    setShowAlert(false)
                }, 3000)
            }
        }
    })

    let pageData = [
        {
            name : "First Name",
            data : userData?.firstname,
            update_name : "firstname"
        },
        {
            name : "Last Name",
            data : userData?.lastname,
            update_name : "lastname"
        },
        {
            name : "Date of Birth",
            data : userData?.dob,
            update_name : "dob"
        },
        {
            name : "State",
            data : userData?.state,
            update_name : "state"
        },
        {
            name : "City",
            data : userData?.city,
            update_name : "city"
        },
        {
            name : "Address",
            data : userData?.address,
            update_name : "address"
        }
    ]

  return (
    <>
    <Header />
        <div className='container' style={{minHeight : "700px"}} >
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                    {
                        showAlert === true ? <div class="alert alert-danger">
                        { alertMsg } <button data-dismiss='alert' className='btn' style={{float : "right"}}>X</button>
                        </div> : null
                    }
                    <div className='card my-5'>
                        <div className='card-header'>
                            <h3>Update Your Profile</h3>
                        </div>
                        <form onSubmit={updateProfile.handleSubmit}>
                        <div className='card-body'>
                            <table className='table table-striped my-3 table-hover'>
                                <thead>
                                    {
                                        pageData.map((value)=>{
                                            return(
                                                <tr>
                                                    <th>{value.name}</th>
                                                    <td><input type={value.name === "Date of Birth" ? 'date' : 'text'} onChange={updateProfile.handleChange} name={value.update_name.toLowerCase()} placeholder={`Enter Your ${value.name}`} defaultValue={value.data} className={'form-control'} /></td>
                                                </tr>
                                            )
                                        })
                                    }
                                </thead>
                            </table>
                        </div>
                        <div className='card-footer'>
                            <button type='submit' className='btn btn-primary form-control'>Update</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default UpdateProfile