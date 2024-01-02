import React, {useEffect, useState, useRef } from 'react'
import axios  from 'axios'
import { API_URL } from '../../../util/API'

const CategoryList = () => {

    let [cate, setCate] = useState({});
    let [allCate, setAllCate] = useState([]);

    let btn = useRef();

    useEffect(()=>{
        axios.get(`${API_URL}/category`).then(response=>{
            setAllCate(response.data.result)
        })
    },[])


    let del = (obj)=>{
        // console.log(obj);
        setCate(obj);
    }
    let confDel = async ()=>{
        await axios.delete(`${API_URL}/category/${cate._id}`);
        setAllCate(()=>{
            return allCate.filter(value=> value._id != cate._id );
        });
        btn.current.click();
    }
  return (
    <>
    <div className="container my-4">
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <h3>List of All Category</h3>
                <table className="table table-dark table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Category Name</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allCate.map((value, index)=>{
                                return(
                                    <tr key={value._id}>
                                        <td>{index+1}</td>
                                        <td>{value.name}</td>
                                        <td><button onClick={()=>del(value)} data-toggle="modal" data-target="#delModal" className='btn btn-sm btn-danger'>Delete</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <div className="modal fade" id="delModal">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h4>Delete Category</h4>
                </div>
                <div className="modal-body">
                    <p>Are you sure want to delete <strong style={{fontWeight : "bold"}}>{ cate ? cate.name : ''}</strong></p>
                </div>
                <div className="modal-footer">
                    <button className='btn btn-sm btn-danger' onClick={confDel}>Delete</button>
                    <button data-dismiss="modal" ref={btn} className='btn btn-sm btn-dark'>Close</button>
                </div>
            </div>
        </div>
    </div>                    


    </>
  )
}

export default CategoryList