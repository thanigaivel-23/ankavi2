import React, { useEffect, useState } from 'react'
import white_icon from '../../img/white_icon.png'
import white_title from '../../img/white_title.png'

import { BsHeart } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaRegUserCircle } from "react-icons/fa";

const ResSearch = ({ click, searchHandler, keyword, setKeyword }) => {


    return (
        <form onSubmit={searchHandler} className={`${click ? ' tw-translate-x-0 tw-relative' : ' -tw-translate-x-[1000px]'} tw-absolute  tw-duration-200`}>
            <div className={` tw-relative  `}>
                <input type="text" placeholder='Search...' value={keyword} onChange={(e) => setKeyword(e.target.value)} className={` tw-outline-none tw-rounded-full  tw-pl-6  tw-py-2 tw-pr-16 tw-w-[96%] tw-m`} />
                <button className='tw-absolute tw-top-0 tw-right-0 tw-p-2 tw-px-4 tw-rounded-r-full tw-bg-blue-200 tw-mr-2' >
                    <IoSearchOutline className=' tw-text-2xl' />
                </button>
            </div>
        </form>
    )
}

const NavBar = () => {

    const { wishlistItems } = useSelector(state => state.cartState)
    const { isAuthenticate } = useSelector(state => state.authState)

    const [color, setColor] = useState(false)

    const changeColor = () => {
        if (window.scrollY >= 20) {
            setColor(true)
        }

        else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)

    const [click, setClick] = useState(false);

    const location = useLocation()

    //for search
    const [keyword, setKeyword] = useState('');

    const navigate = useNavigate();

    const searchHandler = (e) => {
        e.preventDefault();
        navigate(`/search/${keyword}`);
    }

    const clearKeyword = () => {

        setKeyword("");

    }

    useEffect(() => {
        if (location.pathname === `/`) {
            clearKeyword()
        }

    }, [location])

    return (

        <>

            {location.pathname === '/' ?
                <nav className={`${color ? 'tw-bg-[#400c35]' : 'tw-bg-transparent'}  fixed-top tw-z-10  lg:hover:tw-bg-[#400c35] tw-ease-linear tw-duration-200 tw-shadow-lg  `}>
                    <main className='tw-flex tw-items-center tw-justify-between'>
                        <div className='tw-flex tw-items-center  tw-py-3  tw-pl-5 lg:tw-pl-16 lg:tw-gap-x-10 '>


                            <Link to={'/'} className='tw-flex tw-items-center tw-gap-x-3'>
                                <img src={white_icon} alt="" className='tw-w-20 tw-hidden lg:tw-block' />
                                <img src={white_title} alt="" className='tw-w-28 lg:tw-pt-5' />
                            </Link>


                        </div>

                        {/* website under working */}
                        <div className="tw-absolute tw-inset-0 tw-top-0 tw-flex tw-justify-center">
                            <p className={`${color ? 'tw-text-white tw-text-sm tw-hidden lg:tw-inline' : 'tw-hidden'}`}>*** We're Launching Early to Get Your Feedback ***</p>
                        </div>

                        <div className='tw-flex  tw-items-center tw-pr-5 lg:tw-pr-16 tw-gap-x-3 lg:tw-gap-x-20 '>
                            <form onSubmit={searchHandler} className='tw-relative tw-hidden md:tw-flex'>
                                <input type="text" placeholder='Search...' value={keyword} onChange={(e) => setKeyword(e.target.value)} className=' tw-outline-none tw-rounded-full  tw-pl-6  tw-py-2 tw-px-16 tw-w-96' />
                                <button className='tw-absolute tw-top-0 tw-right-0 tw-p-2 tw-px-4 tw-bg-blue-300 tw-rounded-r-full' >
                                    <IoSearchOutline className=' tw-text-2xl' />
                                </button>
                            </form>

                            <IoSearchOutline className='tw-text-white tw-text-2xl md:tw-hidden tw-z-10' onClick={() => setClick(!click)} />


                            <div className=' tw-flex tw-items-center tw-gap-x-3 lg:tw-gap-x-8'>
                                <Link to="/wishlist" className="tw-flex tw-relative">
                                    <BsHeart className='tw-text-white tw-text-2xl' />
                                    {wishlistItems.length !== 0 &&
                                        <p className="tw-absolute tw-bottom-0 tw-left-3 tw-bg-rose-500 tw-text-white tw-rounded-full tw-w-5 tw-h-5 tw-font-bold tw-flex tw-justify-center tw-items-center tw-text-xs">{wishlistItems.length}</p>}
                                </Link>
                                {isAuthenticate &&
                                    <Link to="/account" className="tw-flex tw-relative">
                                        <FaRegUserCircle className='tw-text-white tw-text-2xl' />
                                    </Link>
                                }
                            </div>



                        </div>
                    </main>

                    {/* RES website under working */}
                    <p className={`${color ? 'tw-text-white tw-text-center tw-text-xs tw-pb-1 lg:tw-hidden' : 'tw-hidden'}`}>*** We're Launching Early to Get Your Feedback ***</p>

                    {/* res search */}
                    <ResSearch click={click} searchHandler={searchHandler} keyword={keyword} setKeyword={setKeyword} />


                </nav>
                :
                <nav className={` tw-bg-[#400c35]  tw-ease-linear tw-duration-200 tw-shadow-lg  `}>
                    <main className='tw-flex tw-items-center tw-justify-between'>
                        <div className='tw-flex tw-items-center  tw-py-3 lg:tw-py-4 tw-pl-5 lg:tw-pl-16 tw-gap-x-7 lg:tw-gap-x-20'>

                            <Link to={'/'} className='tw-flex tw-items-center tw-gap-x-3'>
                                <img src={white_icon} alt="" className='tw-w-20 tw-hidden lg:tw-block' />
                                <img src={white_title} alt="" className='tw-w-28 lg:tw-pt-5' />
                            </Link>



                        </div>

                        <div className='tw-flex  tw-items-center tw-pr-5 lg:tw-pr-16 tw-gap-x-5 lg:tw-gap-x-20 '>
                            <form onSubmit={searchHandler} className='tw-relative tw-hidden md:tw-flex'>
                                <input type="text" placeholder='Search...' value={keyword} onChange={(e) => setKeyword(e.target.value)} className=' tw-outline-none tw-rounded-full  tw-pl-6  tw-py-2 tw-px-16 tw-w-96' />
                                <button className='tw-absolute tw-top-0 tw-right-0 tw-p-2 tw-px-4 tw-bg-blue-300 tw-rounded-r-full' >
                                    <IoSearchOutline className=' tw-text-2xl' />
                                </button>
                            </form>

                            <IoSearchOutline className='tw-text-white tw-text-2xl md:tw-hidden' onClick={() => setClick(!click)} />
                            <div className=' tw-flex tw-items-center tw-gap-x-8'>
                                <Link to="/wishlist" className="tw-flex tw-relative">
                                    <BsHeart className='tw-text-white tw-text-2xl' />
                                    {wishlistItems.length !== 0 &&
                                        <p className="tw-absolute tw-bottom-0 tw-left-3 tw-bg-rose-500 tw-text-white tw-rounded-full tw-w-5 tw-h-5 tw-font-bold tw-flex tw-justify-center tw-items-center tw-text-xs">{wishlistItems.length}</p>}
                                </Link>

                                {isAuthenticate &&
                                    <Link to="/account" className="tw-flex tw-relative">
                                        <FaRegUserCircle className='tw-text-white tw-text-2xl' />
                                    </Link>
                                }

                            </div>
                        </div>
                    </main>

                    {/* res search */}
                    <ResSearch click={click} searchHandler={searchHandler} keyword={keyword} setKeyword={setKeyword} />
                </nav>}


        </>

    )
}

export default NavBar