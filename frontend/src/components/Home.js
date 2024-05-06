import React, { useEffect } from 'react'
import toast from 'react-hot-toast'
import boximg1 from '../img/boximg1.jpg'
import boximg2 from '../img/boximg2.jpg'
import banner1 from '../img/banner1.jpg'
import banner2 from '../img/banner2.jpg'
import banner3 from '../img/banner3.jpg'
import banner4 from '../img/banner4.jpg'
import banner5 from '../img/banner5.jpg'
import Carousel from 'react-bootstrap/Carousel';
import NavBar from './layouts/NavBar'
import { Link } from 'react-router-dom'

import Footer from './layouts/Footer'
import MetaData from './layouts/MetaData'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/productAction'
import { clearError } from '../slices/productSlice'
import Loader from './layouts/Loader'



const Home = () => {

    const { error, products = [], loading } = useSelector(state => state.productState)
    const dispatch = useDispatch()


    let reversedArray = [...products].reverse().slice(0, 8);

    useEffect(() => {
        if (error) {
            toast.error(error, {
                position: 'top-center'
            })
            dispatch(clearError)
        }

        dispatch(getProducts(null, null))


    }, [dispatch, error]);

    useEffect(() => {
        window.scrollTo({ top: 0 });

    }, []);





    return (
        <>
            <MetaData title={'Ankavi Silks - Home'} />



            {/* 1st section - nav bar and carousel*/}
            <section>
                <NavBar />
                <Carousel className=' ' fade indicators={false}  >
                    <Carousel.Item>
                        <img src={banner1} className=' tw-h-[320px] lg:tw-h-[720px] tw-object-cover tw-w-full' alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={banner2} className=' tw-h-[320px] lg:tw-h-[720px] tw-object-cover tw-w-full' alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={banner3} className=' tw-h-[320px] lg:tw-h-[720px] tw-object-cover tw-w-full' alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={banner4} className=' tw-h-[320px] lg:tw-h-[720px] tw-object-cover tw-w-full' alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={banner5} className=' tw-h-[320px] lg:tw-h-[720px] tw-object-cover tw-w-full' alt="" />
                    </Carousel.Item>
                </Carousel>
            </section>


            {/* 2nd section - about*/}
            <section className='tw-text-center tw-mt-16 md:tw-mt-24'>
                <h2>INDIA'S FINEST KANCHIPURAM SILK SAREES & MORE</h2>
                <p className=' tw-py-8 tw-w-[70%] tw-mx-auto'>Ankavi Silks is a Kanchipuram saree brand on a mission to bridge the gap between tradition and tomorrow. Led by the next generation of weavers, we offer authentic Kanchipuram sarees crafted with meticulous attention to detail, upholding the legacy of this esteemed art form. Every Ankavi saree embodies the rich heritage of Kanchipuram silk weaving, while ensuring fair treatment and a sustainable future for the weavers who bring these heirlooms to life.</p>
            </section>

            {/* 3rd section - categories*/}
            <section>
                <h2 className='tw-font-bold tw-text-center tw-mx-10 tw-mt-16'>SHOP LATEST PURE KANJIVARAM SILK SAREES</h2>
                <div className='tw-grid  tw-grid-cols-1  lg:tw-grid-cols-2  tw-gap-5 md:tw-gap-10 tw-mx-5  md:tw-mx-20 tw-mt-10 '>
                    <Link to={`/saares/Traditional_Pure_Zari`}>
                        <img src={boximg1} alt="" className='tw-h-[500px] md:tw-h-auto lg:tw-h-[600px] tw-object-cover ' />
                    </Link>
                    <Link to={`/saares/Half_Fine`}>
                        <img src={boximg2} alt="" className='tw-h-[500px] md:tw-h-auto lg:tw-h-[600px] tw-object-cover ' />
                    </Link>
                </div>
            </section>



            {/* 4th section - NEW ARRIVALS */}

            <section className='tw-mt-16 md:tw-mt-24'>
                <h2 className='tw-font-bold tw-text-center tw-mx-10 tw-mt-16'>NEW ARRIVALS</h2>

                <main className='tw-grid tw-grid-cols-2 sm:tw-grid-cols-2 lg:tw-grid-cols-4 lg:tw-gap- tw-mt-10 lg:tw-mx-20'>
                    {reversedArray && reversedArray.map((product, index) => (
                        <Link to={`/product/${product._id}`} key={index} className='tw-no-underline hover:tw-bg-white hover:tw-shadow-2xl tw-duration-200 tw-px-2 tw-pt-2 md:tw-px-5 md:tw-pt-5 tw-rounded-md tw-rounded-tl-3xl tw-rounded-br-3xl'>
                            <img src={product.images[0].image} alt="" className=' tw-aspect-[9/14]  tw-rounded-md tw-rounded-tl-3xl tw-rounded-br-3xl tw-w-full ' />
                            <p className='tw-truncate tw-mt-4 tw-px-2 tw-text-[#808080]'>{product.name}</p>
                            <p className='tw-pl-3 tw-pb-1 tw-font-bold tw-text-black tw-text-lg'>₹ {product.price}</p>
                        </Link>
                    ))}
                </main>
                {loading && <Loader />}
            </section>


            {/* footer */}
            <Footer />
        </>
    )
}

export default Home