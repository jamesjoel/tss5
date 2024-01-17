import axios from 'axios'
import {API_URL} from '../util/API_URL'

let Auth = async (data)=>{
    let response = await axios.post(`${API_URL}/login`, data);
    return response;
}
/*
    axios.post().then(response=>{
        return respose;
    })

*/

export {Auth};

