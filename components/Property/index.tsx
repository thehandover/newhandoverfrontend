import React from 'react'
import Image from 'next/image'
import { parseCookies } from 'nookies'
import Link from 'next/link'
import { WhiteButton, SlimButton } from '../Shares/Buttons'
import { currency_symbol } from '../../config/constants'
import TownerImage from "/public/img/property-icons/tower-block.png"
import SqFtImage from "/public/img/property-icons/select_1.png"
import BedImage from "/public/img/property-icons/bed_1.png"
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Index = (props: any) => {

	const { token } = parseCookies()

	let currentDate: any = new Date()
	let propertyEndTime: any = new Date(props.property.biddingEnd.split('T')[0])
	currentDate = currentDate.getTime()
	propertyEndTime = propertyEndTime.getTime()
	let difference = propertyEndTime - currentDate
	let Difference_In_Days = difference / (1000 * 3600 * 24)
	let Difference_In_Hours = (difference % (1000 * 3600 * 24)) / (1000 * 60 * 60)

	return (
		<>
			<div className="bg-gray-50 p-3">
				<div className="text-sm">
					<Link href={'/'}>
						<a className="mr-1">Home</a>
					</Link>&gt;
					<Link href="/opportunities">
						<a className="mx-1">Opportunities</a>
					</Link>&gt;
					<span className="text-gray-600 mx-1">{props.property.propertyTitle}</span>
				</div>
			</div>

			<div className="width py-10 mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<Swiper scrollbar={{ hide: true, }} autoplay={{ delay: 3000, disableOnInteraction: false, }} modules={[Autoplay, Scrollbar]} className="mySwiper rounded-lg overflow-hidden" style={{width:"100%",height:"100%"}}>
						{
							props.property.images.slice(0,4).map((image: any, index: any) => {
								return (
									<SwiperSlide key={index}>
										<div className='relative' style={{width:'100%',height:'300px'}}>
											<Image src={image} layout="fill" alt={props.property.propertyTitle} className="object-cover" />
										</div>
									</SwiperSlide>
								)
							})
						}
					</Swiper>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
						{
							props.property.images.map((image: any, index: any) => {
								return (
									<div className='relative rounded-lg overflow-hidden h-36 md:h-auto' style={{width:'100%',maxHeight:"150px"}} key={index}>
										<Image src={image} layout="fill" alt={props.property.propertyTitle} className="object-cover" />
									</div>
								)
							})
						}
					</div>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-6 mt-5 gap-4'>
					<div className='md:col-span-4'>
						<h2 className="text-3xl my-2 theme-color capitalize font-bold">{props.property.propertyTitle}</h2>
						<div className='flex flex-wrap'>
							<span className='flex font-semibold text-gray-600 mr-5'>
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700 mr-2" viewBox="0 0 20 20" fill="currentColor">
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
								</svg> 4.56
							</span>
							<ol className='list-disc flex flex-wrap'>
								<li className="font-semibold text-gray-600 border-b-2 border-solid border-gray-600 w-max ml-5 mr-5">25 reviews</li>
								<li className="font-semibold text-gray-600 border-b-2 border-solid border-gray-600 w-max ml-5">{props.property.location.address}, {props.property.location.city}, {props.property.location.zip} </li>
							</ol>
						</div>
						<div className="quick-summary">
							<h4 className='theme-color text-lg font-semibold my-5'>Quick Summary</h4>
						</div>

						<div className='grid grid-cols-5 gap-4'>
							<div className='flex flex-wrap items-center'>
								<Image src={TownerImage} width={40} height={40} layout="intrinsic" alt='type' />
								<div>
									<p className='text-xs font-semibold'>{props.property.propertyType}</p>
									<p className='text-xs'>Type</p>
								</div>
							</div>
							<div className='flex flex-wrap items-center'>
								<Image src={SqFtImage} width={30} height={30} layout="intrinsic" alt='sqft' />
								<div className='ml-1'>
									<p className='text-sm font-semibold'>{props.property.area}</p>
									<p className='text-xs'>sq.ft</p>
								</div>
							</div>
							<div className='flex flex-wrap items-center'>
								<Image src={BedImage} width={40} height={40} layout="intrinsic" alt='bedrooms' />
								<div className='ml-1'>
									<p className='text-sm font-semibold'>{props.property.bedrooms}</p>
									<p className='text-xs'>bedrooms</p>
								</div>
							</div>
							<div className='flex flex-wrap items-center'>
								{/* <Image src={LocationImage} width={30} height={30} layout="intrinsic" /> */}
								<svg xmlns="http://www.w3.org/2000/svg" className="theme-color w-8 h-8" viewBox="0 0 20 20" fill="currentColor">
									<path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
								</svg>
								<div className='ml-1'>
									<p className='text-sm font-semibold'>{props.property.floors}</p>
									<p className='text-xs'>Floor</p>
								</div>
							</div>
							<div className='flex flex-wrap items-center'>
								<Image src={BedImage} width={40} height={40} layout="intrinsic" alt='bathrooms' />
								<div className='ml-1'>
									<p className='text-sm font-semibold'>{props.property.bathrooms}</p>
									<p className='text-xs'>bathrooms</p>
								</div>
							</div>
						</div>
						{/* <div className='my-5 text-sm' dangerouslySetInnerHTML={{ __html: props.property.description }}>
						</div> */}

						<div className='bg-white shadow-box rounded-lg my-5'>
							<h3 className='font-semibold theme-color p-4 border-b-2 border-solid w-max mb-4'>Description</h3>
							<div className='ml-5 pb-5' dangerouslySetInnerHTML={{ __html: props.property.description }}>
							</div>
							{/* <ul className="list-disc block ml-10 pb-5">
								<li className="text-xs">Abundance of sqaure feet</li>
								<li className="text-xs">180°of unobstructed waterviews</li>
								<li className="text-xs">Ceiling heights of 2.9m</li>
								<li className="text-xs">Elevated finishes – Emulating</li>
								<li className="text-xs">Marina Gate</li>
								<li className="text-xs">Premium lifestyle facilties</li>
							</ul> */}
						</div>

						{/* <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
							<div className='bg-white shadow-box rounded-lg my-5'>
								<div className='grid grid-cols-2'>
									<h3 className='font-semibold theme-color p-4 border-b-2 border-solid w-max mb-4'>Apartment Type</h3>
									<h3 className='font-semibold theme-color p-4 mb-4'>Range</h3>
								</div>
								<div className="p-4 pt-0">
									<div className="text-xs grid grid-cols-2">
										<span>Studio</span>
										<span className='font-semibold'>513 – 543 ft2</span>
									</div>
									<div className="text-xs grid grid-cols-2">
										<span>One Bedroom</span>
										<span className='font-semibold'>702 – 1,438 ft2</span>
									</div>
									<div className="text-xs grid grid-cols-2">
										<span>Two Bedroom</span>
										<span className='font-semibold'>1,161 –1,864 ft2</span>
									</div>
									<div className="text-xs grid grid-cols-2">
										<span>Three Bedroom</span>
										<span className='font-semibold'>1,168 –1,815 ft2</span>
									</div>
								</div>
							</div>
							<div className='bg-white shadow-box rounded-lg my-5'>
								<div className='grid grid-cols-2'>
									<h3 className='font-semibold theme-color p-4 border-b-2 border-solid mb-4'>Tower apartments starting rates:</h3>
								</div>
								<div className="p-4 pt-0">
									<div className="text-xs grid grid-cols-2">
										<span>Studio apartment:</span>
										<span className='font-semibold'>AED 886 500</span>
									</div>
									<div className="text-xs grid grid-cols-2">
										<span>One bedroom apartment:</span>
										<span className='font-semibold'>AED 1,218 500</span>
									</div>
									<div className="text-xs grid grid-cols-2">
										<span>Two bedroom apartment:</span>
										<span className='font-semibold'>AED 2,045 000</span>
									</div>
									<div className="text-xs grid grid-cols-2">
										<span>Three bedroom apartment:</span>
										<span className='font-semibold'>AED 3,515 000</span>
									</div>
								</div>
							</div>
						</div> */}

						{
							props.property.amenities.length > 0 && (
								<div className='bg-white shadow-box rounded-lg mb-5'>
									<h3 className='font-semibold theme-color p-4 border-b-2 border-solid w-max mb-4'>Aminities</h3>
									<div className='py-4 px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
										{
											props.property.amenities.map((aminity: any, index: any) => {
												return <div key={index} className="border border-solid border-gray-300 rounded p-4 py-2 theme-color font-medium capitalize">
													{aminity}
												</div>
											})
										}
									</div>
								</div>
							)
						}
						
						<div className='bg-white shadow-box rounded-lg'>
							<h3 className='font-semibold theme-color p-4 border-b-2 border-solid w-max mb-4'>Payment Terms</h3>
							<p className='text-xs ml-5 pb-2'>Payment terms for this development with be outlined as follows.</p>
							<ul className="list-disc block ml-10 pb-5">
								<li className="text-xs py-1"><strong>5%</strong> up front as a reservation fee</li>
								<li className="text-xs py-1"><strong>10%</strong> to be paid within 30 days (SPA is issued)</li>
								<li className="text-xs py-1"><strong>15%</strong> to be paid within 6 months of initial payment</li>
								<li className="text-xs py-1"><strong>10%</strong> to be paid within 9 months after initial payment</li>
								<li className="text-xs py-1"><strong>60%</strong> on completion of project</li>
								<li className="text-xs py-1">DLD Registration fee to be covered Select Group</li>
							</ul>
						</div>
					</div>

					<div className='md:col-span-2'>
						<div className='py-2 px-4 shadow-box rounded-lg sticky top-24'>
							<div className='flex flex-wrap justify-between items-center border-b-2 border-solid border-gray-200 pb-3'>
								<span className='theme-color font-semibold text-lg'>Total price</span>
								<p className="text-sm font-semibold text-blue-900">{currency_symbol} {props.property.priceDemand}</p>
							</div>
							<div>
								<div className='text-center pb-5'>
									{ Difference_In_Hours < 0 && Difference_In_Days < 0 ? (
											<span className="text-white bg-red-500 font-semibold py-2 w-full inline-block mt-4 rounded-full">Expired</span>
										) : (
											<SlimButton href={'/buyer/bid/'+props.property._id} className="py-2 w-full">Place a Bid</SlimButton>
										)
									}
									<p className='text-sm pt-1 font-medium' style={{fontSize: '10px'}}>It&apos;s free, with no obligation — cancel anytime</p>
								</div>
								<div className='text-right flex flex-wrap justify-between items-center'>
									<span className="text-black font-medium" style={{fontSize:'10px'}}>{ Difference_In_Hours >= 0 || Difference_In_Days >= 0 ? Difference_In_Days.toFixed(0)+ ' days ' + Difference_In_Hours.toFixed(0) + ' hours left' : ''}</span>
									<WhiteButton> Add to shortlist </WhiteButton>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Index