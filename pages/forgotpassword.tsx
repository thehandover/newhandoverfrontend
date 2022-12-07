import React, { useState } from 'react'
import type { NextPage } from 'next';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import bgImage from "../public/assets/img/sign-in/bg.jpg";
import { useRouter } from 'next/router';
import { Base_URL } from '../config/constants';
import { styled } from '@mui/system';
import NextLink from 'next/link';
import Image from 'next/image';
import Logo from "../public/logo.png"

const LoginGrid = styled(Grid)(() => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center !important',
}))

const LoginForm = styled(Grid)(() => ({
    maxWidth: '400px !important',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0px 5px 10px 0px #0b544359'
}))

const LoginButton = styled(Button)(() => ({
    background: 'linear-gradient(45deg, #00c194 30%, rgb(35 179 145), #00c194 90%)',
    border: 0,
    borderRadius: 100,
    color: 'white',
}))

const ForgetPassword: NextPage = ({code}: any) => {

    const theme = createTheme({
        palette: {
            primary: {
                main: '#00c194'
            },
        },               
    });

    const initialState = {
		email: "",
		password: "",
	}

    const [user, setUser] = useState(initialState)
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
	const [submiting, setSubmiting] = useState(false)

    const handleInputs = (e: any) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

    const router = useRouter()

    const handleSubmitForget = async (e: any) => {
        e.preventDefault()
        setSubmiting(true)
        try {
            if(password == confirmPassword)
            {
                const res = await fetch(`${Base_URL}/api/authenticate/reset-password`, {
                    method: "POST",
                    body: JSON.stringify({
                        code: code,
                        password: password
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(response => response.json());
                console.log(res)
                if(res.data == 'no data found')
                {
                    setError('Credentials are not valid!')
                }
                else
                {
                    setError('')
                    router.push('/sign-in')
                }
            }
            else
            {
                setError('New password and confirm password must matched!')
            }
        } catch (error: any) {
            console.log('error', error)
        }
        setSubmiting(false)
    }

    return (
        <div className="">
            <div className="flex flex-wrap justify-center items-center py-20">
                <div className="shadow-lg rounded-lg" style={{minWidth: "400px"}}>
                    <div className='p-4' >
                        <div className="text-center">
                            <Image src={Logo} width={'200px'} height={'23px'} alt='The Handover' />
                        </div>
                        <h3 className="mt-4 mb-2 text-lg text-center theme-color">{'Reset Password'}</h3>
                        <form onSubmit={(e: any)=>handleSubmitForget(e)}>
                            {
                                error ? <div className="bg-red-100 text-red-500 px-2 text-sm rounded-lg mb-2">{error}</div> : ""
                            }
                            <div className="mb-2">
                                <input type="password" className="border border-gray-500 p-2 px-4 rounded-3xl text-sm w-full" name="new-password" id="new-password" placeholder="New password" value={password} onChange={(e)=>setPassword(e.target.value)} autoComplete="new-password" required />
                            </div>
                            <div className="mb-2">
                                <input type="password" className="border border-gray-500 p-2 px-4 rounded-3xl text-sm w-full" name="confirm-new-password" id="confirm-new-password" placeholder="Confirm new password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} autoComplete="confirm-new-password" required />
                            </div>
                            <div>
                                <button type="submit" className={`flex justify-center w-full rounded-full py-2 ${submiting==true ? 'bg-gray-500 text-black' : 'bg-gray-900 text-white'}`}>Reset password {
                                    submiting==true && (
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 128 128" xmlSpace="preserve" style={{marginLeft: '1rem'}}><g><path d="M64 9.75A54.25 54.25 0 0 0 9.75 64H0a64 64 0 0 1 128 0h-9.75A54.25 54.25 0 0 0 64 9.75z" fill="currentColor" /><animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="1200ms" repeatCount="indefinite" /></g></svg>
                                    )
                                }
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword

export async function getServerSideProps(context: any) {
    let code = context.query.code != undefined ? context.query.code : ""
    return {
        props: {
            code: code
        }
    }
}