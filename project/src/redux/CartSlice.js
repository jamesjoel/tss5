import { createSlice } from '@reduxjs/toolkit'

let CartSlice = createSlice({
    name : "cart",
    initialState : [],
    reducers : {
        add(state, action){
            state.push(action.payload);
        },
        remove(state, action){
            return state.filter(value => value._id != action.payload)
        },
        removeAll(state, action){
            return [];
        }


    }
})

export default CartSlice.reducer;
export let { add, remove, removeAll } = CartSlice.actions;