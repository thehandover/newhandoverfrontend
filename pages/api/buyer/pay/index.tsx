import axios from 'axios'
import { NextApiRequest, NextApiResponse } from "next";
import Cors from 'cors'
import { Stripe_Keys } from '../../../../config/constants';

const cors = Cors({
    methods: ['POST'],
})

function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: any) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result: any) => {
            if (result instanceof Error) {
                return reject(result)
            }

            return resolve(result)
        })
    })
}

async function handler(req:NextApiRequest, res: NextApiResponse) {
    await runMiddleware(req, res, cors)
    if(req.method=='POST')
    {
        let keys = Stripe_Keys[process.env.NODE_ENV];
        const stripe = require('stripe')(keys.Secret_Key)
        let body = JSON.parse(req.body)
        try {
            let token_result = await stripe.tokens.create({
                card: {
                    number: body.cardNumber,
                    exp_month: body.exp_month,
                    exp_year: body.exp_year,
                    cvc: body.cvv,
                },
            });
            let token_id = token_result.id

            console.log('token', token_id);
            let result: any = await axios({
                method: "POST",
                url: `${process.env.API_URL}/payment/paytest`,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${req.cookies.token}`
                },
                data: {
                    "bidderId": body.bidderId,
                    "sellerId": body.sellerId,
                    "propertyId": body.propertyId,
                    "amount": body.amount,
                    "token": token_id
                }
            }).then(response => {
                console.log(response)
                return response
            }).catch(err => {
                console.log("error in opportunties filter request", err.response);
            });

            return res.status(200).json({result});
        }
        catch(e:any) {
            return res.status(200).json({error: e.raw.message});
        }
        
    }

    return res.status(200).json({status:0,message: 'Api is not valid'})
}

export default handler