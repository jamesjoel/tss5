import React from 'react'
import Home from '../../components/admin/feature/Home'
import Category from '../../components/admin/feature/Category'
import SubCategory from '../../components/admin/feature/SubCategory'

let AdminRoutes = [
    {
        path : 'home',
        element : <Home />
    },
    {
        path : 'category',
        element : <Category />
    },
    {
        path : 'subcategory',
        element : <SubCategory />
    }
]

export default AdminRoutes