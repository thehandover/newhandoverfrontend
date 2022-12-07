import Link from 'next/link'
import React from 'react'
import styles from "./LandscapeCard.module.css"

const LandscapeCard = ({property}: any) => {
    return (
        <div className={`${styles.propBox} flex flex-wrap bg-white overflow-hidden`}>
            <div className="w-full md:w-2/5 flex justify-center md:block mb-2 md:mb-0">
                <div style={{ background: `url(${property.images[0]})`,backgroundSize: "cover", backgroundPosition: "center" }} className={`${styles.imgSide}`}>
                </div>
            </div>
            <div className={`${styles.content} w-full md:w-3/5`}>
                <Link href={'/opportunity/'+property._id}>
                <a className={`${styles.propTitle}`}>{property.propertyTitle}</a>
                </Link>
                <div className={`${styles.propBids}`}>Top Bid : AED {Number(property.topBid).toFixed()}</div>
                <div className={`${styles.propPrice}`}>{'AED ' + property.priceDemand}</div>
            </div>
        </div>
    )
}

export default LandscapeCard