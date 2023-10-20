import Home from '../components/feature/Home';
import About from '../components/feature/About';
import Contact from '../components/feature/Contact';
import { Route, Routes } from 'react-router-dom';

let AllRoutes = () =>{
        return(
            <Routes>
                <Route path='' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='contact' element={<Contact />} />
            </Routes>
        )
}

export default AllRoutes;