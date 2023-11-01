import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Teacher = () => {

    let [teacher, setTeacher] = useState([]);
    let [product, setProduct] = useState([]);

    
    useEffect(()=>{
        // axios.get("http://localhost:8080/api/teacher").then((response)=>{
            
        //     setTeacher(response.data);
        // })
        axios.get("https://fakestoreapi.com/products").then(response=>{
            setProduct(response.data);
        })
    }, [])    
    

  return (
    <div className="container my-5">
        <div className="row">
            <div className="col-md-12">
                
                {/* <table className='table table-dark table-hover table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Full Name</th>
                            <th>Class</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            teacher.map((value, index)=>{
                                return(
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{value.fullname}</td>
                                        <td>{value.class}</td>
                                        <td>{value.salary}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table> */}

                {/* <table className='table table-dark'>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            product.map((value, index)=>{
                                return(
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{ value.title }</td>
                                        <td>{ value.price }</td>
                                        <td>{ value.category }</td>
                                        <td><img src={value.image} style={{ height : "100px", width : "100px"}} /></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table> */}
                <div className='row'>
                    {
                        product.map((value, index)=>{
                            return(
                                <div className='col-md-3'>
                                    <div className='card'>
                                        <img className='card-img-top'  src={value.image} style={{height : "200px"}}/>
                                        <div className='card-body'>
                                            <p>{value.title}</p>
                                            <p>{value.price}</p>
                                        </div>
                                        <div className='card-footer'>
                                            <button className='btn btn-sm btn-dark'>Buy</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Teacher