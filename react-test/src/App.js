import React from 'react'
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
import AllRoute from './AllRoutes/AllRoutes'
const App = () => {
  return (
    <>
    <Header />
    <div className='container' style={{minHeight : "700px"}}>
      <AllRoute />
    </div>
    <Footer />
    </>
  )
}

export default App