import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import Loader from './Loader'

const ProtectedRoute = ({ children, isAdmin }) => {

    const { isAuthenticate, loading, user, loadingComplete } = useSelector(state => state.authState)

    if (!isAuthenticate && !loading && loadingComplete) {
        return <Navigate to={'/login'} />
    }

    if (isAuthenticate) {
        if (isAdmin === true && user.role !== 'admin') {
            return <Navigate to='/' />
        }
        return children
    }

    if (loading) {
        return <Loader />
    }

}

export default ProtectedRoute