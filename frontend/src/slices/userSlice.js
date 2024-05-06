import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        user: {},
        users: [],
        isUserUpdated: false,
        isUserDeleted: false,
    },

    reducers: {
        usersRequest(state, action) {

            return {
                ...state,
                loading: true,
            }
        },
        usersSuccess(state, action) {
            return {
                ...state,
                loading: false,
                users: action.payload.users
            }
        },
        usersFail(state, action) {
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

        userRequest(state, action) {

            return {
                ...state,
                loading: true,
            }
        },
        userSuccess(state, action) {
            return {
                ...state,
                loading: false,
                user: action.payload.user
            }
        },
        userFail(state, action) {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },

        deleteUserRequest(state, action) {

            return {
                ...state,
                loading: true,
            }
        },
        deleteUserSuccess(state, action) {
            return {
                ...state,
                loading: false,
                isUserDeleted: true
            }
        },
        deleteUserFail(state, action) {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },
        clearUserDeleted(state, action) {
            return {
                ...state,
                isUserDeleted: false
            }
        },

        updateUserRequest(state, action) {

            return {
                ...state,
                loading: true,
            }
        },
        updateUserSuccess(state, action) {
            return {
                ...state,
                loading: false,
                isUserUpdated: true,
            }
        },
        updateUserFail(state, action) {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },
        clearUserUpdated(state, action) {
            return {
                ...state,
                isUserUpdated: false
            }
        },



    }
})

const { actions, reducer } = userSlice;

export const {
    usersFail,
    usersRequest,
    usersSuccess,
    clearError,
    userFail,
    userRequest,
    userSuccess,
    clearUserDeleted,
    clearUserUpdated,
    deleteUserFail,
    deleteUserRequest,
    deleteUserSuccess,
    updateUserFail,
    updateUserRequest,
    updateUserSuccess


} = actions

export default reducer;