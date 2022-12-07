import React, { useState } from 'react'
import Cookies from "js-cookie"
import BreadCrumb from '../../components/Shares/Components/user/BreadCrumb'
import { Base_URL } from '../../config/constants'
import Alert from '../../components/Shares/Components/Alert'

const DashboardProfile = ({user}: any) => {

    const [alert, setAlert] = useState(false)
    const [message, setMessage] = useState('')

    const [editable, setEditable] = useState(false)
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [phone, setPhone] = useState(user.phone)

    const [isChangePass, setIsChangePass] = useState(false)
    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')

    const Cancel = async () => {
        await setName(user.name)
        await setEmail(user.email)
        await setPhone(user.phone)
        await setEditable(false)
    }

    const submitProfile = async (e: any) => {
        e.preventDefault()
        let user: any = Cookies.get('user')
        user = user!=undefined ? JSON.parse(user) : null
        let res = await fetch(`${Base_URL}/api/user/profile`, {
            method: "POST",
            body: JSON.stringify({
                name: name,
                email: email,
                phone: phone
            })
        }).then(response => response.json())
        
        await setMessage('Profile updated successfully')
        setAlert(true)

        user.name = name;
        user.phone = phone
        user.email = email
        Cookies.set('user',JSON.stringify(user))
        setName(name)
        setEmail(email)
        setPhone(phone)
        await setEditable(false)
    }

    const submitChangePassword = async (e: any) => {
        e.preventDefault()
        if(confirmNewPassword === newPassword)
        {
            let res = await fetch(`${Base_URL}/api/user/change-password`, {
                method: "POST",
                body: JSON.stringify({
                    newpassword: confirmNewPassword,
                    currpassword: currentPassword,
                })
            }).then(response => response.json())
            
            await setMessage(res.data.message)
            setAlert(true)
            if(res.data.status!=0)
            {
                cancelChangePassword()
            }
        }
        else
        {
            await setMessage('Confirm password and new password must be matched.')
            setAlert(true)
        }
    }

    const cancelChangePassword = async () => {
        setCurrentPassword('')
        setNewPassword('')
        setConfirmNewPassword('')
        await setIsChangePass(false)
    }

    const Links = [
        {
            href: user.userType=='Buyer' ? '/buyer' : '/seller',
            text: "Dashboard"
        },
        {
            text: "Profile"
        }
    ]

    return (
        <>
            <BreadCrumb Links={Links} />
            <div className="w-full grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-10 gap-5 mt-4 p-4 rounded-xl">
                <div className="p-4 rounded-xl bg-white shadow-xl col-span-8">
                    {
                    isChangePass == false ? (
                        <form onSubmit={(e: any)=>submitProfile(e)}>
                            <div className="grid grid-cols-12 items-center pb-5">
                                <label htmlFor="name" className="text-gray-600 mr-3">Name</label>
                                {
                                    editable == true ? (
                                        <input type="text" className="border border-gray-600 p-2 px-4 rounded-3xl text-sm col-span-6" name="name" id="name" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
                                    ) : (
                                        <p id='name' className="col-span-6">{name}</p>
                                    )
                                }
                            </div>
                            <div className="grid grid-cols-12 items-center pb-5">
                                <label htmlFor="email" className="text-gray-600 mr-3">Email</label>
                                {
                                    editable == true ? (
                                        <input type="email" className="border border-gray-600 p-2 px-4 rounded-3xl text-sm col-span-6" name="email" id="email" placeholder="Email address" value={email} onChange={(e)=>setEmail(e.target.value)} />
                                    ) : (
                                        <p id='name' className="col-span-6">{email}</p>
                                    )
                                }
                            </div>
                            <div className="grid grid-cols-12 items-center pb-5">
                                <label htmlFor="phone" className="text-gray-600 mr-3">Phone</label>
                                {
                                    editable == true ? (
                                        <input type="phone" className="border border-gray-600 p-2 px-4 rounded-3xl text-sm col-span-6" name="phone" id="phone" placeholder="Phone #" value={phone} onChange={(e)=>setPhone(e.target.value)} />
                                    ) : (
                                        <p id='name' className="col-span-6">{phone}</p>
                                    )
                                }
                            </div>
                            {
                                editable == true && (
                                    <div>
                                        <button className="bg-black border border-black rounded-3xl text-white px-4 py-1 mr-3">Update</button>
                                        <button type="button" className="bg-red-100 text-red-500 border border-red-500 rounded-3xl px-4 py-1" onClick={()=>Cancel()}>Cancel</button>
                                    </div>
                                )
                            }
                        </form>
                    ) : (
                        <form action="" onSubmit={(e) => submitChangePassword(e)}>
                            <div className="grid grid-cols-12 items-center pb-5">
                                <label htmlFor="current-password" className="text-gray-600 mr-3 col-span-3">Current password</label>
                                <input type="password" className="border border-gray-600 p-2 px-4 rounded-3xl text-sm col-span-6" name="current-password" id="current-password" placeholder="Current password" value={currentPassword} onChange={(e)=>setCurrentPassword(e.target.value)} required />
                            </div>
                            <div className="grid grid-cols-12 items-center pb-5">
                                <label htmlFor="new-password" className="text-gray-600 mr-3 col-span-3">New password</label>
                                <input type="password" className="border border-gray-600 p-2 px-4 rounded-3xl text-sm col-span-6" name="new-password" id="new-password" placeholder="New password" value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} required />
                            </div>
                            <div className="grid grid-cols-12 items-center pb-5">
                                <label htmlFor="confirm-new-password" className="text-gray-600 mr-3 col-span-3">Confirm new password</label>
                                <input type="password" className="border border-gray-600 p-2 px-4 rounded-3xl text-sm col-span-6" name="confirm-new-password" id="confirm-new-password" placeholder="Confirm new password" value={confirmNewPassword} onChange={(e)=>setConfirmNewPassword(e.target.value)} required />
                            </div>
                            <div>
                                <button className="bg-black border border-black rounded-3xl text-white px-4 py-1 mr-3">Change</button>
                                <button type="button" className="bg-red-100 text-red-500 border border-red-500 rounded-3xl px-4 py-1" onClick={()=>cancelChangePassword()}>Cancel</button>
                            </div>
                        </form>
                    )
                    }
                </div>
                <div className="rounded-xl border border-gray-900 overflow-hidden col-span-2" style={{ height: 'max-content' }}>
                    <ul>
                        <li><a className="bg-gray-900 text-white px-2 py-1 block cursor-pointer hover:bg-white hover:text-gray-900 transition-all duration-300" onClick={()=>{
                            cancelChangePassword()
                            setEditable(true)
                        }}>Edit Profile</a></li>
                        <li><a className="bg-gray-900 text-white px-2 py-1 block cursor-pointer hover:bg-white hover:text-gray-900 transition-all duration-300" onClick={()=>{
                            setEditable(false)
                            setIsChangePass(true)
                        }}>Change Password</a></li>
                    </ul>
                </div>
            </div>
            <Alert open={alert} setAlert={setAlert} message={message} />
        </>
    )
}

export default DashboardProfile