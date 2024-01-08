import React, { useEffect, useState } from 'react'
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import axios from 'axios'
import {API_URL} from '../../../util/API'
import AddSubCategoryModal from '../shared/props/AddSubCategoryModal'

const SubCategory = () => {

    let [subCategories, setSubCategories] = useState([])
    let [count, setCount] = useState()
    let allSubCategories = async() =>{
        let response = await axios.get(`${API_URL}/category/subcategory`)
        setSubCategories(response.data)
    }

    useEffect(()=>{
        allSubCategories()
    }, [subCategories])


  return (
    <>

<Header />
        <div className='container my-5' style={{ minHeight : "700px" }}>
            <div className='row'>
                <div className='col-md-8 offset-md-2'>
                    <div className='card'>
                        <div className='card-body'>
                            <table className='table table-hover table-striped text-center'>
                                <thead>
                                    <tr>
                                        <th>S.NO.</th>
                                        <th>CATEGORY</th>
                                        <th>SUBCATEGORY</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        subCategories?.map((value, index)=>{
                                            return(
                                                <tr value={index}>
                                                    <td>{index+1}</td>
                                                    <td>{value.category}</td>
                                                    <td>{value.subcategory}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className='card-footer text-center'>
                            <button className='btn btn-success' type='button' data-toggle="modal" data-target="#Open">ADD SUBCATEGORY</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />

        <AddSubCategoryModal />

    </>
  )
}

export default SubCategory