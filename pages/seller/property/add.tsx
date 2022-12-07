import React, { useContext, useEffect, useState } from 'react'
import { parseCookies } from 'nookies'
import axios from 'axios'
import { useRouter } from 'next/router'
import { NextPage } from 'next'
import { MainContext } from '../../../context/MainContext'
import Link from 'next/link'
import Image from 'next/image'
import propertyTypes from "../../../database/property_types.json"
import paymentPlans from "../../../database/payment_plan.json"
import Countries from "../../../database/countries.json"
import States from "../../../database/states.json"
import { sortAsc } from '../../../helpers/functions'
import { Editor } from '@tinymce/tinymce-react';
import { currency_symbol } from '../../../config/constants'
import PropertyForm from '../../../components/Dashboard/Seller/Properties/PropertyForm'

const PropertyAdd: NextPage = ({textEditorApiKey}: any) => {

    return (
        <>
            <nav className="relative w-full flex flex-wrap items-center justify-between py-2 hover:text-gray-700 rounded" style={{ backgroundColor: '#fbfbfb' }}>
                <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                    <nav className="bg-grey-light rounded-md w-full" aria-label="breadcrumb">
                        <ol className="list-reset flex text-sm">
                            <li>
                                <Link href="/seller">
                                    <a className="text-black">Dashboard</a>
                                </Link> /&nbsp;
                            </li>
                            <li>
                                <Link href="/seller/properties"><a className="text-black">Properties</a></Link> /&nbsp;
                            </li>
                            <li><span className="text-gray-500">Add new property</span></li>
                        </ol>
                    </nav>
                </div>
            </nav>
            <div className="p-4">
                <div className="my-4 pb-4 flex justify-between items-center border-b border-solid border-gray-300">
                    <h3 className="text-2xl theme-color">Add new property</h3>
                    <div>
                        <Link href="/seller/properties">
                            <a className="px-4 py-1 bg-black text-white rounded-full transition-all duration-300">Properties list</a>
                        </Link>
                    </div>
                </div>
                <PropertyForm textEditorApiKey={textEditorApiKey} />
            </div>
        </>
    )
}

export default PropertyAdd

export async function getServerSideProps(context: any) {
    let user = JSON.parse(context.req.cookies.user)
    let textEditorApiKey = process.env.TextEditorApiKey
    return {
      props: {
        user: user,
        textEditorApiKey
      },
    }
}