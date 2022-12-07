import Logo from "/public/logo.png";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./Header.module.css"
import { parseCookies } from "nookies";
import SellerDropDown from "../Dashboard/SellerDropDown";
import BuyerDropDown from "../Dashboard/BuyerDropDown";

const Header = (props: any) => {
	
	const router = useRouter();
	const {token, user} = parseCookies()

	const openMobileMenu = async () => {
		document.querySelector('.mobile-menu-overlay')?.classList.toggle('translate-x--100');
		setTimeout(() => {
			document.querySelector('#mobile-menu')?.classList.toggle('translate-x--100');
		}, 200);
	}

	const closeMobileMenu = async () => {
		document.querySelector('#mobile-menu')?.classList.toggle('translate-x--100');
		setTimeout(() => {
			document.querySelector('.mobile-menu-overlay')?.classList.toggle('translate-x--100');
		}, 300);
	}

	useEffect(()=>{
		setTimeout(() => {
			document.querySelector('#mobile-menu')?.classList.remove('hidden');
		}, 100);
	},[])

	return (
		<>
			{/* Start of Site Header  */}
			<div className="bg-white sticky top-0 w-full p-2 z-10 shadow-sm">
				<div className="flex flex-wrap items-center justify-between px-5">
					<div className="logo hidden lg:block">
						<Link href={'/'}>
							<a className="relative inline-block" style={{width: "200px"}}>
								<Image src={Logo} alt="Logo" className="w-full" />
							</a>
						</Link>
                    </div>
					<nav className="menu-center col-span-2 hidden lg:block">
						<ul className="flex flex-wrap items-center ml-5">
							<li>
								<Link href={'/'}>
									<a className={`nav-item block text-center ${router.pathname=='/' ? 'nav-active': ''}`}>Home</a>
								</Link>
							</li>
							<li>
								<Link href={'/about'}>
									<a className={`nav-item text-center ${router.pathname=='/about' ? 'nav-active': ''}`}>About</a>
								</Link>
							</li>
							<li>
								<Link href={'/contact'}>
									<a className={`nav-item text-center ${router.pathname=='/contact' ? 'nav-active': ''}`}>Contact</a>
								</Link>
							</li>
							<li>
								<Link href={'/opportunities'}>
									<a className="bg-white duration-300 ease-in-out hover:bg-black hover:text-white inline-block px-4 py-1 rounded-3xl text-black border border-black border-solid ml-5">Auction</a>
								</Link>
							</li>
						</ul>
					</nav>

					{/* Small screen menu */}
					<div className="w-4/12 block lg:hidden p-4" onClick={(e)=>openMobileMenu()}>
						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" id="menu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
							<path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
						</svg>
					</div>
					<div className="logo w-4/12 block lg:hidden">
						<Link href={'/'}>
							<a>
								<Image src={Logo} layout="intrinsic" width="350" height="40" alt="logo" className="img-fluid" />
							</a>
						</Link>
					</div>

					<div className="flex flex-wrap justify-end">
						{/* Display in medium screen */}
						{
							typeof window !== 'undefined' && (
								(user!=undefined && user!=null && JSON.parse(user).userType=='Seller') && (
									<div className="hidden md:block">
										<Link href={'/seller/property/add'}>
											<a className={"bg-black border border-black border-solid duration-300 ease-in-out hover:bg-white hover:text-black inline-block m-1 px-4 py-1 rounded-3xl text-white"}>+ Add Property</a>
										</Link>
									</div>
								)
							)
						}
						{
							typeof window !== 'undefined' && (
								user!=undefined && user!=null ? (
									JSON.parse(user).userType=='Buyer' ? (
										<BuyerDropDown />
									) : (
										<SellerDropDown />
									)
								) : (
									<>
										<Link href={'/sign-up'}>
											<a className={"bg-white border border-black border-solid duration-300 ease-in-out hover:bg-black hover:text-white inline-block m-1 px-4 py-1 rounded-3xl text-black mr-2"}>Register</a>
										</Link>
										<Link href={'/sign-in'}>
											<a className={"bg-white border border-black border-solid duration-300 ease-in-out hover:bg-black hover:text-white inline-block m-1 px-4 py-1 rounded-3xl text-black"}>Login</a>
										</Link>
									</>
								)
							)
						}
					</div>
				</div>
			</div>
			{/* ENd of Site Header  */}

			{/* Mobile Responsive Header */}
			<div className="bg-white duration-500 fixed h-screen w-full sm:w-10/12 md:w-2/6 p-4 top-0 transition-all z-40 translate-x--100 hidden" id="mobile-menu">
				<div className="close-icon absolute close-icon h-5 text-red-500 w-5" style={{right: '1rem'}}>
					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" id="close-menu-icon" fill="#f56565" viewBox="0 0 24 24" stroke="#f56565" strokeWidth="{2}" onClick={(e)=>closeMobileMenu()}>
						<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</div>
				<ul>
					<li>
						<Link href={'/'}>
							<a className="p-3 block text-xl text-blue-800" onClick={(e)=>closeMobileMenu()}>Home</a>
						</Link>
					</li>
					<li>
						<Link href={'/opportunities'}>
							<a className="p-3 block text-xl" onClick={(e)=>closeMobileMenu()}>Opportunities</a>
						</Link>
					</li>
					<li>
						<Link href={'/about'}>
							<a className="p-3 block text-xl" onClick={(e)=>closeMobileMenu()}>About</a>
						</Link>
					</li>
					<li>
						<Link href={'/contact'}>
							<a className="p-3 block text-xl" onClick={(e)=>closeMobileMenu()}>Contact</a>
						</Link>
					</li>
				</ul>
			</div>
			<div className="mobile-menu-overlay bg-black bg-opacity-50 duration-300 fixed h-screen top-0 transition-all w-full z-10 translate-x--100" onClick={(e)=>closeMobileMenu()} />
		</>
	);
};

export default Header;