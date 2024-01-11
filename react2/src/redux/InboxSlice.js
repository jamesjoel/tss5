import { createSlice } from '@reduxjs/toolkit'

let data = [
    {
        id : 1,
        name : "rohit",
        age : 25
    },
    {
        id : 2,
        name : "amar",
        age : 22
    },
    {
        id : 3,
        name : "jaya",
        age : 21
    },
    {
        id : 4,
        name : "gaurav",
        age : 26
    },
    {
        id : 5,
        name : "nilesh",
        age : 25
    }
]

let InboxSlice = createSlice({
    name : "demo",
    initialState : data,
    reducers : {
        abc(a, id){
            return a.filter(value => value.id != id.payload);
        }
    }
})

export default InboxSlice.reducer;
export let { abc } = InboxSlice.actions;