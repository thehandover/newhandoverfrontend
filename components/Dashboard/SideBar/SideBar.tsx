import Cookies from 'js-cookie'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import { MainContext } from '../../../context/MainContext'
import styles from "./SideBar.module.css"

const UserPanelSideBar = (props: any) => {

    const {logout} = useContext(MainContext)

    const user: any = Cookies.get('user')

    useEffect(() => {
        let openSideBar = document.querySelector('#mobile-nav button#openSideBar'),
        closeSideBar = document.querySelector('#mobile-nav button#closeSideBar'),
        mobileNav: any = document.querySelector('#mobile-nav');
        
        openSideBar?.addEventListener('click',(e)=> {
            mobileNav.style.transform = "translateX(0px)";
            openSideBar?.classList.add('hidden');
            closeSideBar?.classList.remove('hidden');
        })
        
        closeSideBar?.addEventListener('click',(e)=> {
            mobileNav.style.transform = "translateX(-100%)";
            openSideBar?.classList.remove('hidden');
            closeSideBar?.classList.add('hidden');
        })
    })

    const Links = typeof window != 'undefined' && (
        JSON.parse(user).userType == 'Seller' ? (
            <>
                <li className="w-full text-white cursor-pointer mb-4">
                    <Link href="/seller" passHref>
                        <a className={`${styles.sidebarLink} sidebar-link active relative px-8 p-2 flex items-center focus:outline-none`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <rect x={4} y={4} width={6} height={6} rx={1} />
                                <rect x={14} y={4} width={6} height={6} rx={1} />
                                <rect x={4} y={14} width={6} height={6} rx={1} />
                                <rect x={14} y={14} width={6} height={6} rx={1} />
                            </svg>
                            <span className="text-sm ml-2">Dashboard</span>
                        </a>
                    </Link>
                    {/* <div class="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs">5</div> */}
                </li>
                <li className="w-full text-white cursor-pointer mb-4">
                    <Link href="/seller/properties" passHref>
                        <a className={`${styles.sidebarLink} sidebar-link relative px-8 p-2 flex items-center focus:outline-none`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                            </svg>
                            <span className="text-sm ml-2">Properties</span>
                        </a>
                    </Link>
                </li>
                <li className="w-full text-white cursor-pointer mb-4">
                    <Link href="/seller/profile" passHref>
                        <a className={`${styles.sidebarLink} sidebar-link relative px-8 p-2 flex items-center focus:outline-none`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                            </svg>
                            <span className="text-sm ml-2">Profile</span>
                        </a>
                    </Link>
                </li>
            </>
        ) : (
            <>
                <li className="w-full text-white cursor-pointer mb-4">
                    <Link href="/buyer" passHref>
                        <a className={`${styles.sidebarLink} sidebar-link active relative px-8 p-2 flex items-center focus:outline-none`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <rect x={4} y={4} width={6} height={6} rx={1} />
                                <rect x={14} y={4} width={6} height={6} rx={1} />
                                <rect x={4} y={14} width={6} height={6} rx={1} />
                                <rect x={14} y={14} width={6} height={6} rx={1} />
                            </svg>
                            <span className="text-sm ml-2">Dashboard</span>
                        </a>
                    </Link>
                    {/* <div class="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs">5</div> */}
                </li>
                <li className="w-full text-white cursor-pointer mb-4">
                    <Link href="/buyer/biddings" passHref>
                        <a className={`${styles.sidebarLink} sidebar-link relative px-8 p-2 flex items-center focus:outline-none`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                            </svg>
                            <span className="text-sm ml-2">My Bids</span>
                        </a>
                    </Link>
                </li>
                <li className="w-full text-white cursor-pointer mb-4">
                    <Link href="/buyer/profile" passHref>
                        <a className={`${styles.sidebarLink} sidebar-link relative px-8 p-2 flex items-center focus:outline-none`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                            </svg>
                            <span className="text-sm ml-2">Profile</span>
                        </a>
                    </Link>
                </li>
            </>
        )
    )

    return (
        <>
        {/* Sidebar starts */}
        {/* Display sidebar in large screen*/}
        <div className={`${styles.sidebarContainer} sidebar-container w-1/6 sticky sm:relative bg-gray-900 shadow-xl md:h-full flex-col justify-between hidden lg:flex`}>
            <ul className="mt-2">
                { Links }
                <li className="w-full text-white cursor-pointer mb-4">
                    <a className={`${styles.sidebarLink} sidebar-link relative px-8 p-2 flex items-center focus:outline-none`} onClick={()=>logout()}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <circle cx={12} cy={12} r={3} />
                        </svg>
                        <span className="text-sm ml-2">Logout</span>
                    </a>
                </li>
            </ul>
        </div>

        {/* Display sidebar in below then medium screen*/}
        <div className="sidebar-container w-64 z-40 shadow md:h-full flex-col justify-between fixed lg:hidden transition duration-150 ease-in-out h-full bg-gray-900" id="mobile-nav" style={{ transform: 'translateX(-100%)' }}>
            <button aria-label="toggle sidebar" id="openSideBar" className="h-10 w-10 bg-white text-gray-800 absolute right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer rounded">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-adjustments" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#252153" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx={6} cy={10} r={2} />
                    <line x1={6} y1={4} x2={6} y2={8} />
                    <line x1={6} y1={12} x2={6} y2={20} />
                    <circle cx={12} cy={16} r={2} />
                    <line x1={12} y1={4} x2={12} y2={14} />
                    <line x1={12} y1={18} x2={12} y2={20} />
                    <circle cx={18} cy={7} r={2} />
                    <line x1={18} y1={4} x2={18} y2={5} />
                    <line x1={18} y1={9} x2={18} y2={20} />
                </svg>
            </button>
            <button aria-label="Close sidebar" id="closeSideBar" className="hidden h-10 w-10 bg-white text-gray-800 absolute right-0 mt-16 -mr-10 items-center shadow rounded-tr rounded-br justify-center cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x mx-auto" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#252153" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1={18} y1={6} x2={6} y2={18} />
                    <line x1={6} y1={6} x2={18} y2={18} />
                </svg>
            </button>
            <ul className="mt-12">
                <li className="w-full text-white cursor-pointer mb-4">
                    <Link href="/seller" passHref>
                        <a href="/user/" className="sidebar-link active relative px-8 p-2 flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <rect x={4} y={4} width={6} height={6} rx={1} />
                                <rect x={14} y={4} width={6} height={6} rx={1} />
                                <rect x={4} y={14} width={6} height={6} rx={1} />
                                <rect x={14} y={14} width={6} height={6} rx={1} />
                            </svg>
                            <span className="text-sm ml-2">Dashboard</span>
                        </a>
                    </Link>
                    {/* <div class="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs">5</div> */}
                </li>
                <li className="w-full text-white cursor-pointer mb-4">
                    <Link href="/seller/properties" passHref>
                        <a className="sidebar-link relative px-8 p-2 flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                            </svg>
                            <span className="text-sm ml-2">Properties</span>
                        </a>
                    </Link>
                </li>
                <li className="w-full text-white cursor-pointer mb-4">
                    <a className="sidebar-link relative px-8 p-2 flex items-center focus:outline-none focus:ring-2 focus:ring-white" onClick={() => logout()}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <circle cx={12} cy={12} r={3} />
                        </svg>
                        <span className="text-sm ml-2">Logout</span>
                    </a>
                </li>
            </ul>
        </div>
        {/* Sidebar ends */}
        </>
    )
}

export default UserPanelSideBar