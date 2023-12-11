import React, { useEffect, useState } from 'react'
import Header from '../../shared/Header'
import Footer from '../../shared/Footer'
import axios from 'axios'
import {API_URL} from '../../../../util/API'

const FriendReq = () => {

  let ID = localStorage.getItem('Token')
  let [recReq, setRecReq] = useState([]);
  let [sendReq, setSendReq] = useState([]);

  let PageLoad = async() =>{
    let response = await axios.get(`${API_URL}/user/authentication/social/request`, { headers : { Authorization : ID } })
    console.log(response.data)
    // if(response.data?.status === 200){
    //   if(response.data?.userData.length != 0){
    //     if(response.data?.userData.sender?.length != 0){
    //       setSendReq(response.data.userData)
    //       }else if(response.data?.userData.receiver?.length != 0){
    //         setRecReq(response.data.userData)
    //       }
    //   }
    // }
  }

  useEffect(()=>{
    PageLoad()
  }, [])

  return (
    <>
        <Header />
        <div className='container my-3' style={{ minHeight : "700px" }}>
          <div className='row'>
            <div className='col-md-6 text-center'>
              <h4 style={{fontWeight : "bold", color : "GrayText"}}>Received</h4>
              <div className='card'>
                <div className='card-body'>
                  <table className='table table-hover table-primary table-striped'>
                    <tbody>
                      {
                        recReq?.length != 0 ? recReq.map((value)=>{
                          return(
                            <tr>
                              <td>{value}</td>
                            </tr>
                          )
                        }) :
                        <tr>
                          <th>No Request Received</th>
                        </tr>
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className='col-md-6 text-center'>
              <h4 style={{fontWeight : "bold", color : "GrayText"}}>Send</h4>
              <div className='card'>
                <div className='card-body'>
                  <table className='table table-hover table-info table-striped'>
                    <tbody>
                      <tr>
                        <td>hello</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
    </>
  )
}

export default FriendReq