import React from 'react'
import AllRoutes from './routes/AllRoutes'
import { useDispatch } from 'react-redux'
import { getData } from './redux/TeacherSlice'

const App = () => {
  let disp = useDispatch();

  disp(getData());
  return (
    <>
   
      <AllRoutes />
   
    </>
  )
}

export default App