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
            method: "DELETE",
            url: `${process.env.API_URL}/property/delete/${JSON.parse(req.body)._id}`,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${req.cookies.token}`
            }
        }).then(response => {
            return response.data
        }).catch(err => {
            console.log("error in opportunties filter request", err.response);
            return res.status(200).json({status: 0, Message: err.response.data.Message})
        });
        return res.status(200).json({status: 1, data: result})
    }
    return res.status(200).json({status: 0, error: "Request is not valid!"})
}