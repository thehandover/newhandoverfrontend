import axios from 'axios'
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req:NextApiRequest, res: NextApiResponse) {
    if(req.method=='POST')
    {
        let result = await axios({
            method: "GET",
            url:`${process.env.API_URL}/bidding/property`, 
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${req.cookies.token}`
            },
            data: {
                propertyId: req.query.id
            }
        }).then(response => {
            return response.data
        }).catch(err => {
            // console.log("error in opportunties filter request", err);
            return res.status(200).json({status: 0, message: err})
        });
        return res.status(200).json({status: 1, data: result})
    }

    return res.status(200).json({status:0,message: 'Api is not valid'})
}

export default handler