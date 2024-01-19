import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { useNavigate, useParams } from 'react-router-dom'
import TeacherSchema from '../../schema/TeacherSchema'
import axios from 'axios'

const AddEditTeacher = () => {
    let param = useParams();
    let navigate = useNavigate();

    let [teacher, setTeacher] = useState({
        name: "",
        salary: "",
        education: "",
        address: ""
    })

    useEffect(() => {
        if (param.id) {
            axios.get("http://localhost:8080/teacher/" + param.id).then(response => {
                setTeacher(response.data);
            })
        }
    }, [])

    let addFrm = useFormik({
        enableReinitialize: true,
        validationSchema: TeacherSchema,
        initialValues: teacher,
        onSubmit: (formdata) => {
            if (param.id) {
                axios.put("http://localhost:8080/teacher/" + param.id, formdata).then(response => {
                    // console.log(response.data);
                    navigate("/teacher")
                })
            } else {
                axios.post("http://localhost:8080/teacher", formdata).then(response => {
                    // console.log(response.data);
                    navigate("/teacher")
                })
            }
        }
    })
    return (
        <div className="row">
            <form onSubmit={addFrm.handleSubmit}>
                <div className="col-md-6 offset-md-3">
                    <h3>{param.id ? 'Update' : 'Add New'} Teacher</h3>
                    <div className='my-3'>
                        <label>Name</label>
                        <input value={addFrm.values.name} type='text' name="name" onChange={addFrm.handleChange} className={'form-control ' + (addFrm.errors.name && addFrm.touched.name ? 'is-invalid' : '')} />
                    </div>
                    <div className='my-3'>
                        <label>Salary</label>
                        <input value={addFrm.values.salary} type='text' name="salary" onChange={addFrm.handleChange} className={'form-control ' + (addFrm.errors.salary && addFrm.touched.salary ? 'is-invalid' : '')} />
                    </div>
                    <div className='my-3'>
                        <label>Education</label>
                        <select value={addFrm.values.education} name="education" onChange={addFrm.handleChange} className={'form-control ' + (addFrm.errors.education && addFrm.touched.education ? 'is-invalid' : '')} >
                            <option value="">Select</option>
                            <option value="BA">BA</option>
                            <option value="BSc">BSc</option>
                            <option value="MCA">MCA</option>
                            <option value="MBA">MBA</option>
                        </select>
                    </div>
                    <div className='my-3'>
                        <label>Address</label>
                        <textarea value={addFrm.values.address} name="address" onChange={addFrm.handleChange} className={'form-control ' + (addFrm.errors.address && addFrm.touched.address ? 'is-invalid' : '')} ></textarea>
                    </div>
                    <br />
                    <button type='submit' className='btn btn-success'>{param.id ? 'Update' : 'Add'}</button>
                </div>
            </form>
        </div>
    )
}

export default AddEditTeacher