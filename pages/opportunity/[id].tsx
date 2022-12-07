import type { NextPage } from 'next'
import React from 'react'
import PropertyContent from "../../components/Property"
import Opportunity from "../../components/Opportunities/Opportunity"
import { SlimButton } from '../../components/Shares/Buttons'

const Property: NextPage = ({data}: any) => {
    return (
        <>
            <PropertyContent property={data.property} properties={data.properties} />
            <div className='width mx-auto'>
                <h3 className='text-2xl theme-color font-semibold'>Similar Projects</h3>
                <div className='mt-5 mb-10'>
                    <div className="listing-cont grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {
                            data.properties.slice(0,3).map((property: any, index: any) => {
                                return <Opportunity property={property} key={index} />
                            })
                        }
                    </div>
                    <div className='text-center'>
                        <SlimButton href={'/opportunities'}>Load more</SlimButton>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Property

export async function getServerSideProps(context: any) {
    // Fetch data from external API
    const res = await fetch(`${process.env.API_URL}/property/sort/desc`)
    const properties = await res.json()

    const res2 = await fetch(`${process.env.API_URL}/property/${context.query.id}`)
    const property = await res2.json()
  
    // Pass data to the page via props
    return { 
        props: { 
            data: {
                properties,
                property
            }
        }
    }
}