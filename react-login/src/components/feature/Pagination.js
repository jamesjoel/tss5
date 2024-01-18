import React, {useState, useEffect} from 'react'
import {getAllCity} from '../../services/CityServices'
import {NavLink, useParams} from 'react-router-dom'


const Pagination = () => {

    let param = useParams();
    let [allCity, setAllCity] = useState([]);
    let [recPerPage, setRecPerPage] = useState(100);
    let [skip, setSkip] = useState(0);
    let [totalRec, setTotalRec]=useState(0); 
    let [totalPages, setTotalPages] = useState(0);

    let navlink = [];

    useEffect(()=>{
        if(param.a==1){
            
            getData();
        }else{
            let a = param.a; // 7
            let b = param.b; // 600
            getDataByPages(a, b);
        }


    },[param])

    let getDataByPages = async(a, b)=>{
        let data = await getAllCity(a, b);
        setAllCity(data.result)
    }

    let getData = async()=>{
        let data = await getAllCity(recPerPage, skip);
        setAllCity(data.result)
        let totalRec = data.total; // 1221
        let pages = Math.ceil(totalRec/recPerPage); // 13
        setTotalPages(pages);

        
        
    }    

  return (
    <div className="row">
        <div className="col-md-12">
            <ul className='pagination my-3'>
                
                    {
                        new Array(totalPages).fill().map((value, index)=>{
                            return(
                                <li className='page-item'>
                                    <NavLink to={`/pagination/${index+1}/${index*recPerPage}`} className="page-link">{index+1}</NavLink>
                                </li>
                            )
                        })
                    }
                    
            </ul>

            <table className="table table-dark table-bordered">
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>State</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allCity.map((value, index)=><tr key={value._id}>
                            <td>{index+1}</td>
                            <td>{value.state}</td>
                            <td>{value.name}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Pagination