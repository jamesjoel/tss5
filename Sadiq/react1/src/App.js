import Header from './components/shared/Header'
import Footer from './components/shared/Footer';
import AllRoutes from './config/AllRoutes.js';

let App = ()=>{
  return (
    <>
      <Header />
      <div className='container-fluid' style={{minHeight:'600px'}}>
      <AllRoutes />
      </div>
      <Footer />
    </>
  )
}

export default App;