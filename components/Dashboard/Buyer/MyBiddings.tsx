import React, { useState } from 'react'
import Link from 'next/link'
import { makeStyles } from '@mui/styles'
import image from "../../../public/assets/img/bg-home.jpg"
import Image from "next/image"
import { Box, Grid, Button } from '@mui/material'
import { Base_URL } from '../../../config/constants'

const useStyles = makeStyles({
    card: {
        background: '#fff',
        boxShadow: '0px 0px 10px 0px #ddd',
        borderRadius: '10px',
        margin: "1rem",
        "& p": {
            marginBottom: "0.5rem",
            wordBreak: "break-all"
        },
        "& h4": {
            margin: "1rem 0px"
        },
        "& a": {
            display: 'block',
            marginBottom: '1rem',
            background: 'linear-gradient(125deg, #e8f9f5, #e8f9f5)',
            width: 'fit-content',
            padding: '0.5rem 1rem',
            transition: "all 0.3s ease-in-out"
        },
        "& a:hover": {
            boxShadow: "1px 6px 10px 0px #dddddda1",
            transform: "translateY(-2px)"
        }
    },
    cardImage : {
        overflow: 'hidden',
        borderRadius: '15px',
        height: "fit-content"
    }
})

const MyBiddings = (props: any) => {

    const style = useStyles()

    const [currentProperty, setCurrentProperty] = useState<any>();
    const [cardNumber, setCardNumber] = useState('')
    const [expiryMonth, setExpiryMonth] = useState('')
    const [CVV, setCVV] = useState('')

    const openPayNow = async (bid: any) => {
        await setCurrentProperty(bid)

        document.querySelector('.pay-now-container')?.classList.remove('hidden')
        setTimeout(() => {
            document.querySelector('.pay-now-container')?.classList.remove('scale-0')
        }, 300);
    }

    const clear = async () => {
        document.querySelector('.pay-now-container')?.classList.add('scale-0')
        setTimeout(() => {
            document.querySelector('.pay-now-container')?.classList.remove('hidden')
        }, 300);
        await setCurrentProperty('')
    }

    const payNow = async (e: any) => {
        e.preventDefault();

        const res: any = await fetch(`${Base_URL}/api/buyer/pay/create-token`,{
            method:"POST"
        }).then(response => response.json());

        if(res.error != undefined)
        {
            console.log('error:', res.error)
            return false;
        }
        let token = res.result.id;
        console.log('result:', res.result.id)
    }

    return (
        <Grid container>
            {
                props.biddings.map((bid: any, index: any) => {
                    if(bid.Property.length > 0)
                    {
                        return (
                            <Grid item p={2} sm={12} md={6} key={index} className="w-full">
                                <Box className={`${style.card} items-center`} sx={{display: {lg: "flex",md:"block"}}}>
                                    <Box className={`${style.cardImage}`} sx={{
                                        width: {md: '100%', lg: '400px'},
                                        transform: {md: 'translateY(-30px)',lg:'translateX(-30px)'},
                                        }}>
                                        <Image src={bid.Property[0]?.images[0]} layout="responsive" className="object-cover" width={image.width} height={image.height} alt={bid.Property[0]?.propertyTitle} />
                                    </Box>
                                    <div style={{width: "100%", padding: "1rem"}}>
                                        <h4>{bid.Property[0]?.propertyTitle}</h4>
                                        <p>{bid.Property[0].description}</p>
                                        <p>Amount: <span className="bg-blue-100 text-blue-500 text-sm px-2 rounded">{Intl.NumberFormat('en-US').format(bid.Property[0].priceDemand)}</span></p>
                                        <p>Bid Amount: <span className="bg-blue-100 text-blue-500 text-sm px-2 rounded">{Intl.NumberFormat('en-US').format(bid.bidAmount)}</span></p>
                                        <span>Status: {bid.Property[0].winner == false ? <span className="text-green-500 bg-green-100 text-sm px-2 rounded">Winner</span> : <span className="text-red-500 bg-red-100 text-sm px-2 rounded">No approved</span> }</span>
                                        <div className="flex flex-wrap justify-between items-center">
                                            <Link href={`/opportunity/${bid.Property[0]._id}`}>
                                                <a className="mt-3 text-sm rounded-full">Read more</a>
                                            </Link>
                                            {
                                                bid.winner == false ? (
                                                    <button type='button' className="bg-blue-800 text-white rounded-full py-2 px-4 text-sm" style={{height:"max-content"}} onClick={()=>openPayNow(bid)}>
                                                        Pay Now
                                                    </button>
                                                ) : ''
                                            }
                                        </div>
                                    </div>
                                </Box>
                            </Grid>
                        )
                    }
                })
            }
            <div className="pay-now-container fixed top-0 bottom-0 left-0 right-0 bg-gray-900 bg-opacity-50 hidden transition-all duration-300 scale-0" style={{zIndex: "1200"}}>
                <div className="flex flex-wrap justify-center items-center mt-24">
                    <form className="p-4 bg-white rounded shadow-box w-3/6" onSubmit={(e)=>payNow(e)}>
                        <div className="p-2 text-xl text-center font-medium">Payment</div>
                        <div className="font-medium">Property Details</div>
                        <div className="mb-5 text-sm bg-gray-50 p-2 rounded">
                            <div>Title: <span className="text-gray-500">{currentProperty!='' ? currentProperty?.Property[0].propertyTitle : ''}</span></div>
                            <div>Amount: <span className="text-blue-700">{currentProperty?.bidAmount}</span></div>
                        </div>
                        <div className="text-blue-500 inline-block mb-1">Please provide card details for amount <span className="py-1 px-2 rounded inline-block bg-blue-100 text-blue-700 text-xs font-medium">{currentProperty?.bidAmount}</span></div>
                        <div className="mb-5 bg-gray-50 p-2 rounded">
                            <div className="mb-5">
                                <label htmlFor="">Card Number</label>
                                <input className="border border-solid border-white focus:border-blue-700 w-full rounded py-1 px-2" placeholder="Enter 16 digit card number" />
                            </div>
                            <div className="grid grid-cols-3 gap-4 justify-center">
                                <div className="">
                                    <label htmlFor="">Expiry Month</label>
                                    <select className="border border-solid border-white focus:border-blue-700 w-full rounded py-1 px-2" >
                                        <option value="0">Select Month</option>
                                        <option value="1">January</option>
                                        <option value="2">Feburary</option>
                                        <option value="3">March</option>
                                        <option value="4">April</option>
                                        <option value="5">May</option>
                                        <option value="6">Jun</option>
                                        <option value="7">July</option>
                                        <option value="8">August</option>
                                        <option value="9">September</option>
                                        <option value="10">October</option>
                                        <option value="11">November</option>
                                        <option value="12">December</option>
                                    </select>
                                </div>
                                <div className="">
                                    <label htmlFor="">Year</label>
                                    <select className="border border-solid border-white focus:border-blue-700 w-full rounded py-1 px-2" >
                                        <option value="0">Select Year</option>
                                        <option value="2022">2022</option>
                                        <option value="2023">2023</option>
                                        <option value="2024">2024</option>
                                        <option value="2025">2025</option>
                                        <option value="2026">2026</option>
                                        <option value="2027">2027</option>
                                        <option value="2028">2028</option>
                                    </select>
                                </div>
                                <div className="">
                                    <label htmlFor="">CVV</label>
                                    <input className="border border-solid border-white focus:border-blue-700 w-full rounded py-1 px-2" placeholder="Enter cvv code" />
                                </div>
                            </div>
                            <div className="text-right">
                                <button className="p-2 px-4 bg-red-100 text-red-800 rounded mt-2 mr-2" onClick={()=>clear()}>Cancel</button>
                                <button className="p-2 px-4 bg-blue-100 text-blue-800 rounded mt-2">Pay Now</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Grid>
    )
}

export default MyBiddings