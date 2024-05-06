import React, { useEffect } from 'react'
import NavBar from './layouts/NavBar'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { clearError } from '../slices/productSlice';
import { getProducts } from '../actions/productAction';
import Loader from './layouts/Loader';
import Footer from './layouts/Footer';
import MetaData from './layouts/MetaData';

const SearchPage = () => {

    const { products, loading, error, productsCount } = useSelector((state) => state.productState)

    const dispatch = useDispatch();
    const { keyword } = useParams();


    useEffect(() => {

        if (error) {
            toast.error(error, { position: 'top-center' })
            dispatch(clearError)
            return
        }

        dispatch(getProducts(keyword))


    }, [error, dispatch, keyword])

    return (
        <>
            <MetaData title={'Ankavi Silks - Sreach Page'} />

            {/* 1 section - navbar */}
            <NavBar />

            {/* 2 section - search products */}

            {loading ? <Loader />
                :
                <section className='tw-mt-5 md:tw-mt-10'>
                    <div className='tw-flex tw-justify-between tw-items-center tw-mx-5 lg:tw-mx-20'>
                        <p className='tw-text-xl tw-font-bold tw-text-[#a53782]'>{keyword}</p>
                        <p className='tw-text-sm tw-text-gray-400'>{productsCount} Products Found</p>
                    </div>

                    {productsCount === 0 ?
                        <p className='tw-mx-5 lg:tw-mx-20 tw-text-center tw-font-bold tw-shadow-sm tw-py-40 tw-bg-[#fdf7f3] tw-my-5 tw-text-xl'>No Result Found</p>
                        :
                        <>


                            <main className='tw-grid tw-grid-cols-2 sm:tw-grid-cols-2 lg:tw-grid-cols-4 lg:tw-gap-5 tw-mt-10 lg:tw-mx-20'>
                                {products && products.map((product, index) => (
                                    <Link to={`/product/${product._id}`} key={index} className='tw-no-underline hover:tw-bg-white hover:tw-shadow-2xl tw-duration-200 tw-px-2 tw-pt-2 md:tw-px-5 md:tw-pt-5 tw-rounded-md tw-rounded-tl-3xl tw-rounded-br-3xl'>
                                        <img src={product.images[0].image} alt="" className=' tw-rounded-md tw-rounded-tl-3xl tw-rounded-br-3xl  tw-object-' />
                                        <p className='tw-truncate tw-mt-4 tw-px-2 tw-text-[#808080]'>{product.name}</p>
                                        <p className='tw-pl-3 tw-font-bold tw-text-black tw-text-lg'>₹ {product.price}</p>
                                    </Link>
                                ))}
                            </main>
                        </>
                    }


                </section>
            }


            {/* 3 */}
            <Footer />

        </>
    )
}

export default SearchPage