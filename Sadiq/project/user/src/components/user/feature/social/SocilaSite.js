import React, { useEffect, useState } from 'react'
import Footer from '../../shared/Footer'
import Header from '../../shared/Header'
import axios from 'axios'
import { API_URL } from '../../../../util/API'


const SocialSite = () => {

    let [userProfile, setUserProfile] = useState([]);
    let ID = localStorage.getItem('Token')

    let userProfiles = async() =>{
        let response = await axios.get(`${API_URL}/user/authentication/social/site`, { headers : { Authorization : ID } })
        setUserProfile(response.data)
    }

    useEffect(()=>{
        userProfiles()
    }, [])

  return (
    <>
        <Header />


        <div className='container my-5' style={{minHeight : "700px"}}>
            <div className='row'>
                <div className='col-md-10 offset-md-1'>
                    {
                        userProfile.map((value)=>{
                            return(
                                <div className='card'>
                                    <div className='card-header'>
                                        <h4 style={{display : "inline"}}>{value.firstname + " " + value.lastname}</h4>
                                        <button className='btn btn-primary' style={{ display : "inline", float : "right" }}>Follow</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>

        
        <Footer />
    </>
  )
}

export default SocialSite