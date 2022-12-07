import Link from 'next/link'
import React from 'react'

const Button = ({children}: any) => {
    return (
        <button className='text-white bg-black py-3 px-10 rounded-full mt-4'>{children}</button>
    )
}

const LinkButton = ({href, children}: any) => {
    return (
        <Link href={href}>
            <a className={`text-white bg-black py-3 px-10 rounded-full mt-4 inline-block`}>{children}</a>
        </Link>
    )
}

const SlimButton = ({href, className="py-2 px-10", children}: any) => {
    return (
        <Link href={href}>
            <a className={`text-white bg-black rounded-full mt-4 inline-block text-sm font-semibold ${className}`}>{children}</a>
        </Link>
    )
}

const WhiteButton = ({href="", children}: any) => {
    return (
        href == "" ? (
            <button className='bg-white text-black border border-solid border-gray-500 py-1 px-4 rounded-full text-sm font-semibold'>{children}</button>
        ) : (
            <Link href={href}>
                <a className='bg-white text-black border border-solid border-gray-500 py-1 px-4 rounded-full inline-block text-sm font-semibold'>{children}</a>
            </Link>
        )
    )
}

export { Button, LinkButton, SlimButton, WhiteButton }