
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import AllRoutes from "./routes/AllRoutes";


let App = ()=>{
  return(
    <>
      <Header />
      <div className="container" style={{minHeight : "700px"}}>
        <AllRoutes />
      </div>
      <Footer />
    </>
  )
}

export default App;