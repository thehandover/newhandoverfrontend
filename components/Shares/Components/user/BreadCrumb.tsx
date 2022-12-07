import React from 'react'
import Link from 'next/link'

const BreadCrumb = ({Links=[]}: any) => {

    return (
        <nav className="relative w-full flex flex-wrap items-center justify-between py-2 hover:text-gray-700 rounded" style={{ backgroundColor: '#fbfbfb' }}>
            <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                <nav className="bg-grey-light rounded-md w-full" aria-label="breadcrumb">
                    <ol className="list-reset flex">
                        {
                            Links.map((link: any, index:any) => {
                                return link.href != undefined ? (
                                    <li key={index}>
                                        <Link href={link.href}>
                                            <a className="text-black mr-1">{link.text}</a>
                                        </Link>
                                    </li>
                                )
                                : (
                                    <li key={index}> / <span className="text-gray-500">{link.text}</span></li>
                                )
                            })
                        }
                    </ol>
                </nav>
            </div>
        </nav>
    )
}

export default BreadCrumb