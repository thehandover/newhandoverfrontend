import Cors from 'cors'
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

const cors = Cors({
    methods: ['GET', 'HEAD', 'POST'],
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
        let result = await axios({
            method: "GET",
            url: `${process.env.API_URL}/property/filter/others`,
            headers: {
                "Content-Type": "application/json"
            },
            data: req.body
        }).then(response => {
            return response.data
        }).catch(err => {
            console.log("error in opportunties filter request", err);
        });
        return res.status(200).json({data: result})
    }
    return res.status(200).json({error: "Request is not valid!"})
}