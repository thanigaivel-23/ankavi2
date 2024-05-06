import React, { Fragment, useEffect, useState } from 'react'
import NavBar from './layouts/NavBar'
import { Image } from 'antd';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { clearError } from '../slices/productSlice';
import { getProducts, getSingleProduct } from '../actions/productAction';
import Loader from './layouts/Loader';
import Slider from "react-slick";
import ProductN from './layouts/ProductN'
import ProductP from './layouts/ProductP'
import { addWistlistItem } from '../actions/cartActions';
import Footer from './layouts/Footer';
import { CiGlobe } from "react-icons/ci";
import { IoCallOutline } from 'react-icons/io5';
import { VscSymbolColor } from "react-icons/vsc";
import { GoDeviceCameraVideo } from "react-icons/go";
import { FaCircle } from 'react-icons/fa';
import MetaData from './layouts/MetaData';


const Product = () => {

    const { id } = useParams()
    const dispatch = useDispatch()
    const { error, loading, singleProduct = {}, products = [] } = useSelector(state => state.productState)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        focusOnSelect: true,
        nextArrow: <ProductN />,
        prevArrow: <ProductP />,
        responsive: [

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            },

        ]
    };

    const wishlistHandle = () => {
        toast.success('Wishlist Added!', {
            position: 'top-center'
        })
        dispatch(addWistlistItem(id))
    }

    useEffect(() => {

        dispatch(getSingleProduct(id))

        if (error) {
            toast.error(error, { position: 'top-center' })
            dispatch(clearError)
        }
        window.scrollTo({ top: 0 });

    }, [dispatch, error, id])

    useEffect(() => {
        dispatch(getProducts(null, singleProduct.category))
        if (error) {
            toast.error(error, { position: 'top-center' })
            dispatch(clearError)
        }
    }, [dispatch, error, id, singleProduct.category])


    useEffect(() => {

        window.scrollTo({ top: 0 });

    }, [])

    const [img, setImg] = useState('')

    const handleBuyClick = () => {
        // ${window.location.origin}${singleProduct.images[0].image}
        const whatsappMessage = ` Hi! Ankavai Silk Sarees I'm interested in buying ${singleProduct.name} for ${singleProduct.price}. Like to know about this ${window.location.href}`;
        const whatsappLink = `https://wa.me/+919786741726?text=${encodeURIComponent(whatsappMessage)}`;
        // window.location.href = whatsappLink;
        window.open(whatsappLink, '_blank');
        // const encodedName = encodeURIComponent(singleProduct.name);
        // const encodedPrice = encodeURIComponent(singleProduct.price);
        // const encodedImage = encodeURIComponent(singleProduct.images[0].image);
        // const whatsappMessage = `Hi! I'm interested in buying ${encodedName} for ${encodedPrice}. `;
        // const whatsappLink = `https://wa.me/7639486430?text=${encodeURIComponent(whatsappMessage)}`;
        // window.location.href = whatsappLink;
    };

    const valuesToShow = window.innerWidth >= 1024 ? 4 : 2;

    const visibleValues = products.slice(0, valuesToShow);

    return (
        <>
            <MetaData title={'Ankavi Silks - Sarees'} />

            {/* section 1 - nav bar */}
            <NavBar />

            {/* section 2 - img and title */}
            {
                loading ? <Loader />
                    :

                    <Fragment>
                        {/* main product */}
                        < section className='lg:tw-flex tw-mx-5  lg:tw-mx-16 lg:tw-gap-x-10 tw-mt-10 lg:tw-mt-16'>

                            <div className='lg:tw-w-1/2 '>

                                {/* laptop */}
                                <main className='tw-hidden  md:tw-block'>
                                    <div className='md:tw-flex tw-justify-center tw-mb-5 '>

                                        <Image
                                            className='tw-h-[600px]    '
                                            src={img ? img : singleProduct && singleProduct.images && singleProduct.images[0].image}
                                        />
                                    </div>

                                    <div>
                                        {singleProduct.images && singleProduct.images.length <= 3 ?
                                            <div className='tw-grid tw-grid-cols-4 lg:tw-gap-9 tw-gap-x-3 tw-py-6'>
                                                {singleProduct.images ? singleProduct.images.length > 1 && singleProduct.images.map(image =>
                                                    <div className="lg:mr-40" key={image._id}>
                                                        <img className="w-[90%] xs:w-4/5 sm:w-3/5 tw-cursor-pointer  mx-auto" src={image.image} alt="" onClick={() => setImg(image.image)} />
                                                    </div>) : ''}
                                            </div>
                                            :
                                            <Slider {...settings} className=''>
                                                {singleProduct.images ? singleProduct.images.length > 1 && singleProduct.images.map(image =>
                                                    <div className="lg:mr-40" key={image._id}>
                                                        <img className="w-[90%] xs:w-4/5 sm:w-3/5 tw-cursor-pointer mx-auto" src={image.image} alt="" onClick={() => setImg(image.image)} />
                                                    </div>) : ''}
                                            </Slider>
                                        }
                                    </div>
                                </main>

                                {/* moblie */}
                                <div className='tw-block md:tw-hidden'>

                                    <Slider {...settings} className=''>

                                        {singleProduct.images ? singleProduct.images.length > 1 && singleProduct.images.map(image =>
                                            <div className="lg:mr-40" key={image._id}>
                                                <Image className=" xs:w-4/5 sm:w-3/5 tw-cursor-pointer md:mx-auto"
                                                    src={image.image}
                                                />
                                            </div>) : ''}
                                    </Slider>

                                    {singleProduct.images && singleProduct.images.length === 1 &&

                                        < div className="lg:mr-40" >
                                            <Image className=" xs:w-4/5 sm:w-3/5 tw-cursor-pointer md:mx-auto"
                                                src={singleProduct.images && singleProduct.images[0].image}
                                            />
                                        </div>
                                    }
                                </div>

                            </div>

                            <div className='lg:tw-w-1/2'>
                                {/* name, price */}
                                <div>
                                    <p className='tw-font-bold tw-mt-5 lg:tw-mt-0 tw-text-xl lg:tw-text-3xl'>{singleProduct.name}</p>
                                    <p className='tw-text-lg tw-mt-2 lg:tw-text-xl'>Rs. {singleProduct.price}</p>
                                    <p className='tw-text-xs tw-mt-3 '>Tax included. Shipping calculated at checkout.</p>
                                </div>

                                {/* details */}
                                <div className='tw-mt-10 tw-text-sm tw-text-gray-600 '>
                                    <p className='tw-py-2 tw-flex tw-items-center tw-gap-x-3'> <CiGlobe className='tw-text-xl' /> Free worldwide shipping*</p>
                                    <p className='tw-py-2 tw-flex tw-items-center tw-gap-x-3'> <VscSymbolColor className='tw-text-xl' /> Color Customization Available</p>
                                    <p className='tw-py-2 tw-flex tw-items-center tw-gap-x-3'> <IoCallOutline className='tw-text-xl' /> Call +91 97867 41726 for more info</p>
                                    <p className='tw-py-2 tw-flex tw-items-center tw-gap-x-3'> <FaCircle className={`tw-text-xl  ${singleProduct.stock === 0 ? 'tw-text-red-500' : 'tw-text-green-500'}`} />{singleProduct.stock > 0 ? 'In Stock' : 'Out of Stock'}</p>
                                    {singleProduct.video_link &&
                                        <a href={singleProduct.video_link} target="_blank" rel="noreferrer" className='tw-text-gray-600 tw-mt-5 tw-py-2 tw-flex tw-items-center tw-gap-x-3'><GoDeviceCameraVideo className='tw-text-xl' /> Video Link (Click to Watch)</a>

                                    }
                                </div>

                                {/* add to cart wishlist */}
                                <div className='tw-border-b-2 tw-pb-10 tw-flex tw-flex-col xl:tw-flex-row tw-gap-5 tw-justify-center xl:tw-justify-evenly tw-items-center tw-mt-20'>
                                    <button onClick={wishlistHandle} className=' tw-rounded-full tw-w-[90%] xl:tw-w-[40%] tw-px-20 tw-py-3 tw-bg-[#95114d] tw-text-white tw-border-2 tw-border-[#fee369] tw-duration-100  hover:tw-text-[#fee369]'>Wishlist</button>
                                    <button onClick={handleBuyClick} disabled={singleProduct.stock === 0} className={` tw-rounded-full tw-w-[90%] xl:tw-w-[40%] tw-px-20 tw-py-3 tw-bg-[#95114d] disabled:tw-bg-[#f3f0f1] disabled:tw-text-[#95114d] tw-text-white tw-border-2 tw-border-[#fee369]`}>{singleProduct.stock > 0 ? 'Get a Quote' : 'Sold Out'}</button>
                                </div>

                                {/* DESCRIPTION */}
                                <div className='tw-mt-10 tw-px-5'>
                                    <p className='tw-text-center tw-tracking-widest tw-text-lg'>DESCRIPTION</p>
                                    <p className='tw-mt-5'>{singleProduct.description}</p>
                                    <table className='tw-mt-5 tw-w-full'>
                                        <tbody>
                                            <tr className='tw-w-full'>
                                                <td className='tw-border-2 tw-p-2 tw-w-1/2' >Material</td>
                                                <td className='tw-border-2 tw-p-2 '>{singleProduct.fabric}</td>
                                            </tr>

                                            <tr>
                                                <td className='tw-border-2 tw-p-2 '>Zari</td>
                                                <td className='tw-border-2 tw-p-2 '>{singleProduct.zari}</td>
                                            </tr>

                                            <tr>
                                                <td className='tw-border-2 tw-p-2 '>Note</td>
                                                <td className='tw-border-2 tw-p-2 '>Product color may slightly vary due to photographic lighting sources or your device settings.</td>
                                            </tr>

                                            <tr>
                                                <td className='tw-border-2 tw-p-2 '>Weight</td>
                                                <td className='tw-border-2 tw-p-2 '>{singleProduct.weight}</td>
                                            </tr>

                                            <tr>
                                                <td className='tw-border-2 tw-p-2 '>Wash Care</td>
                                                <td className='tw-border-2 tw-p-2 '>Dry wash recommended</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </section >

                        {/* you may like this */}
                        {visibleValues &&
                            <section className='tw-mt-16 md:tw-mt-24 '>

                                <div className='tw-mx-3 lg:tw-mx-20 tw-flex tw-items-center tw-justify-between'>
                                    <p className='tw-font-bold md:tw-text-xl'>Similar Products</p>
                                    <Link to={`/saares/${singleProduct.category}`} className='tw-text-[#a2328a] tw-border-2 tw-rounded-xl tw-font-bold tw-border-[#a2328a] tw-text-sm  md:tw-text-base tw-px-3 tw-py-2'> View All</Link>
                                </div>

                                <main className='tw-grid tw-grid-cols-2 sm:tw-grid-cols-2 lg:tw-grid-cols-4 lg:tw-gap-5 tw-mt-10 lg:tw-mx-20'>
                                    {visibleValues.map((product, index) => (
                                        <Link to={`/product/${product._id}`} key={index} className='tw-no-underline hover:tw-bg-white hover:tw-shadow-2xl tw-duration-200 tw-px-2 tw-pt-2 md:tw-px-5 md:tw-pt-5 tw-rounded-md tw-rounded-tl-3xl tw-rounded-br-3xl'>
                                            <img src={product.images[0].image} alt="" className=' tw-rounded-md tw-rounded-tl-3xl tw-rounded-br-3xl  tw-object-' />
                                            <p className='tw-truncate tw-mt-4 tw-px-2 tw-text-[#808080]'>{product.name}</p>
                                            <p className='tw-pl-3 tw-font-bold tw-text-black tw-text-lg'>₹ {product.price}</p>
                                        </Link>
                                    ))}
                                </main>
                            </section>}

                    </Fragment >
            }

            <Footer />
        </>
    )
}

export default Product