import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import MetaData from './MetaData'

const ShippingRefundPolicy = () => {
  return (
    <>
      <MetaData title={'Ankavi Silks - Shipping and Refund Policy'} />

      <NavBar />

      <section className='tw-px-5 tw-pt-10 tw-mx-auto lg:tw-w-[60%]'>
        <p className='tw-font-bold md:tw-text-xl'>Shipping and Refund Policy</p>

        <p className='tw-text-[#666666] tw-text-sm tw-text-justify tw-mt-5 tw-leading-6'>
          At Ankavi silks, we strive to provide you with the finest quality products straight from our looms. As we are direct weavers, we maintain a strict policy regarding returns to ensure the integrity of our craftsmanship and the satisfaction of our customers.

          <br /><br /><b className='tw-font-bold'>Eligibility for Return:</b> We accept returns only in the event of receiving a damaged or incorrect product. To be eligible for a return, your item must be in the same condition as when you received it: unworn, unused, with tags intact, and in its original packaging. We require a receipt or proof of purchase for all returns.

          <br /><br /><b className='tw-font-bold'>Non-Returnable Items: </b> We do not accept returns for slight variations in color or texture. Please note that while we use only the finest quality pure silk for weaving our sarees, variations may occur due to factors such as device pixels, screen brightness, or device temperature.

          <br /><br /><b className='tw-font-bold'>Initiating a Return:</b>  To initiate a return, please contact us via Instagram or WhatsApp at +919786741726. Kindly provide details of the issue along with supporting evidence such as images of the damaged or incorrect product.

          <br /><br /><b className='tw-font-bold'>Exchanges:</b> The fastest way to ensure you get what you want is to return the item you have, and once the return is accepted, make a separate purchase for the new item.

          <br /><br /><b className='tw-font-bold'>Refunds: </b>  Refunds for the wrong product or damaged product will be processed within 48 after the product is received by ankavi silks.

          <br /><br /><b className='tw-font-bold'>Contact Us:</b> For any further queries or assistance regarding returns, feel free to reach out to us on WhatsApp at +919786741726. We are here to address your concerns and ensure your satisfaction.

          <br /><br /><b className='tw-font-bold'>Acceptance of Terms: </b> By placing an order through our website, you acknowledge and accept all our terms and conditions, including our return policy.

          <br /><br />At Ankavi silks, we value your trust and aim to provide you with a seamless shopping experience. Thank you for choosing us for your saree needs.

        </p>
      </section>

      <Footer />
    </>
  )
}

export default ShippingRefundPolicy