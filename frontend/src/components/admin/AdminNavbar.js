import React from 'react'
import { MdOutlineDashboard } from "react-icons/md";
import { LiaProductHunt } from "react-icons/lia";
import { PiUsersThree } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { BsPlusCircle } from "react-icons/bs";

const AdminNavbar = () => {
  return (
    <div className='tw-flex tw-items-center tw-justify-center tw-gap-x-10 lg:tw-gap-x-28 tw-p-4  tw-border-b-2'>
      <Link to='/admin/dashboard' className='tw-flex tw-items-center tw-no-underline tw-text-gray-600 tw-gap-x-2'><MdOutlineDashboard className='tw-text-rose-500 tw-text-2xl' />{window.screen.width < 640 ? '' : 'Dashboard'}</Link>
      <Link to='/admin/product/create' className='tw-flex tw-items-center tw-no-underline tw-text-gray-600 tw-gap-x-2'><BsPlusCircle className='tw-text-rose-500 tw-text-2xl' />{window.screen.width < 640 ? '' : 'Create Product'}</Link>
      <Link to='/admin/products' className='tw-flex tw-items-center tw-no-underline tw-text-gray-600 tw-gap-x-2'><LiaProductHunt className='tw-text-rose-500 tw-text-2xl' />{window.screen.width < 640 ? '' : 'Products'}</Link>
      <Link to='/admin/users' className='tw-flex tw-items-center tw-no-underline tw-text-gray-600 tw-gap-x-2'> <PiUsersThree className='tw-text-rose-500 tw-text-2xl' />{window.screen.width < 640 ? '' : 'Users'}</Link>
      {/* <Link to='/admin/reviews' className='tw-flex tw-items-center tw-no-underline tw-text-gray-600 tw-gap-x-2'><MdOutlineRateReview className='tw-text-rose-500 tw-text-2xl' />{window.screen.width < 640 ? '' : 'Reviews'}</Link> */}
    </div>
  )
}

export default AdminNavbar