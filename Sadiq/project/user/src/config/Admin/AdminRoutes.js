import React from 'react'
import Home from '../../components/admin/feature/Home'
import Category from '../../components/admin/feature/Category'

let AdminRoutes = [
    {
        path : 'home',
        element : <Home />
    },
    {
        path : 'category',
        element : <Category />
    }
]

export default AdminRoutes