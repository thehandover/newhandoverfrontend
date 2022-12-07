import React from 'react'
import Link from 'next/link'
import LandscapeCards from '../Shares/Cards/LandscapeCards'
import { LinkButton } from '../Shares/Buttons'

const TopProperties = ({properties}: any) => {
    return (
        <>
        {/* Start Top Properties Section  */}
        <div className="m-auto py-20 width">
            <div className="my-4">
                <div className="title-box">
                    <h2 className="title overflow-hidden">Explore the latest properties listings</h2>
                </div>
            </div>
            <LandscapeCards properties={properties} />
            <div className="text-center overflow-hidden">
                <LinkButton href={'/opportunities'}>
                    Go to Properties
                </LinkButton>
            </div>
        </div>
        {/* End Top Properties Section Here  */}
        </>
    )
}

export default TopProperties