import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { AiFillCloseCircle } from "react-icons/ai";
import { Empty } from 'antd';
import { Link } from 'react-router-dom'
import NavBar from "./layouts/NavBar";
import { removeItemFromWishlist } from "../slices/cartSlice";
import Footer from "./layouts/Footer";
import MetaData from "./layouts/MetaData";


const Wishlist = () => {

    const { wishlistItems } = useSelector(state => state.cartState)
    const dispatch = useDispatch()

    const handleBuyClick = (ProductId) => {
        const whatsappMessage = ` Hi! Ankavai Silk Sarees I'm interested in buying this. Like to know about this ${window.location.origin}/product/${ProductId}`;
        const whatsappLink = `https://wa.me/+919786741726?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappLink, '_blank');
    };

    useEffect(() => {
        window.scrollTo({ top: 0 });

    }, [])

    return (
        <>
            <MetaData title={'Ankavi Silks - Wishlist'} />

            {/* 1 navbar */}
            <NavBar />

            <Fragment>

                {/* main  ------------------------------------------------>*/}
                {wishlistItems.length === 0 ?
                    <Empty description={false} className="tw-mt-28 tw-mb-16 md:tw-text-lg tw-font-bold" >

                        <div className="tw-mt-24 tw-text-black">Your Wishlist Is Empty,
                            <Link to={'/'} className=" tw-text-[#a2328a] tw-ml-1 tw-no-underline">Shop Now</Link>
                        </div>
                    </Empty>

                    :
                    <Fragment>


                        <p className="tw-mx-2 md:tw-mx-auto tw-my-3 md:tw-mt-14 md:tw-w-11/12 tw-font-bold md:tw-text-xl">My Wishlist {wishlistItems.length} items </p>

                        <div className="md:tw-mt-14 md:tw-w-11/12 tw-grid tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-5  tw-grid-flow-row tw-gap-2 md:tw-gap-7 lg:tw-gap-10 tw-mx-2 md:tw-mx-auto tw-mb-8">


                            {/* CartDetails */}

                            {wishlistItems.map((item) => (

                                <div key={item.product} className="tw-border tw-relative">
                                    {/* img */}
                                    <Link to={`/product/${item.product}`}>
                                        <img src={item.image} className=" tw-object-cover tw-h-72 tw-w-72 " alt="" />
                                    </Link>

                                    <div className="tw-mx-3 tw-my-2 ">

                                        <div className="  ">
                                            {/* name */}
                                            <Link to={`/product/${item.product}`} className="tw-font-bold tw-no-underline    tw-text-gray-600   tw-text-xs md:tw-text-base">
                                                <p className=" tw-line-clamp-1">{item.name}</p>
                                            </Link>


                                            {/* price */}
                                            <div className="tw-flex tw-items-center tw-mt-2  tw-gap-x-2 tw-text-xs md:tw-text-base">
                                                <p className=" ">&#8377;{item.price}</p>
                                            </div>



                                        </div>

                                        <div className="tw-absolute tw-cursor-pointer tw-top-4 tw-right-3" onClick={() => dispatch(removeItemFromWishlist(item.product))} >
                                            <AiFillCloseCircle className="tw-text-gray-500 tw-w-7 tw-h-7" />
                                        </div>
                                    </div>

                                    <button onClick={() => handleBuyClick(item.product)} className="tw-w-full tw-border tw-text-center tw-text-rose-500 tw-font-bold tw-py-2 tw-text-sm md:tw-text-base" >
                                        GET A QUOTE
                                    </button>
                                </div>
                            ))}


                        </div>



                    </Fragment>
                }


            </Fragment >

            <Footer />

        </>

    );
}

export default Wishlist