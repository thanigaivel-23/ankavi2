import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import MetaData from './MetaData'

const PrivacyPolicy = () => {
    return (
        <>
            <MetaData title={'Ankavi Silks - Privacy Policy'} />

            <NavBar />

            <section className='tw-px-5 tw-pt-10 tw-mx-auto lg:tw-w-[60%]'>
                <p className='tw-font-bold md:tw-text-xl'>Privacy Policy</p>

                <p className='tw-text-[#666666] tw-text-sm tw-text-justify tw-mt-5 tw-leading-6 tw-overflow-hidden'>
                    This policy explains how Ankavi Silks collects, uses and shares your personal information when you visit their website or make a purchase.

                    <br /><br /><b className='tw-font-bold'>Privacy Policy What information is collected?</b>

                    <br /><br />Device information: Browsing data like your IP address, web browser and the pages you viewed on the Ankavi Silks website. This is collected using cookies, log files, web beacons and similar technologies.

                    <br /><br />Order information: When you buy something, Ankavi Silks collects your name, billing and shipping addresses, payment details (including credit card number) and contact information.

                    <br /><br /><b className='tw-font-bold'>How is your information used?</b>
                    
                    

                    <br /><br />Order processing: Ankavi Silks uses your order information to complete your purchase, including processing payment, arranging delivery and sending you confirmations.
                    <br /><br />Communication: They may use your contact information to communicate with you.
                    <br /><br />Fraud prevention: Ankavi Silks uses your information to screen orders for potential risk or fraud.
                    <br /><br />Marketing: They may use your information to send you targeted advertising or marketing communications, based on your preferences and browsing history.


                    <br /><br /><b className='tw-font-bold'>Sharing your information</b>

                    <br /><br />Ankavi Silks uses third-party service providers to help run their business, such as Shopify for their online store and Google Analytics to understand how customers use their website. These providers may access your personal information but only to perform these specific services. You can find more information about how these third parties handle your data at the following links:

                    <br /><br />Shopify: Shopify Privacy Policy: https://www.shopify.com/legal/privacy

                    <br /><br />Google Analytics: Google Privacy Policy: https://www.google.com/intl/en/policies/privacy/ and Google Analytics Opt-out: https://tools.google.com/dlpage/gaoptout

                    <br /><br />Ankavi Silks may also disclose your personal information to comply with legal requirements or protect their rights.

                    <br /><br /><b className='tw-font-bold'>Your right to control your information</b>

                    <br /><br />  You can opt out of targeted advertising from various providers using the links below:

                    <br />Facebook: Facebook Ad Settings: https://www.facebook.com/settings/?tab=ads
                    <br />Google: Google Ad Settings: https://www.google.com/settings/ads/anonymous
                    <br />Bing: Microsoft Advertising Opt-out: https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads
                    <br />Digital Advertising Alliance: DAA Opt-out Portal: http://optout.aboutads.info/
                    <br /><br />If you are a European resident, you have the right to access and update your personal information held by Ankavi Silks. You can contact them using the information below.


                    <br /><br /><b className='tw-font-bold'>Data retention</b>

                    <br /><br />Ankavi Silks will keep your order information for their records unless you request its deletion.

                    <br /><br /><b className='tw-font-bold'>Changes to the Privacy Policy</b>

                    <br /><br />Ankavi Silks may update this policy periodically. You can check this page for any changes.
                </p>
            </section>

            <Footer />

        </>

    )
}

export default PrivacyPolicy