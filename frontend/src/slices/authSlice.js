import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',

    initialState: {
        loading: false,
        isAuthenticate: false,
        loadingComplete: false
    },
    reducers: {
        loginRequest(state, action) {
            return {
                ...state,
                loading: true
            }
        },
        loginSuccess(state, action) {
            return {
                loading: false,
                isAuthenticate: true,
                user: action.payload.user,
                token: action.payload.token
            }
        },
        loginFail(state, action) {
            return {
                loading: false,
                isAuthenticate: false,
                error: action.payload
            }
        },
        clearError(state, action) {
            return {
                ...state,
                error: null

            }
        },
        registerRequest(state, action) {
            return {
                isAuthenticate: false,
                loading: true
            }
        },
        registerSuccess(state, action) {
            return {
                loading: false,
                isAuthenticate: true,
                user: action.payload.user
            }
        },
        registerFail(state, action) {
            return {
                loading: false,
                isAuthenticate: false,
                error: action.payload
            }
        },

        loadUserRequest(state, action) {
            return {
                isAuthenticate: false,
                loading: true
            }
        },

        loadUserSuccess(state, action) {
            return {
                loading: false,
                isAuthenticate: true,
                loadingComplete: true,
                user: action.payload.user
            }
        },

        loadUserFail(state, action) {
            return {
                loading: false,
                isAuthenticate: false,
                loadingComplete: true,
            }
        },

        logoutSuccess(state, action) {
            return {
                loading: false,
                isAuthenticate: false,
            }
        },

        updateProfileRequest(state, action) {
            return {
                isAuthenticate: true,
                loading: true,
                isUpdated: false
            }
        },
        updateProfileSuccess(state, action) {
            return {
                loading: false,
                isAuthenticate: true,
                user: action.payload.user,
                isUpdated: true
            }
        },
        updateProfileFail(state, action) {
            return {
                loading: false,
                isAuthenticate: true,
                error: action.payload
            }
        },

        changeUpdate(state, action) {
            return {
                ...state,
                isUpdated: false,
            }
        },
    }
})

const { actions, reducer } = authSlice;

export const {
    loginRequest,
    loginSuccess,
    loginFail,
    clearError,
    registerFail,
    registerRequest,
    registerSuccess,
    loadUserFail,
    loadUserRequest,
    loadUserSuccess,
    logoutSuccess,
    updateProfileFail,
    updateProfileRequest,
    updateProfileSuccess,
    changeUpdate,

} = actions

export default reducer;