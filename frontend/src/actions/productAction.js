import axios from 'axios'
import { adminProductsFail, adminProductsRequest, adminProductsSuccess, createProductFail, createProductRequest, createProductSuccess, deleteProductFail, deleteProductRequest, deleteProductSuccess, productsFail, productsRequest, productsSuccess, singleProductFail, singleProductRequest, singleProductSuccess, updateProductFail, updateProductRequest, updateProductSuccess } from '../slices/productSlice'

export const getProducts = (keyword, category ) => async (dispatch) => {
    try {
        dispatch(productsRequest())

        let link = `/api/products`

        if (keyword) {
            link = link + `?keyword=${keyword}`
        }

        if (category) {
            link = link + `?category=${category}`
        }

        const { data } = await axios.get(link)

        dispatch(productsSuccess(data))
    }
    catch (error) {
        dispatch(productsFail(error.response.data.message))
    }
}

export const getSingleProduct = (id) => async (dispatch) => {
    try {
        dispatch(singleProductRequest())
        const { data } = await axios.get(`/api/product/${id}`)
        dispatch(singleProductSuccess(data))
    }
    catch (error) {
        dispatch(singleProductFail(error.response.data.message))
    }
}

export const getAdminProducts = async (dispatch) => {
    try {
        dispatch(adminProductsRequest())

        const { data } = await axios.get('/api/admin/products')
        dispatch(adminProductsSuccess(data))
    }
    catch (error) {
        dispatch(adminProductsFail(error.response.data.message))
    }
}

// Admin delete product
export const deleteProduct = id => async (dispatch) => {

    try {
        dispatch(deleteProductRequest())
        await axios.delete(`/api/admin/product/${id}`)
        dispatch(deleteProductSuccess())
    }
    catch (error) {
        dispatch(deleteProductFail(error.response.data.message))
    }
}

// Admin create product
export const createNewProduct = productData => async (dispatch) => {

    try {
        dispatch(createProductRequest())


        const { data } = await axios.post('/api/admin/product/new', productData)
        dispatch(createProductSuccess(data))
    }
    catch (error) {
        dispatch(createProductFail(error.response.data.message))
    }
}

// Admin update product
export const updateProduct = (productData, id) => async (dispatch) => {

    try {
        dispatch(updateProductRequest())


        const { data } = await axios.put(`/api/admin/product/${id}`, productData)
        dispatch(updateProductSuccess(data))
    }
    catch (error) {
        dispatch(updateProductFail(error.response.data.message))
    }
}