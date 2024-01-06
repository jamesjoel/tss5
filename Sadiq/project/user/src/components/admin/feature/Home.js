import React from 'react'
import Header from '../shared/Header'
import Footer from '../shared/Footer'


const Home = () => {
  return (
    <>
        <Header />
            <div className='container my-3' style={{minHeight : "700px"}}>
                <div className='row'>
                    <div className='col-md-8 offset-md-2'>
                        <h3>DashBoard</h3>
                    </div>
                </div>
            </div>
        <Footer />
    </>
  )
}

export default Home