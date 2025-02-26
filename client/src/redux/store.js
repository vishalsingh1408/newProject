import { configureStore } from "@reduxjs/toolkit"; 
import countReducer from './slice/counterSlice.js'
import loadingReducer from './slice/LoadingSlice.js'
import productReducer from './slice/productSlice.js'
import authReducer from './slice/authSlice.js'
import newsReducer from './slice/newsSlice.js'
const store = configureStore({
    reducer : {
     count : countReducer,
     laoding : loadingReducer,
     product : productReducer,
     auth : authReducer,
     news: newsReducer,
    }
})

export default store