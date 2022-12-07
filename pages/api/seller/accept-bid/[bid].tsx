import axios from 'axios'
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req:NextApiRequest, res: NextApiResponse) {
    if(req.method=='POST')
    {
        let result = await axios({
            method: "POST",
            url:`${process.env.API_URL}/bidding/acceptbid/${req.query.bid}`, 
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${req.cookies.token}`
            },
            data: {}
        }).then(response => {
            return response.data
        }).catch(err => {
            return res.status(200).json({status: 0, message: err})
        });
        return res.status(200).json({status: 1, data: result})
    }

    return res.status(200).json({status:0,message: 'Api is not valid'})
}

export default handler