import { createSlice } from '@reduxjs/toolkit'

let data = [
    {
        id : 1,
        name : "Rohit",
        city : "indore"
    },
    {
        id : 2,
        name : "vijay",
        city : "mumbai"
    }
]

let StudentSlice = createSlice({
    name : "student",
    initialState : data,
    reducers :{
        add(curr_state, data){
            let n = curr_state.length;
            data.payload.id = n+1;
            curr_state.push(data.payload)
        },
        remove(curr_state, obj){
            return curr_state.filter(value=>value.id != obj.payload.id);
        }
    }
    
});

export default StudentSlice.reducer;

export let {add, remove} = StudentSlice.actions;