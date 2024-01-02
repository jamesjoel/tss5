import React from "react";
import { NavLink, useNavigate} from "react-router-dom";
import {useFormik} from 'formik'
import { useState, useEffect } from "react";
import axios from "axios";
import {API_URL} from '../../../../util/API';
import * as yup from 'yup'

let categoryValidation = yup.object({
    category : yup.string().required("Enter New Category")
})


let AddCategoryModal = () =>{

    let ID = localStorage.getItem('Naruto')
    let [errMsg, setErrMsg] = useState("")
    let [err, setErr] = useState(false)

   let catForm = useFormik({
    validationSchema : categoryValidation,
    initialValues : {
        category : ""
    },
    onSubmit : async(formdata)=>{
        let response = await axios.post(`${API_URL}/category`, formdata, { headers : { Authorization : ID } })
        if(response.data.success === true){
            setTimeout(()=>{
                let clsBtn = document.getElementById('clsBtn')
                let resetBtn = document.getElementById('resetBtn')
                resetBtn.click();
                clsBtn.click();
            }, 500)
        }else{
            setErrMsg("Category already exist!!!!")
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
                            <h3 style={{fontWeight : "bold", display : "inline", float : "left"}}>ADD NEW CATEGORY</h3>
                            <button type="button" data-dismiss="modal" className="btn btn-md" id="clsBtn" style={{ display : "inline", float : "right" }}>X</button>
                            <button type="reset" hidden='true' className="btn btn-md" id="resetBtn" style={{ display : "inline", float : "right" }}>X</button>
                        </div>
                        <div className="card-body">
                            <div className="my-3">
                                <label>Category</label>
                                <div className="input-group">
                                    <input type="text" name="category" onChange={catForm.handleChange}  placeholder="Enter Name of Category" aria-describedby="basic" className={'form-control '+(catForm.errors.category && catForm.touched.category ? 'is-invalid' : '')} />
                                        <button type="submit" id="basic" className="btn input-group-text btn-sm btn-success">ADD</button>
                                    </div>
                                    {
                                        catForm.errors.category && catForm.touched.category ? <small className="text-danger">{catForm.errors.category} !</small> : ''
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

export default AddCategoryModal;