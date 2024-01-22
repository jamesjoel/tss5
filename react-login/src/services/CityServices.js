import axios from 'axios';

const API_URL = "http://localhost:8080/api/citypages";

let getAllCity = async(x, y)=>{
    let result = await axios.get(`${API_URL}/${x}/${y}`);
    
    return result.data;
}

export {getAllCity};