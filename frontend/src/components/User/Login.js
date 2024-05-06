import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { clearAuthError, login } from '../../actions/userActions'
import toast from 'react-hot-toast'
import MetaData from '../layouts/MetaData'

const Login = () => {


    const { loading, error, token, isAuthenticate } = useSelector(state => state.authState)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();
    const navigate = useNavigate()


    const handleSumbit = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
    }

    // function setCookie(name, value, days) {
    //     const expires = new Date();
    //     expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    //     document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
    // }


    useEffect(() => {
        if (isAuthenticate) {
            toast.success('Login success')
            // setCookie('token', token, 7);
            navigate('/')
        }


        if (error) {
            toast.error(error)
            dispatch(clearAuthError)
        }

    }, [error, isAuthenticate, dispatch, navigate, token])







    return (
        <Fragment>
            <MetaData title={'Ankavi Silks - Login'} />

            <div className="tw-flex tw-justify-center tw-items-center  tw-mt-16 md:tw-mt-20 ">
                <form onSubmit={handleSumbit} className="tw-shadow-2xl tw-rounded-md tw-p-8 tw-mb-10 tw-w-[80%] sm:tw-w-96">

                    <h1 className="tw-mb-3 tw-flex tw-justify-center tw-text-2xl tw-font-bold tw-tracking-wider">Login</h1>

                    <div className=" tw-my-4">
                        <label className='tw-block tw-font-medium tw-mb-1' htmlFor="email_field">Email</label>
                        <input
                            type="email"
                            id="email_field"
                            className="tw-outline-none tw-rounded-md tw-h-10 tw-border-2 tw-pl-3 tw-w-full"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}

                        />
                    </div>

                    <div className=" my-4">
                        <label className='tw-block tw-font-medium tw-mb-1' htmlFor="password_field">Password</label>
                        <input
                            type="password"
                            id="password_field"
                            className="tw-outline-none tw-rounded-md tw-h-10 tw-border-2 tw-pl-3 tw-w-full"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}

                        />
                    </div>


                    <button
                        id="login_button"
                        type="submit"
                        disabled={loading}
                        className="tw-flex tw-justify-center tw-items-center tw-w-full tw-border tw-mt-7   tw-mb-2 tw-rounded-md tw-bg-[#5a114a] disabled:tw-bg-[#741660] hover:tw-bg-[#4a0e3d] tw-text-white tw-h-10"
                    >
                        LOGIN
                    </button>

                    <Link to="/register" className="tw-text-gray-500 tw-text-sm ">New User?</Link>
                </form>
            </div>
        </Fragment>
    )
}

export default Login