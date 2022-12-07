import axios from 'axios'
import { NextApiRequest, NextApiResponse } from "next";
import Cors from 'cors'

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
        let url = `${process.env.API_URL}/signin`
        let result = await axios({
            method: "POST",
            url:url,
            data: req.body
        }).then(response => {
            return response.data
        }).catch(err => {
            return res.status(200).json({status: 0, message: err.response.data.message})
        });
        return res.status(200).json({status: 1, data: result})
    }

    return res.status(200).json({status:0,message: 'Api is not valid'})
}

export default handler