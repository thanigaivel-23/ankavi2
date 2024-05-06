import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { clearAuthError, register } from '../../actions/userActions'
import toast from 'react-hot-toast'
import MetaData from '../layouts/MetaData'

const Register = () => {

    const { loading, error, isAuthenticate } = useSelector(state => state.authState)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const onChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', userData.name)
        formData.append('email', userData.email)
        formData.append('password', userData.password)

        dispatch(register(formData))

    }


    useEffect(() => {

        if (isAuthenticate) {
            toast.success('Register success')
            return navigate('/')
        }

        if (error) {
            toast.error(error)
            dispatch(clearAuthError)
        }

    }, [error, isAuthenticate, dispatch, navigate])

    return (
        <Fragment>
            <MetaData title={'Ankavi Silks - Register'} />


            <div className="tw-flex tw-justify-center tw-items-center  tw-mt-16 md:tw-mt-20 ">
                <form onSubmit={handleSumbit} className="tw-shadow-2xl tw-rounded-md tw-p-8 tw-mb-10 tw-w-[80%] sm:tw-w-96">

                    <h1 className="tw-mb-3 tw-flex tw-justify-center tw-text-2xl tw-font-bold tw-tracking-wider">Register</h1>

                    <div className=" tw-my-4">
                        <label className='tw-block tw-font-medium tw-mb-1' htmlFor="email_field">Name</label>
                        <input
                            type="text"
                            className="tw-outline-none tw-rounded-md tw-h-10 tw-border-2 tw-pl-3 tw-w-full"
                            name='name'
                            onChange={onChange}


                        />
                    </div>

                    <div className=" my-4">
                        <label className='tw-block tw-font-medium tw-mb-1' htmlFor="email_field">Email</label>
                        <input
                            type="email"
                            id="email_field"
                            className="tw-outline-none tw-rounded-md tw-h-10 tw-border-2 tw-pl-3 tw-w-full"
                            name='email'
                            onChange={onChange}

                        />
                    </div>

                    <div className=" my-4">
                        <label className='tw-block tw-font-medium tw-mb-1' htmlFor="password_field">Password</label>
                        <input
                            type="password"
                            id="password_field"
                            className="tw-outline-none tw-rounded-md tw-h-10 tw-border-2 tw-pl-3 tw-w-full"
                            name='password'
                            onChange={onChange}

                        />
                    </div>


                    <button
                        id="login_button"
                        type="submit"
                        className="tw-flex tw-justify-center tw-items-center tw-w-full tw-border tw-mt-7   tw-mb-2 tw-rounded-md tw-bg-[#5a114a] disabled:tw-bg-[#741660] hover:tw-bg-[#4a0e3d] tw-text-white tw-h-10"
                        disabled={loading}
                    >
                        REGISTER
                    </button>

                    <Link to="/login" className="tw-text-gray-500 tw-text-sm ">Already have an account?</Link>
                </form>
            </div>

        </Fragment>
    )
}

export default Register