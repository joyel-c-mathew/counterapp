import { createSlice } from "@reduxjs/toolkit"


const counterSlice = createSlice({
    name:'counterApp',
    initialState:{
        value:0
    },
    // actions are created inside reducer key
    reducers:{
        //function to incrmnt value
        increment:(state,action)=>{
            state.value+=action.payload



        },

        //fuction to decrement

        decrement:(state,action)=>{


            state.value-=action.payload
        },
        //function to rest
        reset:(state)=>{
            state.value =0

        }


    }
})


// used by components to access the state
export const{increment,decrement,reset} =counterSlice.actions // actions are changing nadakane
// reduce is required for store to chnge the value of store
export default counterSlice.reducer