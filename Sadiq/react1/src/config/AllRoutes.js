import Home from '../components/feature/Home';
import About from '../components/feature/About';
import Contact from '../components/feature/Contact';
import Calculator from '../components/feature/Calculator';
import CalcuLator from '../components/feature/OneFileCalci';
import { Route, Routes } from 'react-router-dom';
import Teacher from '../components/feature/Teacher';
import AddEditTeacher from '../components/feature/AddEditTeacher';

let AllRoutes = () =>{
        return(
            <Routes>
                <Route path='' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='contact' element={<Contact />} />
                <Route path='calculator' element={<Calculator/>} />
                <Route path='ofc' element={<CalcuLator/>} />
                <Route path='teacher' element={<Teacher/>} />
                <Route path='teacher/add' element={<AddEditTeacher/>} />
                <Route path='teacher/:id' element={<AddEditTeacher/>} />
            </Routes>
        )
}

export default AllRoutes;