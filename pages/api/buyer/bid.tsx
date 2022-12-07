import Cors from 'cors'
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

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

export default async function handler(req:NextApiRequest, res: NextApiResponse) {

    await runMiddleware(req, res, cors)
    if(req.method=="POST")
    {
        let result: any = await axios({
            method: "POST",
            url: `${process.env.API_URL}/bidding/bid`,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${req.cookies.token}`
            },
            data: req.body
        }).then(response => {
            return response
        }).catch(err => {
            console.log("error in opportunties filter request", err.response);
        });
        return res.status(200).json({data: result.data})
    }
    return res.status(200).json({error: "Request is not valid!"})
}