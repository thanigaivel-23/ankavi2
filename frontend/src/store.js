import { combineReducers, configureStore } from '@reduxjs/toolkit'
import productReducer from './slices/productSlice'
import cartReducer from './slices/cartSlice'
import authReducer from './slices/authSlice'
import userReducer from './slices/userSlice'

const reducer = combineReducers({
    productState: productReducer,
    cartState: cartReducer,
    authState: authReducer,
    userState: userReducer
})

const store = configureStore({ reducer })

export default store;