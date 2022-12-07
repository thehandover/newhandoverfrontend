import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Property = ({property, delProperty, editProperty}: any) => {

    let currentDate: any = new Date()
    let propertyEndTime: any = new Date(property.biddingEnd.split('T')[0])
    currentDate = currentDate.getTime()
    propertyEndTime = propertyEndTime.getTime()
    let difference = propertyEndTime - currentDate
    let Difference_In_Days = difference / (1000 * 3600 * 24)
    let Difference_In_Hours = (difference % (1000 * 3600 * 24)) / (1000 * 60 * 60)

    return (
        <div className="border border-solid border-gray-300 rounded overflow-hidden" style={{ height: 'max-content' }}>
            <div className="w-full overflow-hidden relative" style={{ height: 250 }}>
                <Image className="object-cover w-full" src={property.images[0]} layout="fill" alt="" />
                <div className="absolute right-0 top-0">
                    <a className="px-2 py-1 bg-blue-100 text-blue-500 inline-block border-r border-solid border-gray-300 cursor-pointer" onClick={(e: any)=>editProperty(property)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>
                    </a>
                    <a className="px-2 py-1 bg-red-100 text-red-500 inline-block cursor-pointer" onClick={(e: any)=>delProperty(property._id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                    </a>
                    <div className="absolute right-0">
                        <Link href={`/seller/property/${property._id}`}>
                            <a className="w-full inline-block py-1 bg-black text-white text-center px-2 rounded-l-lg">view</a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="px-4 pt-4">
                <div className="flex justify-between border-b border-solid border-gray-200 pb-2 mb-2">
                    <div>
                        <Link href={`/opportunity/${property._id}`}>
                            <a>
                                <h5 className="text-gray-900 text-base font-medium capitalize">{property.propertyTitle}</h5>
                            </a>
                        </Link>
                        <p className="text-gray-700 text-xs">{property.location.address + ' ' + property.location.city + ', ' + property.location.state + ', ' + property.location.zip}</p>
                    </div>
                    <p className="theme-color text-xs font-bold">ADE {property.priceDemand}</p>
                </div>
                <div className="flex justify-between text-xs text-gray-500 pb-2">
                    <div className="grid grid-cols-3 gap-2">
                        <p>{property.area} sq.ft</p>
                        <p>{property.bedrooms} bed</p>
                        <p>{property.bedrooms} bath</p>
                    </div>
                    <span>
                        {
                            (Difference_In_Days > 0 || Difference_In_Hours > 0) ? (
                                <>{ Difference_In_Days.toFixed(0) } days {Difference_In_Hours.toFixed(0)} hours left</>
                            ) : (
                                <span className="bg-red-100 text-red-500 rounded-full px-2">Expired</span>
                            )
                        }
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Property