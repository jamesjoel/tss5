import React, { useEffect, useState } from 'react'
import Footer from '../../shared/Footer'
import Header from '../../shared/Header'
import axios from 'axios'
import { API_URL } from '../../../../util/API'


const SocialSite = () => {

    let [userProfile, setUserProfile] = useState([]);
    let ID = localStorage.getItem('Token')
    let [followBtn, setFollowBtn] = useState([])

    let userProfiles = async() =>{
        let response = await axios.get(`${API_URL}/user/authentication/social/site`, { headers : { Authorization : ID } })
        setUserProfile(response.data.accounts)
    }

    useEffect(()=>{
        userProfiles()
    }, [])

    let sendReq = async(event) =>{
        let response = await axios.post(`${API_URL}/user/authentication/social/follow/${ID}/${event}`)
        if(response.data.status === 200){
            setFollowBtn({ id : event})
        }
    }

    let cancelReq = async(event) =>{
        // let response = await axios.post(`${API_URL}/user/authentication/social/unfollow/${ID}/${event}`)
        // if(response.data.status === 200){
        // }
        setFollowBtn({ id : ""})
    }

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
                                        {
                                            followBtn === value._id ? <button className='btn btn-success'onClick={()=>cancelReq(value._id)} style={{ display : "inline", float : "right" }}>Requested</button>  :
                                            <button className='btn btn-primary'onClick={()=>sendReq(value._id)} style={{ display : "inline", float : "right" }}>Follow</button>
                                        }
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