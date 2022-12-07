import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Insta1 from "../../public/assets/img/instagram/insta01.jpg";
import Insta2 from "../../public/assets/img/instagram/insta02.jpg";
import Insta3 from "../../public/assets/img/instagram/insta03.jpg";
import Insta4 from "../../public/assets/img/instagram/insta04.jpg";
import Insta5 from "../../public/assets/img/instagram/insta05.jpg";
import Insta6 from "../../public/assets/img/instagram/insta06.jpg";
import Logo from "/public/logo.png";
import styles from "./Footer.module.css"
import JoiningBanner from '../../Home/JoiningBanner';

const Footer = () => {

    return (
        <>
			<JoiningBanner />
			{/* Footer section starts here  */}
			<footer className={`${styles.containerFooter} py-10`}>
				<div className="width mx-auto">
					<div className="grid md:grid-cols-3 gap-5">
						<div className="">
							<div className="mb-2">
								<Image src={Logo.src} alt="logo" width="156" height="18" />
							</div>
							<p className="footer-about mb-10 text-gray-500">The handover is the only online marketplace for off plan investing. <br /> Search projects for Bid and Invest.</p>
							<ul className="list-none">
								<li className="inline-block mr-3"><a href={'/'}><span className="mdi mdi-facebook text-2xl" /></a></li>
								<li className="inline-block mr-3"><a href={'/'}><span className="mdi mdi-twitter text-2xl" /></a></li>
								<li className="inline-block mr-3"><a href={'/'}><span className="mdi mdi-instagram text-2xl" /></a></li>
							</ul>
						</div>
						<div className="col-center">
							<div className="footer-title theme-color font-bold text-xl mb-2">
								Quick Links
							</div>
							<ul className="list-none">
								<li>
									<Link href={'/opportunities'}>
										<a className="text-gray-500 block mb-2">Opportunities</a>
									</Link>
								</li>
								<li>
									<Link href={'/about'}>
										<a className="text-gray-500 block mb-2">About</a>
									</Link>
								</li>
								<li>
									<Link href={'/contact'}>
										<a className="text-gray-500 block mb-2">Contact</a>
									</Link>
								</li>
							</ul>
						</div>
						<div className="col-right">
							<div className="footer-title theme-color font-bold text-xl mb-2">
								Contact
							</div>
							<ul className="list-none">
								<li className="flex"><span className={`${styles.mdi} mdi mdi-google-maps`} /> <p className='text-gray-500'>Thehandover Gulf FZCO, Dubai
									Silicon Oasis, DDP, Building A2</p></li>
								<li>
									<span className={`${styles.mdi} mdi mdi-phone`} /> Telp: <span className='text-gray-500 text-base'>(0411) 425 277 / 425 276</span>
								</li>
								<li><span className={`${styles.mdi} mdi mdi-email-outline`} /> Email: <a href="mailto:inbox@ITsolutions.com" className='text-gray-500'>inbox@ITsolutions.com</a></li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
			{/* Footer section Ends Here  */}

        </>
    )
}

export default Footer