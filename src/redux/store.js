import counterSlice from "./counterSlice"

import { configureStore } from "@reduxjs/toolkit"


export const store = configureStore({
    //reducer is predefined key whch an object that can hold more than one reduser as well as key value pairs
    reducer:{counter:counterSlice}
})



