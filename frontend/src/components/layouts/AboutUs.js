import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import MetaData from './MetaData'

const AboutUs = () => {
    return (
        <>
            <MetaData title={'Ankavi Silks - About Us'} />

            <NavBar />

            {/* about us */}
            <section className='tw-px-5 tw-pt-10 tw-mx-auto lg:tw-w-[60%]'>
                <p className='tw-font-bold md:tw-text-xl'>About us</p>

                <p className='tw-text-[#666666] tw-text-sm tw-text-justify tw-mt-5 tw-leading-6'>Kanchipuram, also known as Kanchi, is a historic city located in the Indian state of Tamil Nadu. Kanjeevaram is also known as “City of Thousand Temples” there are large number of ancient temples throughout city. These temples are renowned for their exquisite architecture, intricate carvings, and rich religious significance. Some of the temples like Kanchi Kamakshi Amman Temple, Ekambareswarar Temple, Varadharaja Perumal Temple, and Kailasanathar Temple are very famous in world wide. We have festivals every month throughout the year. Kanchipuram is not only famous for temples and also very famous for handwoven silk sarees and the Government of India has recognized Kanchipuram silk saris as a geographical indication officially since the year 2005-06.

                    <br /><br /> our sarees woven with pure mulberry silk yarns for the luxurious quality. One of the distinctive features our intricate zari work, which involves weaving fine metallic threads, typically gold or silver-coated copper, into the fabric to create elaborate patterns and motifs. resulting in a durable and richly textured fabric.

                    <br /><br /> Welcome to Ankavi, a groundbreaking startup founded by the next generation weavers of Kanchipuram. Our mission is simple yet profound: to provide customers with authentic products while preserving the rich heritage and purity of Kanchipuram silk sarees. At Ankavi, we are dedicated to raising awareness about the significance of pure Kanchipuram silk sarees, ensuring that each piece carries the essence of tradition and craftsmanship.

                    <br /><br />  Our initiative not only benefits customers seeking originality and quality but also empowers the weaver community of Kanchipuram. Despite the exquisite nature of Kanchipuram sarees, many weavers' families have faced daily struggles. Through Ankavi, we strive to uplift these talented artisans by providing them with fair compensation and sustainable livelihoods.

                    <br /><br />   At Ankavi Silks, every purchase of our pure Kanchipuram handloom silk sarees directly benefits over 500 handloom weavers, illuminating their livelihoods and safeguarding the rich heritage of Kanchipuram silk craftsmanship. With over 70% of Kanchipuram weavers facing challenges in passing on their traditional artistry to the next generation due to the allure of power loom sarees, Ankavi Silks is dedicated to preserving our cultural legacy and supporting the sustainability of our beloved craft.

                    <br /><br />    While Kanchipuram sarees may be considered a luxury due to their craftsmanship and quality, we believe that everyone should have the opportunity to experience their elegance and beauty. By supporting Ankavi, you not only invest in a piece of timeless tradition but also contribute to the well-being of the weaver families who pour their heart and soul into each saree. Join us in celebrating the heritage of Kanchipuram silk sarees and making a meaningful difference in the lives of those who create them.
                </p>
            </section>

            {/* contact us */}
            <section className='tw-px-5 tw-pt-10 tw-mx-auto lg:tw-w-[60%]'>
                <p className='tw-font-bold md:tw-text-xl'>Contact us</p>

                <p className='tw-text-[#666666] tw-text-sm tw-text-justify tw-mt-5 tw-leading-6'>
                    For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e mail or by WhatsApp using the details provided below:

                    <br /><br /> ANKAVI SILKS
                    <br /><br /> 19, Thirucholai st,
                    <br /><br /> Kanchipuram - 631501
                    <br /><br /> ankavisilks@gmail.com
                    <br /><br /> +91 9786741726

                </p>
            </section>

            <Footer />
        </>
    )
}

export default AboutUs