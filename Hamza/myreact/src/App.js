import React from 'react'
import AllRoutes from './routes/AllRoutes'
import Header from './components/user/shared/Header'
import Footer from './components/user/shared/Footer'
const App = () => {
  return (
    <>
    <Header />
      <AllRoutes/>
    <Footer />
    </>

  )
}



export default App