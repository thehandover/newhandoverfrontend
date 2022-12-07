import axios from 'axios'
import type { NextPage } from 'next'
import Link from 'next/link'
import React, {useEffect} from 'react'
import { API_LINK } from '../../config/constants'

const Buyer: NextPage = ({user, counts}: any) => {
    return (
        <>
            <nav className="relative w-full flex flex-wrap items-center justify-between py-2 hover:text-gray-700 rounded" style={{ backgroundColor: '#fbfbfb' }}>
                <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                    <nav className="bg-grey-light rounded-md w-full" aria-label="breadcrumb">
                        <ol className="list-reset flex">
                            <li>
                                <Link href="/buyer">
                                    <a className="text-black">Dashboard</a>
                                </Link>
                            </li>
                        </ol>
                    </nav>
                </div>
            </nav>

            {/* Place your content here */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-4 bg-white shadow-xl p-4 rounded-xl">
                <div className="p-4 rounded-xl flex justify-between items-center bg-red-100 border border-red-500">
                    <div>
                        <p className="text-red-500">Bidding</p>
                        <span className="text-red-600 font-semibold">{counts.biddings}</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="bg-red-500 text-white border border-red-500 p-1 w-8 h-8 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                </div>
                <div className="p-4 rounded-xl flex justify-between items-center bg-blue-100 border border-blue-500">
                    <div>
                        <p className="text-blue-500">Approval</p>
                        <span className="text-blue-600 font-semibold">{counts.properties}</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="bg-blue-500 text-white border border-blue-500 p-1 w-8 h-8 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                </div>
            </div>
        </>
    )
}

export default Buyer

export async function getServerSideProps(context: any) {
    let user = JSON.parse(context.req.cookies.user)

    const counts: any = await axios({
        method: "POST",
        url: `${API_LINK}/property/sellercounts`,
        headers: {
            "Authorization": `Bearer ${context.req.cookies.token}`
        },
        data: {
            propertyId: context.query.id
        }
    })
    .then(response => {
        return response.data
    }).catch(err => {
        console.log("error in opportunties filter request", err.response);
    });

    return {
      props: {
        user: user,
        counts: counts
      }
    }
}