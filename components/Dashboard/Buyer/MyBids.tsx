import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MyBids = ({bid, openPayNow, setBidderId, setSellerId, setAmount}: any) => {

    let currentDate: any = new Date()
    let propertyEndTime: any = new Date(bid.Property[0].biddingEnd.split('T')[0])
    currentDate = currentDate.getTime()
    propertyEndTime = propertyEndTime.getTime()
    let difference = propertyEndTime - currentDate
    let Difference_In_Days = difference / (1000 * 3600 * 24)
    let Difference_In_Hours = (difference % (1000 * 3600 * 24)) / (1000 * 60 * 60)

    return (
        <div className="border border-solid border-gray-300 rounded overflow-hidden" style={{ height: 'max-content' }}>
            <div className="w-full overflow-hidden relative" style={{ height: 250 }}>
                <Image className="object-cover w-full" src={bid.Property[0]?.images[0]} layout="fill" alt="" />
                <div className="absolute top-4 right-0 bg-black p-1 rounded">
                <p className="text-white text-xs text-right font-medium">ADE {bid.Property[0].priceDemand}</p>
                </div>
            </div>
            <div className="px-4 pt-4">
                <div className="flex justify-between border-b border-solid border-gray-200 pb-2 mb-2">
                    <div>
                        <Link href={`/opportunity/${bid.Property[0]._id}`}>
                            <a>
                                <h5 className="text-gray-900 text-base font-medium capitalize">{bid.Property[0].propertyTitle}</h5>
                            </a>
                        </Link>
                        <p className="text-gray-700 text-xs">{bid.Property[0].location.address + ' ' + bid.Property[0].location.city + ', ' + bid.Property[0].location.state + ', ' + bid.Property[0].location.zip}</p>
                    </div>
                    <div>
                        <p className="text-xs">Bid amount</p>
                        <span className="bg-gray-300 font-bold text-xs text-gray-900 rounded px-1">ADE {bid.bidAmount}</span>
                    </div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 pb-2">
                    <div className="grid grid-cols-3 gap-2">
                        <p>{bid.Property[0].area} sq.ft</p>
                        <p>{bid.Property[0].bedrooms} bed</p>
                        <p>{bid.Property[0].bedrooms} bath</p>
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
            {
                bid.winner == true && (
                    <div className="w-full">
                        <button className="bg-gray-900 text-white inline-block w-full py-1" onClick={()=>{
                            setAmount(bid.bidAmount)
                            setBidderId(bid.bidderId)
                            setSellerId(bid.sellerId)
                            openPayNow(bid)
                        }}>Pay Now</button>
                    </div>
                )
            }
        </div>
    )
}

export default MyBids