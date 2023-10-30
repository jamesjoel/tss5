import React from 'react'
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import AllRoutes from './config/AllRoutes';

const App = () => {
  return (
    <>
      <Header />
        <AllRoutes />
      <Footer />      
    </>
  )
}

export default App;