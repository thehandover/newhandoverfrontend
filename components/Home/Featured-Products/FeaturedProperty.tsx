import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./FeaturedProperty.module.css"
import { LinkButton } from "../../Shares/Buttons";
import SqFtImage from "/public/img/property-icons/select.png"
import BedImage from "/public/img/property-icons/bed.png"
import RegreshImage from "/public/img/property-icons/refresh.png"

const FeaturedProperty = (props: any) => {

    useEffect(() => {
    }, []);

    return (
        <>
        <div className="py-20">
            <div className="width mx-auto pb-10">
                <div className="text-center w-4/6 mx-auto">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-medium pb-2" style={{color: '#575757'}}>LATEST LISTINGS</h3>
                    <h2 className="theme-color text-lg sm:text-3xl md:text-4xl font-semibold">Featured Listings For Investors</h2>
                </div>
            </div>
            <div className={`${styles.featuredWrapper} relative overflow-hidden`} style={{height: '40rem'}}>
                <Image src={props.data[2].images[0]} layout="fill" className="object-cover" alt={props.data[2].propertyTitle} />
                <div className={`${styles.featuredDetail} absolute bottom-0 top-0 w-full`} style={{background: "linear-gradient(0deg, #000000a6, #000000a6, #ffffff4d, transparent, transparent)"}}>
                    <div className="width mx-auto h-full">
                        <div className="flex flex-wrap justify-between items-end py-16 absolute bottom-0 width">
                            <div>
                                <h3 className="text-white text-2xl font-semibold pb-4">{props.data[2].propertyTitle}</h3>
                                <p className="text-white text-sm pb-2">{props.data[2].location.address}, {props.data[2].location.city} {props.data[2].location.zip}</p>
                                <div className="grid grid-cols-4 text-gray-300 text-xs items-center">
                                    <span className="flex justify-center"><Image src={SqFtImage} width={15} height={15} alt={'area sq.ft'} /> <span className="ml-1">{props.data[2].area} sq.ft</span></span>
                                    <span className="flex justify-center"><Image src={BedImage} width={15} height={15} alt={'area sq.ft'} /> <span className="ml-1">{props.data[2].bedrooms} bed</span></span>
                                    <span className="flex justify-center"><Image src={BedImage} width={15} height={15} alt={'area sq.ft'} /> <span className="ml-1">{props.data[2].bathrooms} bath</span></span>
                                    <span className="flex justify-center"><Image src={RegreshImage} width={15} height={15} alt={'area sq.ft'} /> <span className="ml-1">3 hours left</span></span>
                                </div>
                            </div>
                            <div>
                                <Link href={"/opportunity/" + props.data[2]._id}>
                                    <a className="text-black text-sm bg-white font-semibold py-3 px-8 rounded-full block mt-10">View Detail</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center pt-10">
                <LinkButton href="/opportunities">View all listings</LinkButton>
            </div>
        </div>
        {/* latest listing block starts  */}
        {/* <div className="width mx-auto py-20">
            <div className="gap-10 grid grid-cols-1 lg:grid-cols-2">
                <div className="side flex flex-wrap justify-center items-center">
                    <div>
                        <div className="title-box mb-5">
                            <h3 className="sub-title">LATEST LISTINGS</h3>
                            <h2 className="title">Featured Property<br />
                                For Sale</h2>
                        </div>
                        <div className="text-center">
                            <Link href={'/opportunities'}>
                            <a className="dark-btn">View All Properties</a>
                            </Link>
                        </div>
                    </div>
                </div>
                {
                    props.data.slice(0, 4).map((a: any, index: any) => {
                        return (
                            <div key={index}>
                                <div className={styles.box2}>
                                    <div className={styles.image}>
                                        <div className="relative" style={{height:'300px'}}>
                                            <Image src={a.images[0]} alt={a.propertyTitle} layout="fill" />
                                        </div>
                                    </div>
                                    <div className={styles.boxTitle}>
                                        <Link href={"/opportunity/" + a._id}>
                                            <a>{a.propertyTitle}</a>
                                        </Link>
                                    </div>
                                    <div className={styles.boxLocation}>{a.location.city}</div>
                                    <div className={styles.boxAttr}>
                                        <ul>
                                            <li><span className="mdi mdi-vector-square-plus" /> {a.area} sqft</li>
                                            <li><span className="mdi mdi-bed-king-outline" /> {a.bedrooms} Beds</li>
                                            <li><span className="mdi mdi-bathtub-outline" /> {a.bathrooms} Baths</li>
                                            <li><span className="mdi mdi-cached" /> 4 Days ago</li>
                                        </ul>
                                    </div>
                                    <div className={styles.boxPrice}>AED {a.priceDemand}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div> */}
        {/* latest listing block ends  */}
        </>
    );
};

export default FeaturedProperty;
