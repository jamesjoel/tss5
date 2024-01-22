import axios from 'axios'
import { API_URL } from '../util/API_URL'

let getUserProfileData = async()=>{
    let response = await axios.get(`${API_URL}/profile`, {
        headers : { Authorization : `Bearer ${localStorage.getItem('access-token')}`}
    })
    return response.data;
}

export {getUserProfileData};