import React from 'react'
import { MdOutlineDashboardCustomize } from 'react-icons/md'
import { GrFormNext } from 'react-icons/gr'
import { LiaUserEditSolid } from 'react-icons/lia'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../actions/userActions'
import icon from '../img/icon.png'
import NavBar from './layouts/NavBar'
import MetaData from './layouts/MetaData'

const AccountPage = () => {

    const { user = {} } = useSelector(state => state.authState)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logoutHandler = () => {
        dispatch(logout)
        navigate('/')
    }

    return (
        <>
            <MetaData title={'Ankavi Silks - Account'} />

            {/* nav bar */}
            <NavBar />

            {/* Account pic */}
            <div className='tw-flex tw-flex-col md:tw-flex-row md:tw-pl-20 md:tw-gap-x-9 tw-items-center tw-bg-gray-300 tw-border-b-8 tw-pb-2 tw-relative '>
                <img className=' tw-w-32 xs:tw-w-40 lg:tw-w-60 tw-h-32 xstw-:h-40 lg:tw-h-60 tw-mt-8 tw-mb-1 tw-z-10 ' src={icon} alt="" />
                <div className='tw-z-10   tw-text-center md:tw-text-start'>
                    <p className='tw-font-medium md:tw-text-lg'>{user.name}</p>
                    <p className='tw-font-medium md:tw-text-lg'>{user.email}</p>
                </div>
                <div className='tw-bg-white tw-w-full tw-h-24 tw-absolute  tw-bottom-0 md:tw-hidden'></div>
            </div>

            {/* dashboard */}
            {user.role === 'admin' && <Link
                to="/admin/dashboard"
                className="tw-flex tw-no-underline tw-justify-between tw-items-center tw-px-3 md:tw-px-20 tw-py-3 md:tw-py-5 tw-border-b-2"
            >

                <div className="tw-flex tw-justify-between tw-items-center tw-gap-x-3">
                    <i>
                        <MdOutlineDashboardCustomize className="tw-text-[#a2328a] tw-text-xl md:tw-text-2xl" />
                    </i>
                    <div>
                        <p className="tw-font-bold tw-text-sm md:tw-text-base  tw-text-[#a2328a]">Dashboard</p>
                        <p className="tw-text-xs tw-text-gray-400 md:tw-text-sm ">
                            Control Panel
                        </p>
                    </div>
                </div>

                <i>
                    <GrFormNext className="tw-text-[#a2328a] md:tw-text-xl" />
                </i>
            </Link>}

            {/* profile details */}
            <Link
                to="/update"
                className="tw-flex tw-no-underline tw-justify-between tw-items-center tw-px-3 md:tw-px-20 tw-py-3 md:tw-py-5 tw-border-b-2"
            >

                <div className="tw-flex tw-justify-between tw-items-center tw-gap-x-3">
                    <i>
                        <LiaUserEditSolid className="tw-text-[#a2328a] tw-text-xl md:tw-text-2xl" />
                    </i>
                    <div>
                        <p className="tw-font-bold tw-text-sm md:tw-text-base tw-text-[#a2328a]">Edit Profile</p>
                        <p className="tw-text-xs tw-text-gray-400 md:tw-text-sm ">
                            Change youlr profile detalis
                        </p>
                    </div>
                </div>

                <i>
                    <GrFormNext className="md:tw-text-xl tw-text-[#a2328a]" />
                </i>
            </Link>

            {/* logout */}
            <div className='tw-bg-gray-200 tw-flex tw-justify-center tw-px-4 tw-py-5' >
                <button onClick={logoutHandler} className='tw-bg-[#5a114a] tw-text-white tw-w-full xs:tw-w-[50%] md:tw-w-[25%] tw-font-bold tw-text-sm tw-rounded-sm tw-py-3 ' type='submit'>LOGOUT</button>
            </div>
        </>
    )
}

export default AccountPage