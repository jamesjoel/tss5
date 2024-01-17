import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { API_URL } from '../util/API'

let getData = createAsyncThunk("fetch", async()=>{
    let response = await axios.get(`${API_URL}/teacher`);
    return response.data.result;
})

let removeData = createAsyncThunk("remove", async(id)=>{
    await axios.delete(`${API_URL}/teacher/${id}`);
    return id;
})

let addData = createAsyncThunk('add', async(data)=>{
    await axios.post(`${API_URL}/teacher`, data);
    return data;
})


let TeacerSlice = createSlice({
    name : "teacher",
    initialState : [],
    extraReducers : {
        [getData.fulfilled] : (state, action)=> {
            return action.payload;
        },
        [removeData.fulfilled] : (state, action)=>{
            return state.filter(value=>value._id != action.payload);
        },
        [addData.fulfilled] : (state, action)=>{
            state.push(action.payload);
        }
    }
})

export default TeacerSlice.reducer;

export {getData, addData, removeData};