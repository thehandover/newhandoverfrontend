import Image from 'next/image';
import React from 'react'
import styles from "./About.module.css"
import CoverImage from "/public/img/about/phone.png"
import OurCompanyImg from "/public/img/about/Peninsula-Five-The-Signature.jpg"
import PeninsulaImg2 from "/public/img/about/Peninsula-Five-The-Signature-2.jpg"
import VisionIcon1 from "/public/img/about/honesty.png"
import VisionIcon2 from "/public/img/about/decision.png"
import VisionIcon3 from "/public/img/about/save-money.png"
import VisionIcon4 from "/public/img/about/efficiency.png"
import WhyChoose1 from "/public/img/about/transparency.png"
import WhyChoose2 from "/public/img/about/secure-shield.png"
import WhyChoose3 from "/public/img/about/assets.png"
import WhyChoose4 from "/public/img/about/insight.png"

const About = () => {
    return (
        <>
        <div className="width m-auto herosection">
            <div className="grid grid-cols-1 items-center justify-center lg:grid-cols-2">
                <div className="lg:text-left text-center">
                    <h1 className={`theme-color text-5xl font-semibold ${styles.heading}`}>Making a difference in the off-plan real estate investment market.</h1>
                    <p className="tagline text-gray-500 mt-5">Buy or sell off-plan properties in the UAE: a single platform for investors and developers featuring comprehensive, up-to-date property investment data, insights, and listings on thousands of projects across Dubai and the UAE.</p>
                </div>
                <div className="mt-10 lg:mt-0 text-center">
                    <Image src={CoverImage.src} width={CoverImage.width} height={CoverImage.height} placeholder="blur" blurDataURL={CoverImage.blurDataURL} className="cover-img mx-auto" alt={'cover-image'} />
                </div>
            </div>
        </div>

        {/* Our Company */}
        <div className={`width mx-auto my-20 ${styles.mdWidth}`}>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                <div className={`relative h-full w-full lg:rounded-r-xl overflow-hidden shadow-2xl ${styles.leftImage}`}>
                    <Image src={OurCompanyImg} layout="fill" className='object-cover' alt='Our Company' />
                </div>
                <div className='md:px-10 lg:px-20'>
                    <h3 className='theme-color text-lg sm:text-3xl md:text-4xl font-bold'>Our Company</h3>
                    <div className='text-gray-500 text-sm mt-5'>
                    <p className='leading-relaxed mb-5'>The Handover is an innovative off-plan real estate investment marketplace ready to transform the way people make investments in off-plan properties across UAE. Since our inception, we have relentlessly pursued the impossible in creating a property portal that gives you the edge to be &lsquo;The Handover.&rsquo; We are the region&apos;s first and only fully integrated off-plan property portal. This early status makes us an ideal partner for developers and investors looking to tap into the ever-growing off-plan market.</p>

                    <p className='leading-relaxed'>We are here to bridge the gap between recognized real estate developers and investors looking for reliable, secure, and profitable investment opportunities in the real estate market. We offer market analysis, insights, statistics, and much more to help investors make the right decisions regarding their investments while developers can post their properties with confidence. We provide our clients with a seamless experience with exceptional customer service from start to finish. </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Our Vision */}
        <div className="width mx-auto py-20">
            <div className='text-center pb-10'>
                <h3 className='theme-color text-lg sm:text-3xl md:text-4xl font-bold w-4/6 mx-auto'>Our Vision</h3>
                <span className='text-gray-500'>Our primary vision:</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className='bg-white shadow-2xl p-6 rounded-xl'>
                    <div className='flex justify-center'>
                        <div className={styles.visionImageContainer}>
                            <Image src={VisionIcon1} alt={'honesty'} />
                        </div>
                    </div>
                    <p className='text-gray-500'>To build a high-performing, most trusted, and fullyengaged marketplace for off-plan property investments in UAE and worldwide.</p>
                </div>
                <div className='bg-white shadow-2xl p-6 rounded-xl'>
                    <div className='flex justify-center'>
                        <div className={styles.visionImageContainer}>
                            <Image src={VisionIcon2} alt={'decision'} />
                        </div>
                    </div>
                    <p className='text-gray-500'>To ensure that developers and investors make smart decisions and collaborations for better and mutually profitable outcomes.</p>
                </div>
                <div className='bg-white shadow-2xl p-6 rounded-xl'>
                    <div className='flex justify-center'>
                        <div className={styles.visionImageContainer}>
                            <Image src={VisionIcon3} alt={'save money'} />
                        </div>
                    </div>
                    <p className='text-gray-500'>To become the world&apos;s leading off-plan investment marketplace through our hard work, strategic approach, research, partnerships, critical thinking, and analysis to minimize risks and maximize profitability.</p>
                </div>
                <div className='bg-white shadow-2xl p-6 rounded-xl'>
                    <div className='flex justify-center'>
                        <div className={styles.visionImageContainer}>
                            <Image src={VisionIcon4} alt={'efficiency'} />
                        </div>
                    </div>
                    <p className='text-gray-500'>To stay flexible, agile, and adaptive to market changes efficiently and effectively.</p>
                </div>
            </div>
        </div>

        {/* Our Mission */}
        <div className={`width mx-auto my-20 ${styles.mdWidth}`}>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='md:px-10 lg:px-20'>
                    <h3 className='theme-color text-lg sm:text-2xl md:text-3xl font-bold'>Our Mission</h3>
                    <div className='text-gray-500 text-sm my-5'>
                        <p>Our mission is to deliver a unique, memorable, seamless, and secure offplan real estate investment experience to our clients, including investors and developers. We do this by providing the latest and the hottest listings of off-plan/pre-sale properties available in the real estate market.</p>
                    </div>

                    <h3 className='theme-color text-lg sm:text-2xl md:text-3xl font-bold'>Our Values</h3>
                    <div className='text-gray-500 text-sm mt-5'>
                        <p>Our company adheres to the highest values of integrity, honesty, ownership, innovation, reliability, commitment, and hard work to deliver the best to our clients in the realm of off-plan property investment.</p>
                    </div>
                </div>
                <div className={`relative h-full w-full lg:rounded-l-xl overflow-hidden shadow-2xl mt-10 lg:mt-0 ${styles.rightImage}`}>
                    <Image src={PeninsulaImg2} layout="fill" className='object-cover' alt='Our Mission' />
                </div>
            </div>
        </div>
        
        {/* Why Choose Us */}
        <div className='width mx-auto py-20'>
            <div className='text-center'>
                <h3 className='theme-color text-lg sm:text-3xl md:text-4xl font-bold w-4/6 mx-auto pb-5'>Why Choose Us?</h3>
                <p className='text-gray-500'>The Handover is more than just another marketplace for searching off-plan properties. We are a team of passionate and experienced real estate experts who have a keen eye for the local and international real estate markets. We leverage our expertise and knowledge to bring you the latest from the real estate market and seamlessly connect investors and developers.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 py-10'>
                <div className='flex flex-wrap bg-white p-6 rounded-lg shadow-box'>
                    <div className='w-2/12 text-right pr-4'>
                        <Image src={WhyChoose1} width={60} height={60} alt='Market analysis' />
                    </div>
                    <div className='w-10/12'>
                        <h4 className='theme-color font-semibold text-lg'>Complete Transparency</h4>
                        <p className='pt-4 text-gray-600 text-sm'>Our portal is transparent as we present you with complete information about the developers and available off-plan investment properties or projects. You can get in touch with our customer support anytime to get more details on any project listed on our portal with confidence.</p>
                    </div>
                </div>
                <div className='flex flex-wrap bg-white p-6 rounded-lg shadow-box'>
                    <div className='w-2/12 text-right pr-4'>
                        <Image src={WhyChoose2} width={60} height={60} alt='Market analysis' />
                    </div>
                    <div className='w-10/12'>
                        <h4 className='theme-color font-semibold text-lg'>Secure and Seamless</h4>
                        <p className='pt-4 text-gray-600 text-sm'>We have designed our portal to make it fully secure while delivering a seamless experience to our clients. You can browse through off-plan property listings without worry and choose the one that best suits your needs and budget.</p>
                    </div>
                </div>
                <div className='flex flex-wrap bg-white p-6 rounded-lg shadow-box'>
                    <div className='w-2/12 text-right pr-4'>
                        <Image src={WhyChoose3} width={60} height={60} alt='Market analysis' />
                    </div>
                    <div className='w-10/12'>
                        <h4 className='theme-color font-semibold text-lg'>Variety of Properties</h4>
                        <p className='pt-4 text-gray-600 text-sm'>You get the widest range of properties at our online marketplace ranging from luxury residential projects to lucrative commercial real estate. We ensure that developers can easily list any kind of property on our portal without hassle, and investors can find them according to their requirements and budget.</p>
                    </div>
                </div>
                <div className='flex flex-wrap bg-white p-6 rounded-lg shadow-box'>
                    <div className='w-2/12 text-right pr-4'>
                        <Image src={WhyChoose4} width={60} height={60} alt='Market analysis' />
                    </div>
                    <div className='w-10/12'>
                        <h4 className='theme-color font-semibold text-lg'>Local Market Insights</h4>
                        <p className='pt-4 text-gray-600 text-sm'>Our experts thoroughly research and analyze the local real estate markets to provide only fresh and dependable analysis and information. We keep on updating our website with local property market insights to help our clients make informed decisions about their investments.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Start of Search Bar  */}

        {/* <div className="" style={{ backgroundImage: `linear-gradient(178deg, #00000059, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 1), white), url(${BackgroundImage.src})`, backgroundRepeat: 'no-repeat' }}>
            <div className="font-semibold py-32 text-3xl text-center">
                <h3 className="uppercase theme-color text-4xl">About</h3>
            </div>
        </div> */}

        {/* end of search Bar  */}
            {/* <section className="about-wrap2 width mx-auto">
                <div className="flex flex-wrap flex-row-reverse flex-lg-row">
                    <div className="w-full md:w-3/6">
                        <div className="about-img">
                            <Image src={`${About08.src}`} alt="about" width={746} height={587} />
                        </div>
                    </div>
                    <div className="w-full md:w-3/6">
                        <div className="about-box3 mx-3" data-wow-delay=".2s">
                            <h2 className="item-title text-gray-500">
                                HandOver – Embark on a journey to your best off-plan property deal!
                            </h2>
                            <h4 className={`${styles.h4} theme-color`}>Who Are We?</h4>
                            <p className="text-gray-500" style={{marginBottom: '10px'}}>HandOver is a leading property portal revolutionizing the off-plan real estate market. We take pride in bridging the gap between investors and top real estate developers to discover their best property offers online.</p>

                            <h4 className={`${styles.h4} theme-color`}>Our Vision</h4>
                            <p className="text-gray-500" style={{marginBottom: '10px'}}>Being the most trusted name for property searching and pre-selling, HandOver has set its sights on taking the off-plan real estate industry by storm from the frontlines. Our topmost priority is to alleviate the burden of responsibility to ensure smooth sailing in your endeavors.</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap flex-row flex-lg-row-reverse mt-10">
                    <div className="w-full md:w-3/6">
                        <div className="about-layout3">
                            <div className="item-img">
                                <Image src={About09.src} blurDataURL={About09.blurDataURL} alt="about" width={809} height={587} />
                                <div className="play-button">
                                    <div className="item-icon">
                                        <a
                                            href="http://www.youtube.com/watch?v=1iIZeIy7TqM"
                                            className="play-btn play-btn-big"
                                        >
                                            <span className="play-icon style-2">
                                                <i className="fas fa-play" />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-3/6">
                        <div className="about-layout2 mx-5">
                            <span className="item-subtitle text-xl theme-color">Our Mission</span>
                            <h2 className="item-title text-base theme-color">
                                The Core Company Values Of Our main Goal.
                            </h2>
                            <p className="text-gray-500 my-2">We know it&lsquo;s special to you — so we do our best to make it a memorable, reliable, and secure real estate experience for you. We, at HandOver, are devoted to providing our clientele access to the latest and most comprehensive pre-sale/off-plan properties listings.
                            </p>
                            <div className="">
                                <div className="single-skill">
                                    <h4 className="title text-sm theme-color border-b border-solid border-b-blue-800 w-max"> Modern Technology </h4>
                                    <div className="skill-bar">
                                        <div className="skill-per" data-per={59} />
                                    </div>
                                </div>
                                <div className="single-skill">
                                    <h4 className="title text-sm theme-color border-b border-solid border-b-blue-800 w-max">Tax Solution Area</h4>
                                    <div className="skill-bar">
                                        <div className="skill-per" data-per={79} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    )
}

export default About