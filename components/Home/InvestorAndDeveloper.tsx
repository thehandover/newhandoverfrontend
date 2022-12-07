import Image from 'next/image'
import React from 'react'
import { LinkButton } from '../Shares/Buttons'
import DubaiImage from "/public/img/Dubai.svg"

const InvestorAndDeveloper = () => {
    return (
        <div className='width mx-auto py-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-20'>
                <div className='bg-white shadow-box rounded-lg overflow-hidden'>
                    <div className='relative bg-black bg-opacity-20' style={{width: '100%', height:'300px'}}>
                        <Image src={DubaiImage.src} layout="fill" className="object-cover" alt={'Investor'} />
                        <div className='absolute bottom-0 left-0 right-0 top-0 bg-black bg-opacity-20 flex items-end'>
                            <div className='text-white ml-6 mb-6 text-2xl font-medium'>For Investors</div>
                        </div>
                    </div>
                    <div className='py-8 px-6 text-sm'>
                        <p className='mb-1'>Investing in off-plan properties has become increasingly popular among buyers and investors in the UAE over the last few years. Off-plan properties generally offer a higher ROI (Return on Investment) than completed or ready properties. These properties provide more flexibility and are more likely to appreciate value quickly.</p>

                        <p>We carefully select some of the most attractive property development projects in the region. We can offer you a range of pre-handpicked, offplan, and ready properties through our expertise. We filter all investments and present you only with the best deals available on the market, ensuring that each development offers a solid rental return or capital growth.</p>
                        <LinkButton href={'/sign-in'}>Investor</LinkButton>
                    </div>
                </div>
                <div className='bg-white shadow-box rounded-lg overflow-hidden'>
                    <div className='relative bg-black bg-opacity-20' style={{width: '100%', height:'300px'}}>
                        <Image src={DubaiImage.src} layout="fill" className="object-cover" alt={'Developer'} />
                        <div className='absolute bottom-0 left-0 right-0 top-0 bg-black bg-opacity-20 flex items-end'>
                            <div className='text-white ml-6 mb-6 text-2xl font-medium'>For Developers</div>
                        </div>
                    </div>
                    <div className='py-8 px-6 text-sm'>
                        <p className='mb-1'>The UAE&lsquo;s real estate sector has witnessed sustained growth in the last two decades, and the recent developments in Dubai have put this emirate on the global map. The UAE offers ample opportunities for investors and developers alike to impact its real estate industry.</p>
                        <p>We have several strategically selected real estate development projects in UAE that offer various opportunities to the developers. You can buy offplan investment properties for sale in Dubai. As a developer, you can purchase off-plan property of your choice from our portal and develop it to earn a lucrative income. We take care of the entire process from start to finish, ensuring you don&lsquo;t have to worry about anything.</p>
                        <LinkButton href={'/sign-in'}>Developer</LinkButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvestorAndDeveloper