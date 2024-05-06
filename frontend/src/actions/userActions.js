import axios from "axios"
import {
    clearError, loginFail, loginRequest, loginSuccess,
    registerFail, registerRequest, registerSuccess,
    loadUserFail, loadUserRequest, loadUserSuccess,
    logoutSuccess,
    updateProfileFail, updateProfileRequest, updateProfileSuccess, changeUpdate
} from "../slices/authSlice"

import {
    deleteUserFail, deleteUserRequest, deleteUserSuccess,
    updateUserFail, updateUserRequest, updateUserSuccess,
    userFail, userRequest, userSuccess,
    usersFail, usersRequest, usersSuccess
} from "../slices/userSlice"

//login
export const login = (email, password) => async (dispatch) => {

    try {
        dispatch(loginRequest())
        const { data } = await axios.post('/api/login', { password, email })
        dispatch(loginSuccess(data))
    }
    catch (error) {
        dispatch(loginFail(error.response.data.message))
    }
}

//clearError
export const clearAuthError = (dispatch) => {
    dispatch(clearError())
}

//register
export const register = (userData) => async (dispatch) => {

    try {
        dispatch(registerRequest())
        const { data } = await axios.post('/api/register', userData)
        dispatch(registerSuccess(data))
    }
    catch (error) {
        dispatch(registerFail(error.response.data.message))
    }
}

//loadUser
export const loadUser = async (dispatch) => {

    try {
        dispatch(loadUserRequest())
        const { data } = await axios.get('/api/myprofile')
        dispatch(loadUserSuccess(data))
    }
    catch (error) {
        dispatch(loadUserFail(error.response.data.message))
    }
}

//logout
export const logout = async (dispatch) => {

    await axios.get('/api/logout')
    dispatch(logoutSuccess())
}

//updateProfile
export const updateProfile = (userData) => async (dispatch) => {

    try {
        dispatch(updateProfileRequest())
        const config = {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        }

        const { data } = await axios.put('/api/update', userData, config)
        dispatch(updateProfileSuccess(data))
    }
    catch (error) {
        dispatch(updateProfileFail(error.response.data.message))
    }
}

//changeUpdate
export const changeUpdateStatus = (dispatch) => {
    dispatch(changeUpdate())
}

//admin ----------------->

//get all Users
export const getUsers = async (dispatch) => {

    try {
        dispatch(usersRequest())
        const { data } = await axios.get('/api/admin/users')
        dispatch(usersSuccess(data))
    }
    catch (error) {
        dispatch(usersFail(error.response.data.message))
    }
}

//get single User
export const getUser = (id) => async (dispatch) => {

    try {
        dispatch(userRequest())
        const { data } = await axios.get(`/api/admin/user/${id}`)
        dispatch(userSuccess(data))
    }
    catch (error) {
        dispatch(userFail(error.response.data.message))
    }
}

//delete user
export const deleteUser = (id) => async (dispatch) => {

    try {
        dispatch(deleteUserRequest())
        await axios.delete(`/api/admin/user/${id}`)
        dispatch(deleteUserSuccess())
    }
    catch (error) {
        dispatch(deleteUserFail(error.response.data.message))
    }
}

//update user
export const updateUser = (id, name, email, role) => async (dispatch) => {

    try {
        dispatch(updateUserRequest())

        await axios.put(`/api/admin/user/${id}`, {name, email, role})

        dispatch(updateUserSuccess())
    }
    catch (error) {
        dispatch(updateUserFail(error.response.data.message))
    }
}

