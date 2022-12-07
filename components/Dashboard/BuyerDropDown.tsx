import Link from 'next/link'
import React, { useContext, useEffect } from 'react'
import { MainContext } from '../../context/MainContext'

const BuyerDropDown = () => {

    const {logout} = useContext(MainContext)
    
    useEffect(() => {
        document.querySelector('.dropdown')?.addEventListener('click', (e) => {
            document.querySelector('.dropdown-menu')?.classList.toggle('hidden');
        })
    },[])

    return (
        <div className="dropdown relative">
            <a className="px-2 py-2 text-white font-medium leading-tight uppercase rounded focus:outline-none transition duration-150 ease-in-out flex items-center whitespace-nowrap cursor-pointer" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                {/* User avatar icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8" viewBox="0 0 20 20" fill="#ddd">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
                {/* Down arrow icon */}
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path fill="#ccc" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z">
                    </path>
                </svg>
            </a>
            <ul className="dropdown-menu min-w-max absolute bg-white text-base z-50 py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none hidden right-0" aria-labelledby="dropdownMenuButton2">
                <li>
                    <Link href={'/buyer'}>
                        <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">Dashboard</a>
                    </Link>
                </li>
                <li>
                    <a onClick={()=>logout()} className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 cursor-pointer">Logout</a>
                </li>
            </ul>
        </div>
    )
}

export default BuyerDropDown