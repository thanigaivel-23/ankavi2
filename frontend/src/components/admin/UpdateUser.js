import React, { useEffect, useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import NavBar from '../layouts/NavBar'
import AdminNavbar from './AdminNavbar'
import { getUser, updateUser } from '../../actions/userActions'
import { clearError, clearUserUpdated } from '../../slices/userSlice'
import MetaData from '../layouts/MetaData'

const UpdateUser = () => {

    const { id: userId } = useParams()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('')

    const { loading, isUserUpdated, error, user } = useSelector(state => state.userState)
    const { user: authUser = {} } = useSelector(state => state.authState)


    const navigate = useNavigate()
    const dispatch = useDispatch()


    const submitHandler = (e) => {

        e.preventDefault();


        dispatch(updateUser(userId, name, email, role))
    }


    useEffect(() => {

        if (isUserUpdated) {
            toast.success('User Updated Successfully')
            dispatch(clearUserUpdated())
            navigate('/admin/users')
            return;
        }

        if (error) {
            toast.error(error)
            dispatch(clearError())
            return
        }

        dispatch(getUser(userId))


    }, [error, dispatch, navigate, userId, isUserUpdated])

    useEffect(() => {
        if (user._id) {
            setName(user.name)
            setEmail(user.email)
            setRole(user.role)
        }
    }, [user])

    return (
        <>
            <MetaData title={'Ankavi Silks - Update User'} />

            {/* nav bar */}
            <NavBar />

            {/*admin nav bar */}
            <AdminNavbar />

            {/* heading */}
            <div className='md:tw-w-[70%] lg:tw-w-[50%] tw-mx-auto tw-mt-12 tw-hidden md:tw-flex md:tw-text-lg tw-items-center tw-gap-x-3 '>
                <Link to={'/admin/users'}><BsArrowLeft className="tw-text-2xl " /> </Link>
                <p className='tw-font-medium'>Back</p>
            </div>

            {/*update product*/}
            <form onSubmit={submitHandler} className='md:tw-border-2 md:tw-w-[70%] lg:tw-w-[50%] md:tw-mx-auto md:tw-my-7'>

                <p className='tw-px-3 tw-py-3 tw-text-sm md:tw-text-xl tw-font-bold tw-text-gray-700 tw-bg-gray-100 md:tw-bg-white'>Update User</p>

                {/* name */}
                <p className='tw-mx-3 tw-py-3 tw-text-sm md:tw-text-base tw-font-bold tw-text-gray-700 '>Name</p>

                <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder='Enter Name' className='tw-outline-none tw-border tw-rounded-sm tw-box-border tw-w-11/12 tw-mx-3 tw-mb-3 tw-px-3 tw-py-2 focus:tw-border-gray-700 placeholder:tw-text-sm' />

                {/* email */}
                <p className='tw-mx-3 tw-py-3 tw-text-sm md:tw-text-base tw-font-bold tw-text-gray-700 '>Email</p>

                <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder='Enter Email' className='tw-outline-none tw-border tw-rounded-sm tw-box-border tw-w-11/12 tw-mx-3 tw-mb-3 tw-px-3 tw-py-2 focus:tw-border-gray-700 placeholder:tw-text-sm' />

                {/* Role */}
                <p className='tw-mx-3 tw-py-3 tw-text-sm md:tw-text-base tw-font-bold tw-text-gray-700 '>Role</p>

                <select disabled={user._id === authUser._id} value={role} onChange={(e) => setRole(e.target.value)} className='tw-outline-none tw-border tw-rounded-sm tw-box-border tw-w-11/12 tw-mx-3 tw-mb-3 tw-px-3 tw-py-2 focus:tw-border-gray-700 placeholder:tw-text-sm'>
                    <option className='' value="admin">Admin</option>
                    <option value="user">User</option>
                </select>





                {/* SAVE */}
                <button className='tw-flex tw-justify-center tw-my-4 tw-w-full' disabled={loading} >
                    <p className='tw-w-10/12 tw-text-white tw-bg-[#5a114a] disabled:tw-bg-[#741660] hover:tw-bg-[#4a0e3d] tw-rounded-sm tw-py-3'>Update</p>
                </button>

            </form>
        </>
    )
}

export default UpdateUser