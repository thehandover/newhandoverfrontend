import React, { useEffect, useState } from 'react'
import BreadCrumb from '../../components/Shares/Components/user/BreadCrumb'
import MyBiddings from '../../components/Dashboard/Buyer/MyBiddings'
import MyBids from '../../components/Dashboard/Buyer/MyBids'
import { Base_URL } from '../../config/constants'
import Cleave from "cleave.js"

const Biddings = (props: any) => {

    const Links = [
        {
            href: "/buyer",
            text: "Dashboard"
        },
        {
            text: "My Bids"
        }
    ]

    const [currentProperty, setCurrentProperty] = useState<any>();

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

    const [cardNumber, setCardNumber] = useState('')
    const [expiryMonth, setExpiryMonth] = useState('')
    const [expiryYear, setExpiryYear] = useState('')
    const [CVV, setCVV] = useState('')
    const [bidderId, setBidderId] = useState('')
    const [sellerId, setSellerId] = useState('')
    const [amount, setAmount] = useState('')

    const payNow = async (e: any) => {
        e.preventDefault();

        let form_data = {
            cardNumber: cardNumber,
            exp_month: expiryMonth,
            exp_year: expiryYear,
            cvv: CVV,
            bidderId: bidderId,
            sellerId: sellerId,
            propertyId: currentProperty!='' ? currentProperty?.Property[0]?._id : '',
            amount: amount
        }

        const res: any = await fetch(`${Base_URL}/api/buyer/pay`,{
            method:"POST",
            body: JSON.stringify(form_data)
        }).then(response => response.json());

        console.log(res)

        // if(res.error != undefined)
        // {
        //     console.log('error:', res.error)
        //     return false;
        // }
        // let token = res.result.id;
        // console.log('result:', res.result.id)
    }

    useEffect(()=>{
        var cleave = new Cleave('#card_number', {
            creditCard: true,
            onValueChanged: function (e) {
                setCardNumber(e.target.rawValue)
            },
            onCreditCardTypeChanged: function (type: any) {
            }
        });
    })

    return (
        <>
            <BreadCrumb Links={Links} />

            <div className="p-4">
                <div className="my-4 pb-4 flex justify-between items-center">
                    <h3 className="text-2xl theme-color">My Biddings</h3>
                </div>
                <div className="mt-4">
                </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    props.biddings.map((bid: any, index: any) => {
                        return (
                            <MyBids key={index} bid={bid} openPayNow={openPayNow} setBidderId={setBidderId} setSellerId={setSellerId} setAmount={setAmount} />
                        )
                    })
                }
            </div>

            <div className="pay-now-container fixed top-0 bottom-0 left-0 right-0 bg-gray-900 bg-opacity-50 hidden transition-all duration-300 scale-0 overflow-y-auto" style={{zIndex: "1200"}}>
                <div className="flex flex-wrap justify-center items-center py-10 lg:mt-24">
                    <form className="p-4 bg-white rounded shadow-box w-11/12 md:w-5/6 lg:w-3/6" onSubmit={(e)=>payNow(e)}>
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
                                <input className="border border-solid border-white focus:border-blue-700 w-full rounded py-1 px-2" id='card_number' placeholder="Enter 16 digit card number" value={cardNumber} onChange={(e)=>setCardNumber(e.target.value)} />
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 justify-center">
                                <div className="">
                                    <label htmlFor="">Expiry Month</label>
                                    <select className="border border-solid border-white focus:border-blue-700 w-full rounded py-1 px-2" value={expiryMonth} onChange={(e)=>setExpiryMonth(e.target.value)} >
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
                                    <select className="border border-solid border-white focus:border-blue-700 w-full rounded py-1 px-2" value={expiryYear} onChange={(e)=>setExpiryYear(e.target.value)} >
                                        <option value="">Select Year</option>
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
                                    <input className="border border-solid border-white focus:border-blue-700 w-full rounded py-1 px-2" placeholder="Enter cvv code" value={CVV} onChange={(e)=>setCVV(e.target.value)} />
                                </div>
                            </div>
                            <div className="text-right flex flex-wrap">
                                <button className="p-2 px-4 bg-blue-100 text-blue-800 rounded mr-2 mt-2">Pay Now</button>
                                <button className="p-2 px-4 bg-red-100 text-red-800 rounded mt-2" onClick={()=>clear()}>Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* <MyBiddings biddings = {props.biddings} /> */}
        </>
    )
}

export default Biddings

export async function getServerSideProps(context: any) {
    let user = JSON.parse(context.req.cookies.user)
    const res = await fetch(`${process.env.API_URL}/bidding/userbiddings`, {
        headers: {
            "Authorization" : `Bearer ${context.req.cookies.token}`,
            "Content-Type": "application/json"
        }
    }).then(response => response.json())
    return {
        props: {
            user: user,
            biddings: res
        }
    }
}