import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SqFtImage from "/public/img/property-icons/select.png"
import BedImage from "/public/img/property-icons/bed.png"
import styles from "./Opportunity.module.css"

const Opportunity = ({property}: any) => {
    return (
        <Link href={`/opportunity/${property._id}`}>
            <a className={`relative rounded-lg overflow-hidden ${styles.propertySection}`} style={{height: '16rem'}}>
                <Image src={property.images[0]} layout="fill" className="object-cover" alt={property.propertyTitle} />
                <div className={`absolute bottom-0 top-0 w-full ${styles.propertyContent}`} style={{background: "linear-gradient(0deg, rgba(0, 0, 0,0.8), rgba(0, 0, 0,0.7), rgba(255, 255, 255, 0.2), transparent)"}}>
                    <div className='h-full flex flex-col justify-end px-5 py-3'>
                        <div className="flex flex-wrap justify-between w-full border-b-2 border-solid border-white pb-2">
                            <div style={{flex: 3}}>
                                <h3 className="text-white text-lg font-semibold pb-1 pr-2">{property.propertyTitle}</h3>
                                <p className="text-white text-xs">{property.location.address}, {property.location.city} {property.location.zip}</p>
                            </div>
                            <span className='text-white font-medium text-sm flex-1'>ADE {property.priceDemand}</span>
                        </div>
                        
                        <div className="grid grid-cols-4 text-gray-300 text-xs w-full mt-2">
                            <div className="flex justify-center">
                                <div className='relative w-3 h-3'>
                                    <Image src={SqFtImage} alt={'area sq.ft'} layout="fill" className='object-contain' />
                                </div>
                                <span className='ml-1'>{property.area} sq.ft</span>
                            </div>
                            <div className="flex justify-center">
                                <div className='relative w-3 h-3'>
                                    <Image src={BedImage} alt={'area sq.ft'} layout="fill" className='object-contain' />
                                </div>
                                <span className='ml-1'>{property.bedrooms} bed</span>
                            </div>
                            <div className="flex justify-center">
                                <div className='relative w-3 h-3'>
                                    <Image src={BedImage} alt={'area sq.ft'} layout="fill" className='object-contain' />
                                </div>
                                <span className='ml-1'>{property.bathrooms} bath</span>
                            </div>
                            {/* <span>3 hours left</span> */}
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default Opportunity