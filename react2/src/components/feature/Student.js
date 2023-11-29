import React from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import * as YUP from 'yup';

const schema = YUP.object({
    name : YUP.string().required("Insert Name"),
    age : YUP.string().required("Insert Age")
})

const Student = () => {

    let form = useFormik({
        enableReinitialize : true,
        validationSchema : schema,
        initialValues : {
            name : "",
            age : ""
        },
        onSubmit : (formdata)=>{
            axios.post("http://localhost:8080/student", formdata).then(response=>{
                form.resetForm();
            })
        }
    })

  return (
    <div>
        <form onSubmit={form.handleSubmit}>
        <br />
        <br />
        <label>Name</label>
        <input value={form.values.name} name='name' onChange={form.handleChange} type='text' />
        <br />
        {
            form.errors.name && form.touched.name ? <small className='text-danger'>{form.errors.name}</small> : ''
        }
        <br />
        <br />
        <label>Age</label>
        <input value={form.values.age} name='age' onChange={form.handleChange} type='text' />
        <br />
        {
            form.errors.age && form.touched.age ? <small className='text-danger'>{form.errors.age}</small> : ''
        }
        <br />
        <br />
        <button type='submit'>Save</button>
        </form>
    </div>
  )
}

export default Student