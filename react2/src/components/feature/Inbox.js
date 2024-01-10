import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { abc } from '../../redux/InboxSlice'

const Inbox = () => {

    let allData = useSelector(state=>state);

    let dispatch = useDispatch();

    let del = (obj)=>{
        dispatch(abc(obj.id))
    }
  return (
    <div className='container my-4'>
        <div className="row">
            <div className="col-md-12">
                <table className="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Del</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allData.map((value, index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{value.name}</td>
                                        <td>{value.age}</td>
                                        <td><button onClick={()=>del(value)} className='btn btn-danger btn-sm'>del</button></td>
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

export default Inbox