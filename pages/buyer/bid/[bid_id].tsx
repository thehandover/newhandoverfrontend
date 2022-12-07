import { Grid, Typography, Box, TextField } from '@mui/material';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react'
import CustomPaper from '../../../components/Shares/Components/CustomPaper';
import BreadCrumb from '../../../components/Shares/Components/user/BreadCrumb'
import AddItemButton from '../../../components/Shares/Dashboard/Button';
import { Base_URL } from '../../../config/constants';
import { MainContext } from '../../../context/MainContext';

const Bid: NextPage = (props: any) => {
    const {setAlert, setAlertMessage} = useContext(MainContext)
    const [amount, setAmount] = useState(0);
    const [amountErr, setAmountErr] = useState('');
    const [minAmount, setMinAmount] = useState((props.highest.length>0 ? props.highest.bidAmount: 0));

    const router = useRouter()
    const handleSubmit = async (e: any) => {
        e.preventDefault()
        if( amount > minAmount )
        {
            // store new highest bidding amount
            setAmountErr('')
            let res: any = await fetch(`${Base_URL}/api/buyer/bid`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    bidAmount: amount,
                    propertyId: props.bid_id,
                    sellerId: props.user._id,
                })
            }).then(response => response.json())

            setAmount(0)
            setMinAmount(res.data.savedEvent.bidAmount)
            setAlertMessage(res.data.Message)
            setAlert(true)
            router.push('/buyer/biddings')
        }
        else
        {
            setAmountErr(`Biding ammount will be grater than ${minAmount}!`)
        }
	};

    const Links = [
        {
            href: "/buyer",
            text: "Dashboard"
        },
        {
            text: props.bid_id
        }
    ]

    return (
        <>
            <BreadCrumb Links={Links} />
            <CustomPaper>
                <Grid container p={2}>
                    <Grid item component="form" xs={12} onSubmit={(e: any)=>handleSubmit(e)}>
                        <Typography variant="h5" component="h5">Add your bid amount</Typography>
                        <Box className="my-3">
                            <TextField fullWidth label="Amount" variant="filled" value={amount} onChange={(e: any)=>{
                                setAmount(e.target.value)
                                amount <= minAmount ? setAmountErr(`Biding ammount will be grater than ${minAmount}!`) : setAmountErr('')
                                }} />
                            {
                                amountErr!='' && <small className="text-danger" style={{fontSize: '0.8rem'}}>Biding ammount will be grater than {minAmount}!</small>
                            }
                        </Box>
                        <AddItemButton style={{marginRight: '1rem'}}>Add</AddItemButton>
                    </Grid>
                </Grid>
            </CustomPaper>
        </>
    )
}

export default Bid

export async function getServerSideProps(context: any) {
    let user = JSON.parse(context.req.cookies.user)
    let res = await fetch(`${process.env.API_URL}/bidding/highest`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${context.req.cookies.token}`
        },
        body: JSON.stringify({
            propertyId: context.query.bid_id,
        })
    }).then(response => response.json())
    return {
        props: {
            user: user,
            bid_id: context.query.bid_id,
            highest: res.length>0 ? res[0] : []
        }
    }
}