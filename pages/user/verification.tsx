import React, { useEffect } from 'react'
import ThankYou from "../../public/json/thank-you.json"
import Lottie from "react-lottie"
import Link from 'next/link';
import { Base_URL } from '../../config/constants';
import { useRouter } from 'next/router';

const Verification = ({ verify }: any) => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: ThankYou,
    };

    const router = useRouter()

    useEffect(()=> {
        
        if(verify.data!='updated')
        {
            router.push('/404')
        }
    },[verify, router])
  
    return (
        <div className='width mx-auto py-10'>
        <div className='text-center'>
            <p className='px-2 py-2 rounded-xl text-blue-700 mx-auto'>Your account is verified successfully. Please click <Link href={'/sign-in'}><a className='text-blue-800 font-medium'>here</a></Link> to Sign In your account.</p>
        </div>
            <Lottie 
                options={defaultOptions}
                height={500}
            />
        </div>
    )
}

export default Verification

export async function getServerSideProps(context: any) {

    const res: any = await fetch(`${Base_URL}/api/verify`, {
        method: 'POST',
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({code: context.query.code})
    }).then(response => response.json())
    // Pass data to the page via props
    return {
        props: {
            verify: res
        }
    }
}