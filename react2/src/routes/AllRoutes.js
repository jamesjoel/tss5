import { Routes, Route } from 'react-router-dom'
import Home from '../components/feature/Home'
import About from '../components/feature/About'
import Contact from '../components/feature/Contact'
import Help from '../components/feature/Help'
let AllRoutes = ()=>{
    return(
    <Routes>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='help' element={<Help />} />
    </Routes>
    );
}

export default AllRoutes;