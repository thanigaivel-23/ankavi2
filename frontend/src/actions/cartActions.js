import axios from "axios"
import {addWistlistItemRequest, addWistlistItemSuccess } from "../slices/cartSlice"

export const addWistlistItem = (id) => async (dispatch) => {
    try {

        dispatch(addWistlistItemRequest())

        const { data } = await axios.get(`/api/product/${id}`)


        dispatch(addWistlistItemSuccess({
            product: data.product._id,
            name: data.product.name,
            description: data.product.description,
            price: data.product.price,
            image: data.product.images[0].image,
            stock: data.product.stock
        }))

    }
    catch (error) {
    }
}

