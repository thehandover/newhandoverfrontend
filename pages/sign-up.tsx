import type { NextPage } from 'next';
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Base_URL } from '../config/constants'
import Cookies from "js-cookie"
import Image from 'next/image';
import Logo from "/public/logo.png"
import styles from "/styles/Authentication.module.css"
import TabletLogin from "/public/img/tablet-login.svg"

const SingUp: NextPage = () => {

    const initialUserState = {
		name: "",
		email: "",
		password: "",
		phone: "",
	}
    const [user, setUser] = useState(initialUserState)
    const [userType, setUserType] = useState('Seller');
    const [error, setError] = useState(initialUserState);
	const [email, setEmail] = useState("");
    const [submiting, setSubmiting] = useState(false)

    const handleInputs = (e: any) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};
    const route = useRouter()

    const handleSubmit = async (e: any) => {
        e.preventDefault();
		setSubmiting(true)
		setEmail("");
		const { phone, name, email, password } = user;
		try {
			if(name.length >= 3 && email.length >= 7 && password.length >= 8)
			{
                let data = {
					email: email,
					password: password,
					phone: phone,
					name: name,
					userType: userType,
				}
				const res = await fetch(`${Base_URL}/api/sign-up`,{
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(response => response.json());

                if (res.status == 200)
                {
                    // Cookies.set('user',JSON.stringify(res?.data?.SavedUser))
                    route.push('/sign-in')
                }
                else if(res.status == 0)
                {
                    setError({...error, email: res.message});
                }
			}
			else
			{
				let errorList: any = {}
				if(name.length == 0)
				{
					errorList.name = 'Name is required!'
				}
				else if(name.length < 3)
				{
					errorList.name = 'Name is not valid!'
				}
				errorList.email = email.length == 0 ? 'Email is required!' : email.length < 7 ? 'Email is not valid!' : ''
				errorList.password = password.length == 0 ? 'Password is required!' : password.length < 8 ? 'Password is not valid!' : ''
				setError(errorList)
			}

		} catch (error: any) {
			if (error?.response?.data?.message === "Email Already Taken.") {
				setEmail("Email Already Taken");
			}
		}
		setSubmiting(false)
    }

    const activeSeller = () => {
        document.querySelector('.type-changer')?.classList.add(styles.start);
    }

    const activeBuyer = () => {
        document.querySelector('.type-changer')?.classList.remove(styles.start);
    }

    return (
        <>
        <div className="flex items-center justify-center py-10" style={{ minHeight: 'calc(100vh - 72px)' }}>
            <div className={`${styles.AuthenticationContainer} width mx-auto rounded-lg overflow-hidden`}>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div style={{ background: 'linear-gradient(45deg, #f1f1f1, #f1f1f1)', backgroundPosition: 'center' }} className="hidden lg:block">
                        <div className="flex flex-wrap justify-center items-center h-full">
                            <Image src={TabletLogin} alt="Login-Left_Image" />
                        </div>
                    </div>
                    <div className="p-2 bg-white">
                        <div className="flex flex-col items-center justify-center text-center pt-10">
                            <div style={{width:"250px"}}>
                                <Image src={Logo} alt="site-logo" className="pb-5" />
                            </div>
                            <h3 className="text-2xl font-medium text-blue-900">Register</h3>
                        </div>
                        <div className="md:mx-16 mx-1 py-5">
                            <form onSubmit={(e: any)=>handleSubmit(e)}>
                                <div className="pb-5">
                                    <label htmlFor="name" className="w-full text-gray-600">Name</label>
                                    <input type="text" className="border border-gray-500 p-2 px-4 rounded-3xl text-sm w-full" name="name" id="name" placeholder="Enter name" value={user.name} onChange={(e)=>handleInputs(e)} required />
                                    {
                                        error.name!='' ? <div className="bg-red-100 mt-2 px-2 rounded-3xl text-red-500 w-full capitalize" style={{ fontSize: '11px' }}>{error.name}</div> : ""
                                    }
                                </div>
                                <div className="pb-5">
                                    <label htmlFor="email" className="w-full text-gray-600">Email</label>
                                    <input type="email" className="border border-gray-500 p-2 px-4 rounded-3xl text-sm w-full" name="email" id="email" placeholder="Enter email address" value={user.email} onChange={(e)=>handleInputs(e)} required />
                                    {
                                        error.email!='' ? <div className="bg-red-100 mt-2 px-2 rounded-3xl text-red-500 w-full capitalize" style={{ fontSize: '11px' }}>{error.email}</div> : ""
                                    }
                                </div>
                                <div className="pb-5">
                                    <label htmlFor="password" className="w-full text-gray-600">Password</label>
                                    <input type="password" className="border border-gray-500 p-2 px-4 rounded-3xl text-sm w-full" name="password" id="password" placeholder="Enter password" value={user.password} onChange={(e)=>handleInputs(e)} required />
                                    {
                                        error.password!='' ? <div className="bg-red-100 mt-2 px-2 rounded-3xl text-red-500 w-full capitalize" style={{ fontSize: '11px' }}>{error.password}</div> : ""
                                    }
                                </div>
                                <div className="pb-5">
                                    <label htmlFor="phone" className="w-full text-gray-600">Phone # <span className="text-sm text-gray-500">(optional)</span></label>
                                    <input type="text" className="border border-gray-500 p-2 px-4 rounded-3xl text-sm w-full" name="phone" id="phone" placeholder="Enter phone #" value={user.phone} onChange={(e)=>handleInputs(e)} required />
                                </div>
                                <div className="">
                                    Sign up as:
                                    <div className="pb-2 flex items-center justify-center">
                                        <div className={`${styles.typeChanger} ${styles.start} type-changer start border border-black border-solid overflow-hidden relative rounded-full text-white`} style={{ width: 'max-content' }}>
                                            <label htmlFor="Seller" className="py-1 px-3 inline-block rounded-full cursor-pointer text-black" onClick={()=>activeSeller()}>
                                                Developer
                                                <input type="radio" name="type" id="Seller" defaultValue="Seller" className="hidden" onChange={(e) => setUserType(e.target.value)} />
                                            </label>
                                            <label htmlFor="Buyer" className="py-1 px-3 inline-block cursor-pointer text-black" onClick={()=>activeBuyer()}>
                                                Investor
                                                <input type="radio" name="type" id="Buyer" defaultValue="Buyer" className="hidden" onChange={(e) => setUserType(e.target.value)} />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className='pt-5'>
                                    <button type={`${submiting==true ? 'button' : 'submit'}`} className={`${submiting==true ? 'bg-gray-500 text-black' : 'bg-gray-900 text-white'} w-full rounded-3xl p-2 flex flex-wrap justify-center transition-all duration-300`}>Sign up {
                                            submiting==true && (
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 128 128" xmlSpace="preserve" style={{marginLeft: '1rem'}}><g><path d="M64 9.75A54.25 54.25 0 0 0 9.75 64H0a64 64 0 0 1 128 0h-9.75A54.25 54.25 0 0 0 64 9.75z" fill="#252153" /><animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="1200ms" repeatCount="indefinite" /></g></svg>
                                            )
                                        }
                                    </button>
                                </div>
                            </form>
                            <div className="w-full mt-5 text-center">
                                <p>Already have an account? <Link href={'/sign-in'}>
                                        <a className="cursor-pointer text-blue-900">Sign in</a>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default SingUp