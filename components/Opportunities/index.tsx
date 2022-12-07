import React from 'react'
import SqFtImage from "/public/img/property-icons/select.png"
import BedImage from "/public/img/property-icons/bed.png"
import RegreshImage from "/public/img/property-icons/refresh.png"
import Opportunity from './Opportunity'

const index = ({ opportunities }: any) => {
    return (
        <div className="listing-cont grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                opportunities?.length > 0 && (
                    opportunities.map((property: any, index: any)=> {
                        return (
                            <Opportunity property={property} key={index} />
                        )
                    })
                )
            }
        </div>
    )
}

export default index