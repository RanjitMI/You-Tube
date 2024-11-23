import appSlice from './appSlice.js'
import { configureStore } from "@reduxjs/toolkit";
import chatSlice from './chatSlice.js'
import searchSlice from './searchSlice.js'


const store = configureStore({
    reducer :{
        app : appSlice, 
        search : searchSlice,
        chat : chatSlice,
    }
    
})

export default store;