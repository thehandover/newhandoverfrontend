import Image from "next/image";
import Link from "next/link";

const PropertyCard = (props: any) => {
	return (
		<div className="col-lg-6 col-md-6">
			<div className="property-box2 wow animated fadeInUp" data-wow-delay=".3s">
				<div className="item-img">
					<Link href={`/opportunity/${props.data._id}`} >
                        <a>
                            <Image
                                src={props.data.images[0]}
                                alt="blog"
                                width={'510px'}
                                height={'340px'}
                            />
                        </a>
					</Link>
					<div className="item-category-box1">
						<div className="item-category">For Rent</div>
					</div>
					<div className="rent-price">
						<div className="item-price">
							AED {props.data.priceDemand}
							{/* <span>
								<i>/</i>mo
							</span> */}
						</div>
					</div>
					<div className="react-icon">
						<ul>
							<li>
								<a
									// href="favourite.html"
									data-bs-toggle="tooltip"
									data-bs-placement="top"
									title="Favourites"
								>
									<i className="flaticon-heart mx-1"></i>
								</a>
							</li>
							<li>
								<a
									// href="compare.html"
									data-bs-toggle="tooltip"
									data-bs-placement="top"
									title="Compare"
								>
									<i className="flaticon-left-and-right-arrows"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="item-category10">
					<a>
						Appartment
					</a>
				</div>
				<div className="item-content">
					<div className="verified-area">
						<h3 className="item-title">
							<Link href={`/opportunity/${props.data._id}`} >
								<a>{props.data.propertyTitle}</a>
							</Link>
						</h3>
					</div>
					<div className="location-area">
						<i className="flaticon-maps-and-flags"></i>
						{/* Downey, California */}
						{props.data.location.city}
					</div>
					<div className="item-categoery3">
						<ul>
							<li>
								<i className="flaticon-bed"></i>Beds: {props.data.bedrooms}
							</li>
							<li>
								<i className="flaticon-shower"></i>Baths: {props.data.bathrooms}
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
	);
};

export default PropertyCard;