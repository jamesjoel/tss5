import React from 'react'
import {Route, Routes} from 'react-router-dom'
import TicTacToe from '../components/TicTacToe'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<TicTacToe/>} />
    </Routes>
  )
}

export default AllRoutes