import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { changeUpdateStatus, clearAuthError, updateProfile } from '../../actions/userActions';
import toast from 'react-hot-toast';
import NavBar from '../layouts/NavBar';
import { BsArrowLeft } from 'react-icons/bs';
import MetaData from '../layouts/MetaData';

const UpdateProfile = () => {

    const { error, user, isUpdated } = useSelector(state => state.authState);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')


    const sumbitHandler = async (e) => {

        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name)
        formData.append('email', email)
        dispatch(updateProfile(formData))
    }

    useEffect(() => {

        if (user) {
            setName(user.name)
            setEmail(user.email)
        }

        if (error) {
            toast.error(error)
            dispatch(clearAuthError)
        }

        if (isUpdated) {
            toast.success('Profile Updated Successfully')
            dispatch(changeUpdateStatus)
            navigate('/account')

        }


    }, [error, user, isUpdated, dispatch, navigate])

    return (
        <>
            <MetaData title={'Ankavi Silks - Update Profile'} />

            {/* nav bar */}
            <NavBar />

            {/* edit profile */}
            <div className='md:tw-w-[70%] lg:tw-w-[50%] tw-mx-auto tw-mt-12 tw-hidden md:tw-flex tw-items-center tw-gap-x-3 '>
                <Link to={'/account'}><BsArrowLeft className="tw-text-2xl tw-text-gray-700" /> </Link>
                <p className='tw-font-medium '>Back</p>
            </div>

            <form onSubmit={sumbitHandler} className='md:tw-w-[70%] lg:tw-w-[50%] md:tw-mx-auto md:tw-border md:tw-my-10 md:tw-shadow-lg'>
                <div className='tw-px-5 tw-mt-5 tw-border-b'>
                    <p className='tw-text-lg tw-font-bold tw-pb-4'>Edit Profile</p>
                </div>

                <div className='tw-relative tw-mt-3 tw-border  tw-border-white'>
                    <div className='tw-px-5 tw-mt-3 '>
                        <label className='tw-absolute tw-top-0 tw-left-10 tw-text-sm tw-bg-white tw-text-gray-400' htmlFor="">Name</label>
                        <input type="text" name='name' onChange={e => setName(e.target.value)} value={name} className='tw-outline-none tw-border tw-w-full tw-py-[10px] tw-px-[12px] tw-h-auto tw-text-[#282c3f] tw-font-normal ' />
                    </div>
                </div>

                <div className='tw-relative tw-mt-3 tw-border  tw-border-white'>
                    <div className='tw-px-5 tw-mt-3 '>
                        <label className='tw-absolute tw-top-0 tw-left-10 tw-text-sm tw-bg-white tw-text-gray-400' htmlFor="">Email</label>
                        <input type="email" name='email' onChange={e => setEmail(e.target.value)} value={email} className='tw-outline-none tw-border tw-w-full tw-py-[10px] tw-px-[12px] tw-h-auto tw-text-[#282c3f] tw-font-normal ' />
                    </div>
                </div>

                <div className='tw-mx-5'>
                    <button className='tw-bg-[#5a114a] disabled:tw-bg-[#741660] hover:tw-bg-[#4a0e3d] tw-font-bold tw-text-sm tw-text-white tw-w-full tw-my-10 tw-py-[11px] tw-px-10'>
                        SAVE CHANGES
                    </button>
                </div>
            </form>

        </>
    )
}

export default UpdateProfile