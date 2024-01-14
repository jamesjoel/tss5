import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useFormik } from 'formik';
import { add, remove } from '../../../redux/StudentSlice'

const Student = () => {
  let data = useSelector(state=>state);

  let disp = useDispatch();
  let form = useFormik({
    initialValues : {
      name : "",
      city : ""
    },
    onSubmit : (formdata)=>{
      disp(add(formdata))
    }
  })


  let del = (obj)=>{
    disp(remove(obj));
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          
        <form onSubmit={form.handleSubmit}>
            <div className='row mt-4'>
              <div className='col-md-5'>
                <input name='name' onChange={form.handleChange} type='text' placeholder='Name' className='form-control'/>

              </div>
              <div className='col-md-5'>
                <input name='city' onChange={form.handleChange} type='text' placeholder='City' className='form-control'/>

              </div>
              <div className='col-md-2'>

                  <button className='btn btn-success'>Add</button>
              </div>
            </div>
          </form>
          
          <table className="table table-dark my-5">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Name</th>
                <th>City</th>
                <th>Del</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((value, index)=>{
                  return(
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{value.name}</td>
                      <td>{value.city}</td>
                      <td><button onClick={()=>del(value)} className='btn btn-danger'>del</button></td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Student