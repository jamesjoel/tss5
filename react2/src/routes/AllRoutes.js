import { Routes, Route } from 'react-router-dom'
import Home from '../components/feature/Home'
import About from '../components/feature/About'
import Contact from '../components/feature/Contact'
import Help from '../components/feature/Help'
import Comp2 from '../components/feature/Comp2'
import Comp3 from '../components/feature/Comp3'
import Comp4 from '../components/feature/Comp4'
let AllRoutes = ()=>{
    return(
    <Routes>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='help' element={<Help />} />
        <Route path='comp2' element={<Comp2 />} />
        <Route path='comp3' element={<Comp3 />} />
        <Route path='comp4' element={<Comp4 />} />
    </Routes>
    );
}

export default AllRoutes;