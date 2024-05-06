import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        loading: false,
        wishlistItems: localStorage.getItem('wishlistItems') ? JSON.parse(localStorage.getItem('wishlistItems')) : [],
    },
    
    reducers: {

        //wishlist
        addWistlistItemRequest(state, action) {

            return {
                ...state,
                loading: true,
            }
        },
        addWistlistItemSuccess(state, action) {

            const item = action.payload
            const isItemExist = state.wishlistItems.find(i => i.product === item.product)

            if (isItemExist) {
                return {
                    ...state,
                    loading: false,

                }
            }
            else {
                let getWishlistItems = localStorage.getItem('wishlistItems') ? JSON.parse(localStorage.getItem('wishlistItems')) : []

                localStorage.setItem('wishlistItems', JSON.stringify([...getWishlistItems, item]))
                return {
                    ...state,
                    loading: false,
                    wishlistItems: [...state.wishlistItems, item]
                }

            }
        },
        removeItemFromWishlist(state, action) {
            const filterItems = state.wishlistItems.filter(item => {
                return item.product !== action.payload
            })
            localStorage.setItem('wishlistItems', JSON.stringify(filterItems))
            return {
                ...state,
                wishlistItems: filterItems
            }
        },



    }
})

const { actions, reducer } = cartSlice;

export const {
    addWistlistItemRequest,
    addWistlistItemSuccess,
    removeItemFromWishlist,
} = actions

export default reducer;