import React from 'react'
import Header from './components/share/Header'
import AllRoutes from './allRoutes/AllRoutes'
const App = () => {
  return (
    <>
      <Header />
      <div className='container my-5' style={{minHeight : "700px"}}>
        <AllRoutes />
      </div>
    </>
  )
}

export default App