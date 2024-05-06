import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
    name: 'product',
    initialState: {
        loading: false,
        products: [],
        singleProduct: {},
        isProductCreated: false,
        isProductDeleted: false,
        isProductUpdated: false
    },
    reducers: {
        productsRequest(state, action) {
            return {
                ...state,
                loading: true,
            }
        },
        productsSuccess(state, action) {
            return {
                ...state,
                loading: false,
                products: action.payload.products,
                productsCount: action.payload.productsCount,
                productPerPage: action.payload.resPerPage,
                totalSearchProducts: action.payload.totalSearchProducts
            }
        },
        productsFail(state, action) {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },

        clearError(state, action) {
            return {
                ...state,
                error: null
            }
        },

        singleProductRequest(state, action) {
            return {
                ...state,
                loading: true
            }
        },
        singleProductSuccess(state, action) {
            return {
                ...state,
                loading: false,
                singleProduct: action.payload.product
            }
        },
        singleProductFail(state, action) {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },

        adminProductsRequest(state, action) {
            return {
                ...state,
                loading: true,
            }
        },
        adminProductsSuccess(state, action) {
            return {
                ...state,
                loading: false,
                products: action.payload.products
            }
        },
        adminProductsFail(state, action) {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },

        deleteProductRequest(state, action) {
            return {
                ...state,
                loading: true
            }
        },
        deleteProductSuccess(state, action) {
            return {
                ...state,
                loading: false,
                isProductDeleted: true
            }
        },
        deleteProductFail(state, action) {
            return {
                ...state,
                loading: false,
                error: action.payload,
                isProductDeleted: false

            }
        },
        clearProductDeleted(state, action) {
            return {
                ...state,
                isProductDeleted: false
            }
        },

        createProductRequest(state, action) {
            return {
                ...state,
                loading: true
            }
        },
        createProductSuccess(state, action) {
            return {
                ...state,
                loading: false,
                Product: action.payload.product,
                isProductCreated: true
            }
        },
        createProductFail(state, action) {
            return {
                ...state,
                loading: false,
                error: action.payload,
                isProductCreated: false

            }
        },
        clearProductCreated(state, action) {
            return {
                ...state,
                isProductCreated: false
            }
        },

        updateProductRequest(state, action) {
            return {
                ...state,
                loading: true
            }
        },
        updateProductSuccess(state, action) {
            return {
                ...state,
                loading: false,
                Product: action.payload.product,
                isProductUpdated: true
            }
        },
        updateProductFail(state, action) {
            return {
                ...state,
                loading: false,
                error: action.payload,

            }
        },
        clearProductUpdated(state, action) {
            return {
                ...state,
                isProductUpdated: false
            }
        },


    }
})

const { actions, reducer } = productSlice

export const {
    productsFail,
    productsRequest,
    productsSuccess,

    clearError,

    singleProductFail,
    singleProductSuccess,
    singleProductRequest,

    adminProductsRequest,
    adminProductsSuccess,
    adminProductsFail,

    deleteProductFail,
    deleteProductRequest,
    deleteProductSuccess,
    clearProductDeleted,

    clearProductCreated,
    createProductFail,
    createProductRequest,
    createProductSuccess,

    clearProductUpdated,
    updateProductFail,
    updateProductRequest,
    updateProductSuccess


} = actions
export default reducer;
