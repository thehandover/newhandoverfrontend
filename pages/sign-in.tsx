import React, { useState } from 'react'
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Base_URL } from '../config/constants';
import cookie from 'js-cookie'
import Image from 'next/image';
import Logo from "../public/logo.png"
import styles from "/styles/Authentication.module.css"
import Link from 'next/link';
import TabletLogin from "/public/img/tablet-login.svg"

const SignIn: NextPage = ({redirect_to}: any) => {

    const initialState = {
		email: "",
		password: "",
	}

    const [user, setUser] = useState(initialState)
    const [emailError, setEmailError] = useState("")
    const [forgetPassword, setForgetPassword] = useState(false)
    const [forgetEmail, setForgetEmail] = useState('')
	const [submiting, setSubmiting] = useState(false)
    const [userType, setUserType] = useState('Seller')
    const [viewPassword, setViewPassword] = useState(false)

    const handleInputs = (e: any) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

    const router = useRouter()

    const handleSubmit = async (e: any) => {
		e.preventDefault()
		setSubmiting(true)

		setEmailError("")
		const { email, password } = user;
		if (email === "admin@gmail.com") {
			try {
				const res = await axios.post("/signin/admin", {
					email: email,
					password: password,
				});
				if (res.status === 200) {
					localStorage.setItem("adminAuth", email);
					localStorage.setItem("token", JSON.stringify(res.data.token));
					router.push('/admin/allProperties')
				}
			} catch (error) {}
		} else {
			try {
				const res = await fetch(`${Base_URL}/api/sign-in`, {
                    method: "POST",
                    body: JSON.stringify({
                        email: email,
                        password: password
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
				}).then(response => response.json());
                
                if (res.status === 1 && userType == res.data.payload.userType) {
                    
                    cookie.set('token',res.data.token)
                    cookie.set('user',JSON.stringify(res.data.payload))
                    if(redirect_to)
                    {
                        router.push(redirect_to)
                    }
                    else
                    {
                        if(res.data.payload.userType=='Seller')
                        {
                            router.push('/seller');
                        }
                        else
                        {
                            router.push('/buyer');
                        }
                    }
				}
                else
                {
                    setEmailError("Your credentials are invalid!");
                }
			} catch (error: any) {
                setEmailError("Your credentials are invalid!");
			}
		}
		setSubmiting(false)
	}

    const handleSubmitForget = async (e: any) => {
        e.preventDefault()
        setSubmiting(true)
        try {
            const res = await fetch(`${Base_URL}/api/authenticate/forget-password`, {
                method: "POST",
                body: JSON.stringify({
                    email: forgetEmail
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(response => response.json());
            if(res.status==1)
            {
                setForgetEmail('')
                setForgetPassword(false)
            }
        } catch (error: any) {
            console.log('error', error)
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
            <div className="flex items-center justify-center" style={{ minHeight: 'calc(100vh - 72px)' }}>
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
                                <h3 className="text-2xl font-medium text-blue-900">Login</h3>
                            </div>
                            <div className="md:mx-16 mx-1 py-5">
                                {
                                    forgetPassword == true ? (
                                        <form onSubmit={(e: any)=>handleSubmitForget(e)}>
                                            <div className="pb-5">
                                                <label htmlFor="" className="w-full">Email</label>
                                                <input type="email" className="border border-gray-600 p-2 px-4 rounded-3xl text-sm w-full" name="email" id="email" placeholder="Email address" value={forgetEmail} onChange={(e)=>setForgetEmail(e.target.value)} required />
                                            </div>
                                            <div>
                                                <button type={`${submiting==true ? 'button' : 'submit'}`} className={`${submiting==true ? 'bg-blue-100 text-blue-700' : 'bg-blue-700 text-white'} w-full rounded-3xl p-2 flex flex-wrap justify-center transition-all duration-300`}>Send email {
                                                        submiting==true && (
                                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 128 128" xmlSpace="preserve" style={{marginLeft: '1rem'}}><g><path d="M64 9.75A54.25 54.25 0 0 0 9.75 64H0a64 64 0 0 1 128 0h-9.75A54.25 54.25 0 0 0 64 9.75z" fill="#252153" /><animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="1200ms" repeatCount="indefinite" /></g></svg>
                                                        )
                                                    }
                                                </button>
                                            </div>
                                        </form>
                                    ) : (
                                        <form onSubmit={(e: any)=>handleSubmit(e)}>
                                            
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

                                            {emailError ? <div className="bg-red-100 mt-2 px-2 py-1 mb-2 rounded-3xl text-red-500 w-full capitalize font-medium" style={{ fontSize: '11px' }}>{emailError}</div> : ""}
                                            
                                            <div className="pb-5">
                                                <label htmlFor="" className="w-full text-gray-600">Email</label>
                                                <input type="email" className="border border-gray-500 p-2 px-4 rounded-3xl text-sm w-full" name="email" id="email" placeholder="Email address" value={user.email} onChange={(e)=>handleInputs(e)} autoComplete="username" required />
                                            </div>

                                            <div className="pb-5">
                                                <label htmlFor="" className="w-full text-gray-600">Password</label>
                                                <div className="overflow-hidden relative border border-gray-500 rounded-3xl">
                                                    <input type={`${viewPassword==true ? 'text' : 'password'}`} className="p-2 px-4 text-sm w-full" name="password" id="password" placeholder="Password" value={user.password} onChange={(e)=>handleInputs(e)} autoComplete="current-password" required />
                                                    <div className="absolute top-0 right-0 p-2 bg-gray-100 text-gray-800">
                                                        {
                                                            viewPassword == true ? (
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer" viewBox="0 0 20 20" fill="currentColor" onClick={()=>setViewPassword(false)}>
                                                                    <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                                                                    <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                                                                </svg>
                                                            ) : (
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer" viewBox="0 0 20 20" fill="currentColor" onClick={()=>setViewPassword(true)}>
                                                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                                                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                                                </svg>
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="text-left pb-5">
                                                <a onClick={()=>setForgetPassword(true)} className="cursor-pointer text-sm text-gray-600">Forget password</a>
                                            </div>

                                            <div>
                                                <button type={`${submiting==true ? 'button' : 'submit'}`} className={`${submiting==true ? 'bg-gray-500 text-black' : 'bg-gray-900 text-white'} w-full rounded-3xl p-2 flex flex-wrap justify-center transition-all duration-300`}>Sign In {
                                                        submiting==true && (
                                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 128 128" xmlSpace="preserve" style={{marginLeft: '1rem'}}><g><path d="M64 9.75A54.25 54.25 0 0 0 9.75 64H0a64 64 0 0 1 128 0h-9.75A54.25 54.25 0 0 0 64 9.75z" fill="#252153" /><animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="1200ms" repeatCount="indefinite" /></g></svg>
                                                        )
                                                    }
                                                </button>
                                            </div>
                                        </form>
                                    )
                                }
                                <div className="w-full mt-5 text-center">
                                    <p>If you don&apos;t have any account? <Link href={'/sign-up'}>
                                            <a className="cursor-pointer text-blue-900">Sign up</a>
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

export default SignIn

export async function getServerSideProps(context: any) {
    let link = context.query.redirect_to != undefined ? context.query.redirect_to : ""
    return {
        props: {
            redirect_to: link
        }
    }
}