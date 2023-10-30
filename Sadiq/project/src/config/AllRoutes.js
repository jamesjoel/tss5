import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from '../components/feature/Home';

const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='' element={<Home />} />
        </Routes>
    </>
  )
}

export default AllRoutes