import React, {useState, useEffect, useRef} from 'react'
import axios from 'axios'
import { API_URL} from '../../../util/API'



const ProductList = () => {

  let [pro, setPro] = useState({});
  let btn = useRef();

  let [allPro, setAllPro] = useState([]);
  useEffect(()=>{

    axios.get(`${API_URL}/product`).then(response=>{
      setAllPro(response.data.result);
    })

  },[])

  let askDelete = (obj)=>{
    setPro(obj);
  }
  let confDelete = async()=>{
    await axios.delete(`${API_URL}/product/${pro._id}`);
    setAllPro(()=>{
      return allPro.filter(value => value._id != pro._id);
    })
    btn.current.click();
  }

  return (
    <>
    <div className="container my-3">
      <div className="row">
        <div className="col-md-12">
          <h4>List of All Product</h4>
          <table className='table table-dark'>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Title</th>
                <th>Price</th>
                <th>Category</th>
                <th>Sub-Category</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                allPro.map((value, index)=>{
                  return(
                    <tr key={value._id}>
                      <td>{index+1}</td>
                      <td>{value.title}</td>
                      <td>{value.price}</td>
                      <td>{value.category}</td>
                      <td>{value.subcategory}</td>
                      <td><button data-target="#delModal" data-toggle="modal" onClick={()=>askDelete(value)} className='btn btn-danger btn-sm'>Delete</button></td>
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
            <h4>Delete Product</h4>
          </div>
          <div className="modal-body">
            <p>Are you sure want to delete <strong style={{fontWeight : "bold"}}>{ pro ? pro.title : '' }</strong></p>
          </div>
          <div className="modal-footer">
            <button className='btn btn-danger btn-sm' onClick={confDelete}>Delete</button>
            <button ref={btn} data-dismiss="modal" className='btn btn-dark btn-sm'>Close</button>
          </div>
        </div>
      </div>
    </div>           

    </>

  )
}

export default ProductList