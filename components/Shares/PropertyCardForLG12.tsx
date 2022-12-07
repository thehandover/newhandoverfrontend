import Image from 'next/image'
import React from 'react'

const PropertyCardForLG12 = (props: any) => {
    return (
        <div className="col-lg-12">
            <div
                className="property-box2 property-box4 wow animated fadeInUp"
                data-wow-delay=".6s"
            >
                <div className="item-img">
                    <a href="single-listing1.html">
                        <Image src={props.img} lazyBoundary='' alt="blog" width="250" height="200" />
                    </a>
                    <div className="item-category-box1">
                        <div className="item-category">For Rent</div>
                    </div>
                </div>
                <div className="item-content item-content-property">
                    <div className="item-category10">
                        <a href="single-listing1.html">Appartment</a>
                    </div>
                    <div className="react-icon react-icon-2">
                        <ul>
                            <li>
                                <a
                                    href="favourite.html"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="bottom"
                                    title="Favourites"
                                >
                                    <i className="flaticon-heart"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="compare.html"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="bottom"
                                    title="Compare"
                                >
                                    <i className="flaticon-left-and-right-arrows"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="verified-area">
                        <h3 className="item-title">
                            <a href="single-listing1.html">Family House For Rent</a>
                        </h3>
                    </div>
                    <div className="location-area">
                        <i className="flaticon-maps-and-flags"></i>Downey, California
                    </div>
                    <div className="item-categoery3">
                        <ul>
                            <li>
                                <i className="flaticon-bed"></i>Beds: 03
                            </li>
                            <li>
                                <i className="flaticon-shower"></i>Baths: 02
                            </li>
                            <li>
                                <i className="flaticon-two-overlapping-square"></i>
                                931 Sqft
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyCardForLG12