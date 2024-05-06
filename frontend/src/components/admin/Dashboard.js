import React, { useEffect } from 'react'
import { MdNavigateNext } from "react-icons/md";

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import NavBar from '../layouts/NavBar';
import { getAdminProducts } from '../../actions/productAction';
import { getUsers } from '../../actions/userActions';
import MetaData from '../layouts/MetaData';

const Dashboard = () => {

  const { products = [] } = useSelector(state => state.productState)
  const { users = [] } = useSelector(state => state.userState)

  const dispatch = useDispatch()
  let outOfStock = 0

  if (products.length > 0) {
    products.forEach((product) => {
      if (product.stock === 0) {
        outOfStock = outOfStock + 1
      }
    })
  }

  useEffect(() => {
    dispatch(getAdminProducts)
    dispatch(getUsers)
  }, [dispatch])


  return (
    <>
      <MetaData title={'Ankavi Silks - Admin Dashboard'} />

      {/* nav bar */}
      <NavBar />

      {/*admin nav bar */}
      <AdminNavbar />

      {/* 4 box */}
      {/* products */}
      <div className='tw-grid tw-gap-5 tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-w-[70%] tw-mx-auto tw-my-10'>
        <section className='  tw-bg-red-500 tw-text-white tw-flex tw-flex-col tw-items-center tw-justify-center'>
          <p className='tw-pt-10 tw-font-semibold tw-text-2xl'>Products</p>
          <p className=' tw-pt-2 tw-pb-5 tw-font-semibold tw-text-xl'>{products.length}</p>
          <Link to={`/admin/products`} className='tw-no-underline tw-text-white tw-flex tw-border-t tw-border-red-600 tw-shadow-xl tw-w-full tw-items-center tw-justify-between tw-px-4 tw-py-3'>
            <p className='tw-text-sm'>View Details</p>
            <p><MdNavigateNext /></p>
          </Link>
        </section>

        {/* Users */}
        <section className='  tw-bg-green-500 tw-text-white tw-flex tw-flex-col tw-items-center tw-justify-center'>
          <p className='tw-pt-10 tw-font-semibold tw-text-2xl'>Users</p>
          <p className=' tw-pt-2 tw-pb-5 tw-font-semibold tw-text-xl'>{users.length}</p>
          <Link to={`/admin/users`} className='tw-no-underline tw-text-white tw-flex tw-border-t tw-border-green-600 tw-shadow-xl tw-w-full tw-items-center tw-justify-between tw-px-4 tw-py-3'>
            <p className='tw-text-sm'>View Details</p>
            <p><MdNavigateNext /></p>
          </Link>
        </section>

        {/* reviews */}
        {/* <section className='  tw-bg-blue-500 tw-text-white tw-flex tw-flex-col tw-items-center tw-justify-between'>
          <p className='tw-pt-16 tw-font-semibold tw-text-2xl'>Reviews</p>
          <Link to={`/admin/users`} className='tw-no-underline tw-text-white tw-flex tw-border-t tw-border-green-600 tw-shadow-xl tw-w-full tw-items-center tw-justify-between tw-px-4 tw-py-3'>
            <p className='tw-text-sm'>View Details</p>
            <p><MdNavigateNext /></p>
          </Link>
        </section> */}

        {/* Out of Stock */}
        <section className='  tw-bg-orange-500 tw-text-white tw-flex tw-flex-col tw-items-center tw-justify-center'>
          <p className='tw-pt-10 tw-font-semibold tw-text-2xl'>Out of Stock</p>
          <p className=' tw-pt-2 tw-pb-5 tw-font-semibold tw-text-xl'>{outOfStock}</p>
        </section>
      </div>




    </>
  )
}

export default Dashboard