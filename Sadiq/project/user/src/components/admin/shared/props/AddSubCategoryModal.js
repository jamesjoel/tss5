import React, { useRef } from "react";
import { NavLink, useNavigate} from "react-router-dom";
import {useFormik} from 'formik'
import { useState, useEffect } from "react";
import axios, { all } from "axios";
import {API_URL} from '../../../../util/API';
import * as yup from 'yup'

let categoryValidation = yup.object({
    category : yup.string().required("Select Category"),
    subcategory : yup.string().required("Enter New SubCategory")
})


let AddSubCategoryModal = () =>{

    let ID = localStorage.getItem('Naruto')
    let [errMsg, setErrMsg] = useState("")
    let [err, setErr] = useState(false)
    let [allCate, setAllCate] = useState([])
    let clsBtn = useRef();
    let clrBtn = useRef();

    let AllCategory = async() =>{
        let response = await axios.get(`${API_URL}/category`)
        setAllCate(response.data)
    }

    useEffect(()=>{
        AllCategory();
    }, [])

    let catForm = useFormik({
        validationSchema : categoryValidation,
        initialValues : {
            category : "",
            subcategory : ""
        },
        onSubmit : async(formdata)=>{
            let response = await axios.post(`${API_URL}/category/subcategory`, formdata, { headers : { Authorization : ID } })
            if(response.data.success === true){
                clsBtn.current.click();
                clrBtn.current.click();
            }else{
                setErrMsg("SubCategory already exist!!!!")
                setErr(true)
                setTimeout(()=>{
                    setErr(false)
                }, 2000)
            }
        }
    })

return (
    <>
    <div className="modal fade" id="Open" tabIndex="-1" >
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-body">
                    <form onSubmit={catForm.handleSubmit}>
                    <div className="card">
                        <div className="card-header">
                            <h3 style={{fontWeight : "bold", display : "inline", float : "left"}}>ADD NEW SUBCATEGORY</h3>
                            <button type="button" data-dismiss="modal" className="btn btn-md" ref={clsBtn} style={{ display : "inline", float : "right" }}>X</button>
                            <button type="reset" hidden='true' className="btn btn-md" ref={clrBtn} style={{ display : "inline", float : "right" }}>X</button>
                        </div>
                        <div className="card-body">
                            <div className="my-3">
                                <label>Category</label>
                                <select name="subcategory" onChange={catForm.handleChange} className={'form-control '+(catForm.errors.category && catForm.touched.category ? 'is-invalid' : '')} > 
                                    <option>SELECT</option>
                                    {
                                        allCate.map((value)=>{
                                            return(
                                                <option key={value._id}>{value.category}</option>
                                            )
                                        })
                                    }
                                </select>
                                {
                                    catForm.errors.category && catForm.touched.category ? <small className="text-danger">{catForm.errors.category} !</small> : ''
                                }
                            </div>
                            <div className="my-3">
                                <label>SubCategory</label>
                                <div className="input-group">
                                    <input type="text" name="category" onChange={catForm.handleChange}  placeholder="Enter Name of Category" aria-describedby="basic" className={'form-control '+(catForm.errors.subcategory && catForm.touched.subcategory ? 'is-invalid' : '')} />
                                        <button type="submit" id="basic" className="btn input-group-text btn-sm btn-success">ADD</button>
                                    </div>
                                    {
                                        catForm.errors.subcategory && catForm.touched.subcategory ? <small className="text-danger">{catForm.errors.subcategory} !</small> : ''
                                    }
                                    {
                                        err ? <small className="text-danger">{errMsg}</small> : null
                                    }
                            </div>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default AddSubCategoryModal;