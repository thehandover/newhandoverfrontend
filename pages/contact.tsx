import { NextPage } from 'next'
import React, { useContext, useState } from 'react'
import { Button } from '../components/Shares/Buttons';
import { Base_URL } from '../config/constants';
import { MainContext } from '../context/MainContext';
import styles from "./styles/Contact.module.css"
import BackgroundImage from "/public/img/breadcrumd.svg"

const Contact: NextPage = () => {

	const {setAlert, setAlertMessage} = useContext(MainContext)
    const initialSate = {
		name: "",
		email: "",
		message: "",
	};
	const [data, setData] = useState(initialSate);

	const handleInputs = (e: any) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};
	const handleSubmit = async (e: any) => {
		e.preventDefault();
		const { name, email, message } = data;
		let res = await fetch(`${Base_URL}/api/contact`, {
			method: "POST",
			body: JSON.stringify({
				name,
				email,
				message,
			})
		}).then((response) => {
			return response.json()
		})
		.catch(function (error) {
			console.log(error);
		})
		
		if(res?.status==1)
		{
			await setAlert(true)
			setAlertMessage(res?.data.Message)
			setData(initialSate);
		}
		else
		{
			console.log('error',res)
		}
	};

    return (
		<>
			<div className="" style={{ backgroundImage: `linear-gradient(178deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(${BackgroundImage.src})`, backgroundRepeat: 'no-repeat' }}>
				<div className="font-semibold py-32 text-3xl text-center">
					<h3 className="uppercase text-white font-semibold text-4xl">Contact</h3>
				</div>
			</div>
			<section className="width mx-auto my-16">
				<div className="grid grid-cols-1 md:grid-cols-2">
					<div>
						<h3 className='theme-color font-bold text-3xl'>Get in touch with us!</h3>
						<p className="leading-relaxed py-10">Have questions about our platform or need our expert assistance? At Handover, we have a dedicated customer service division to handle your queries most efficiently and seamlessly possible. Our friendly and knowledgeable customer support team is available 24/7 to address your concerns and answer your questions. You can get in touch with us by filling in the given form, emailing, or calling us on the provided contact details. Our customer service representative will get back to you within 48 hours. </p>
						<div className={`${styles.contactNeedHelp} h-max`}>
							<h3 className="theme-color text-xl font-semibold">Need help with something?</h3>
							<p className="leading-relaxed">Others get indignant when asked for assistance, but we are delighted to help you! HandOver&lsquo;s dedicated resources are on hand to counsel you through every step till you sign the best investment deal. If you need any assistance, you can reach us via phone, email, or live chat. Our customer support team is 24/7 available at your service.</p>
						</div>
					</div>
					<div className="contact-content px-10">
						<div className='rounded-xl p-10 shadow-box'>
							<h3 className="text-xl theme-color mb-3 font-bold capitalize">Send a quote</h3>
							<form className="" onSubmit={(e) => handleSubmit(e)}>
								<div className="row">
									<div className="mb-4">
										<label className="text-base text-gray-500 font-medium">Name *</label>
										<input
											type="text"
											className="w-full border border-solid border-blue-200 rounded-full p-2 mb-2"
											name="name"
											placeholder="Name*"
											data-error="First Name is required"
											required
											value={data.name}
											onChange={handleInputs}
										/>
										<div className="help-block with-errors"></div>
									</div>
									<div className="mb-4">
										<label>Email *</label>
										<input
											type="email"
											className="w-full border border-solid border-blue-200 rounded-full p-2 mb-2"
											name="email"
											placeholder="Email*"
											data-error="Email is required"
											required
											value={data.email}
											onChange={handleInputs}
										/>
										<div className="help-block with-errors"></div>
									</div>
									<div className="form-group col-lg-12">
										<label>Message *</label>
										<textarea
											name="message"
											id="message"
											className="w-full border border-solid border-blue-200 rounded-2xl p-2 mb-2"
											placeholder="Message"
											cols={30}
											rows={5}
											data-error="Message Name is required"
											required
											value={data.message}
											onChange={handleInputs}
										></textarea>
										<div className="help-block with-errors"></div>
									</div>
									<label className='text-sm'>
										<input type="checkbox" name="" id="" required /> I agree with privacy policy
									</label>
									<div className="form-group col-lg-12">
										<Button>Send message</Button>
									</div>
								</div>
								<div className="form-response"></div>
							</form>
						</div>
					</div>
				</div>
			</section>

			<section className="width mx-auto grid grid-cols-1 md:grid-cols-2 mb-16">
				<div className="rounded-xl overflow-hidden">
					<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d116878.45300534296!2d90.4195470442074!3d23.731268144494663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1635221509729!5m2!1sen!2sbd" width="100%" height="550" allowFullScreen={false} loading="lazy" ></iframe>
				</div>
				<div className='px-10'>
					<div className="rounded-xl p-10 shadow-box">
						<h3 className="text-3xl theme-color mb-3 font-medium">Office Information</h3>
						<ul className="mb-5">
							<li>Thehandover Gulf FZCO,</li>
							<li>Dubai Silicon Oasis, DDP,</li>
							<li>Building A2, Dubai,</li>
							<li>United Arab Emirates 6009</li>
						</ul>
						<div className="flex flex-wrap mb-5">
							<div className="item-lebel mr-2">Emergency Call :</div>
							<div className="phone-number">+__ __ ____ ____</div>
							<div className="item-icon">
								<i className="fas fa-phone-alt"></i>
							</div>
						</div>
						<div className="flex flex-wrap items-center">
							<div className="item-lebel mr-4">Social Share :</div>
							<ul className="grid grid-cols-5">
								<li className='mx-1'>
									<a href="https://www.facebook.com/">
										<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="25px" height="25px" className='text-white'><linearGradient id="Ld6sqrtcxMyckEl6xeDdMa" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2aa4f4"/><stop offset="1" stopColor="#007ad9"/></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"/><path fill="currentColor" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"/></svg>
									</a>
								</li>
								<li className='mx-1'>
									<a href="https://twitter.com/">
										<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="25px" height="25px" className='text-blue-600'><linearGradient id="_osn9zIN2f6RhTsY8WhY4a" x1="10.341" x2="40.798" y1="8.312" y2="38.769" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2aa4f4"/><stop offset="1" stopColor="#007ad9"/></linearGradient><path fill="currentColor" d="M46.105,11.02c-1.551,0.687-3.219,1.145-4.979,1.362c1.789-1.062,3.166-2.756,3.812-4.758	c-1.674,0.981-3.529,1.702-5.502,2.082C37.86,8.036,35.612,7,33.122,7c-4.783,0-8.661,3.843-8.661,8.582	c0,0.671,0.079,1.324,0.226,1.958c-7.196-0.361-13.579-3.782-17.849-8.974c-0.75,1.269-1.172,2.754-1.172,4.322	c0,2.979,1.525,5.602,3.851,7.147c-1.42-0.043-2.756-0.438-3.926-1.072c0,0.026,0,0.064,0,0.101c0,4.163,2.986,7.63,6.944,8.419	c-0.723,0.198-1.488,0.308-2.276,0.308c-0.559,0-1.104-0.063-1.632-0.158c1.102,3.402,4.299,5.889,8.087,5.963	c-2.964,2.298-6.697,3.674-10.756,3.674c-0.701,0-1.387-0.04-2.065-0.122C7.73,39.577,12.283,41,17.171,41	c15.927,0,24.641-13.079,24.641-24.426c0-0.372-0.012-0.742-0.029-1.108C43.483,14.265,44.948,12.751,46.105,11.02"/></svg>
									</a>
								</li>
								{/* <li className='mx-1'>
									<a href="https://vimeo.com/">
										<svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="25px" height="25px"><path d="M 41 5 C 34.210938 4.992188 30.46875 8.796875 28.167969 16.210938 C 29.371094 15.765625 30.578125 15.214844 31.671875 15.214844 C 33.972656 15.214844 34.738281 16.070313 34.410156 18.726563 C 34.300781 20.386719 33.644531 23.066406 31.671875 26.164063 C 29.699219 29.152344 27.984375 30 27 30 C 25.796875 30 24.882813 28.269531 23.898438 23.621094 C 23.570313 22.292969 22.804688 19.304688 21.925781 13.664063 C 21.160156 8.464844 18.613281 5.667969 15 6 C 13.46875 6.109375 11.636719 7.535156 8.570313 10.191406 C 6.378906 12.183594 4.300781 13.621094 2 15.613281 L 4.191406 18.421875 C 6.269531 16.984375 7.476563 16.429688 7.804688 16.429688 C 9.335938 16.429688 10.757813 18.863281 12.183594 23.84375 C 13.386719 28.378906 14.699219 32.914063 15.90625 37.449219 C 17.765625 42.429688 20.066406 44.863281 22.695313 44.863281 C 27.074219 44.863281 32.328125 40.882813 38.570313 32.695313 C 44.699219 24.949219 47.78125 18.535156 48 14 C 48.21875 8.027344 45.816406 5.109375 41 5 Z"/></svg>
									</a>
								</li>
								<li className='mx-1'>
									<a href="https://www.pinterest.com/">
										<svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="25px" height="25px"><path d="M25,2C12.3178711,2,2,12.3178711,2,25c0,9.8841553,6.2675781,18.3302612,15.036377,21.5769653	c-0.2525635-2.2515869-0.2129517-5.9390259,0.2037964-7.7243652c0.3902588-1.677002,2.5212402-10.6871338,2.5212402-10.6871338	s-0.6433105-1.2883301-0.6433105-3.1911011c0-2.9901733,1.7324219-5.2211914,3.8898315-5.2211914	c1.8349609,0,2.7197876,1.3776245,2.7197876,3.0281982c0,1.8457031-1.1734619,4.6026611-1.78125,7.1578369	c-0.506897,2.1409302,1.0733643,3.8865356,3.1836548,3.8865356c3.821228,0,6.7584839-4.0296021,6.7584839-9.8453369	c0-5.147583-3.697998-8.7471924-8.9795532-8.7471924c-6.1167603,0-9.7072754,4.588562-9.7072754,9.3309937	c0,1.8473511,0.7111816,3.8286743,1.6000977,4.9069824c0.175293,0.2133179,0.2009277,0.3994141,0.1488647,0.6160278	c-0.1629028,0.678894-0.5250854,2.1392822-0.5970459,2.4385986c-0.0934448,0.3944702-0.3117676,0.4763184-0.7186279,0.2869263	c-2.685791-1.2503052-4.364502-5.1756592-4.364502-8.3295898c0-6.7815552,4.9268188-13.0108032,14.206543-13.0108032	c7.4588623,0,13.2547607,5.3138428,13.2547607,12.4179077c0,7.4100342-4.6729126,13.3729858-11.1568604,13.3729858	c-2.178894,0-4.2263794-1.132019-4.9267578-2.4691772c0,0-1.0783081,4.1048584-1.3404541,5.1112061	c-0.4524536,1.7404175-2.3892822,5.3460083-3.3615723,6.9837036C20.1704712,47.6074829,22.5397949,48,25,48	c12.6826172,0,23-10.3173828,23-23C48,12.3178711,37.6826172,2,25,2z"/></svg>
									</a>
								</li> */}
								<li className='mx-1'>
									<a href="https://web.whatsapp.com/">
										<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" className='text-green-500' width="25px" height="25px">    <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"/></svg>
									</a>
								</li>
							</ul>
							<div className="item-icon">
								<i className="fas fa-share-alt"></i>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
    )
}

export default Contact