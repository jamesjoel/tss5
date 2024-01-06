import { Routes, Route } from 'react-router-dom'
import Home from '../components/feature/Home'
import About from '../components/feature/About'
import Contact from '../components/feature/Contact'
import Help from '../components/feature/Help'
import Comp2 from '../components/feature/Comp2'
import Comp3 from '../components/feature/Comp3'
import Comp4 from '../components/feature/Comp4'
import Comp5 from '../components/feature/Comp5'
import Comp6 from '../components/feature/Comp6'
import Comp7 from '../components/feature/Comp7'
import Student from '../components/feature/Student'
import StudentList from '../components/feature/StudentList'
import Login from '../components/feature/Login'
import Profile from '../components/feature/Profile'
import Logout from '../components/feature/Logout'
let AllRoutes = ()=>{
    return(
    <Routes>
        <Route path='' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='profile' element={<Profile />} />
        <Route path='logout' element={<Logout />} />

        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='help' element={<Help />} />
        <Route path='comp2' element={<Comp2 />} />
        <Route path='comp3' element={<Comp3 />} />
        <Route path='comp4' element={<Comp4 />} />
        <Route path='comp5' element={<Comp5 />} />
        <Route path='comp6' element={<Comp6 />} />
        <Route path='comp7' element={<Comp7 />} />
        <Route path='student' element={<Student />} />
        <Route path='student-list' element={<StudentList />} />
    </Routes>
    );
}

export default AllRoutes;