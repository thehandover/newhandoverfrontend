import { NextPage } from 'next'
import React from 'react'
import { API_LINK } from '../../config/constants'
import DashboardProfile from '../../components/Dashboard/Profile'

const BuyerProfile: NextPage = (props: any) => {
    
    return (
        <DashboardProfile user={props.user} />
    )
}

export default BuyerProfile

export async function getServerSideProps(context: any) {
    // Fetch data from external API
    const res: any = await fetch(`${API_LINK}/user`, {
        method: 'GET',
        headers: {
            "Content-Type" : "application/json",
            "Authorization": `Bearer ${context.req.cookies.token}`
        }
    }).then(response => response.json())

    // Pass data to the page via props
    return {
        props: {
            user: res
        }
    }
}