import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <>
            <main className='tw-bg-[#f9f9f9] tw-text-[#5c5c5c] '>
                <div className=' lg:tw-flex lg:tw-items-center lg:tw-justify-center lg:tw-gap-x-14 tw-text-sm tw-font-semibold tw-pt-10 lg:tw-pt-20 tw-mt-10 lg:tw-mt-20'>
                    <Link to={'/about-us'} className='tw-text-[#5c5c5c] tw-block tw-text-center tw-py-2'>About Us</Link>
                    <Link to={'/frequently-asked-questions'} className='tw-text-[#5c5c5c] tw-block tw-text-center tw-py-2'>Frequently Asked Questions</Link>
                    <Link to={'/terms-and-conditions'} className='tw-text-[#5c5c5c] tw-block tw-text-center tw-py-2'>Terms and Condition</Link>
                    <Link to={'/privacy-policy'} className='tw-text-[#5c5c5c] tw-block tw-text-center tw-py-2'>Privacy Policy</Link>
                    <Link to={'/shipping-and-refund-policy'} className='tw-text-[#5c5c5c] tw-block tw-text-center tw-py-2'>Shipping and Refund Policy</Link>
                </div>

                <p className='tw-text-center tw-pt-10 tw-pb-20'>&#169; {currentYear}, Ankavi Skills</p>

            </main>
        </>
    )
}

export default Footer