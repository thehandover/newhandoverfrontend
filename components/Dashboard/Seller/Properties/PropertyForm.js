import axios from 'axios';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../../../../context/MainContext'
import States from "../../../../database/states.json"
import propertyTypes from "../../../../database/property_types.json"
import paymentPlans from "../../../../database/payment_plan.json"
import Countries from "../../../../database/countries.json"
import { sortAsc } from '../../../../helpers/functions'
import { Base_URL, currency_symbol } from '../../../../config/constants';
import { Editor } from '@tinymce/tinymce-react';
import Image from 'next/image';
import Link from 'next/link';

const PropertyForm = ({textEditorApiKey, property="", setProperty = () => {}, setProperties = () => {} }) => {

    const initialState = {
		propertyTitle: property ? property.propertyTitle : "",
		area: property ? property.area : "",
		bedrooms: property ? property.bedrooms : "",
		floors: property ? property.floors : "",
		propertyType: property ? property.propertyType : "",
		bathrooms: property ? property.bathrooms : "",
		priceDemand: property ? property.priceDemand : "",
		biddingEnd: property ? property.biddingEnd.split('T')[0] : "",
		address: property ? property.location.address : "",
        country: property ? property.country : "",
		city: property ? property.location.city : "",
		state: property ? property.location.state : "",
		zip: property ? property.location.zip : "",
		description: property ? property.description : "",
        estCompletion: property ? property.estCompletion : ""
	};
    const {setAlert, setAlertMessage} = useContext(MainContext)
	const [user, setUser] = useState(initialState);
	const [propertyType, setpropertyType] = useState(property ? property.propertyType : "");
	const [paymentPlan, setpaymentPlan] = useState(property ? property.paymentPlan : "");
	const [countrySate, setCountrySate] = useState("");
	const [multiImages, setMultiImages] = useState([]);
    const [loading, setLoading] = useState(false)
    const [states, setStates] = useState([])
    const [countries, setCountries] = useState([])
    const [aminitiesList, setAminitiesList] = useState([{aminity: ""}])

	const handleInputs = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

    const addNewAnimity = () => {
        setAminitiesList([...aminitiesList, {aminity: ""}])
    }

    const removeNewAnimity = (index) => {
        let aminities_list = [...aminitiesList]
        aminities_list.splice(index, 1)
        setAminitiesList(aminities_list)
    }

    const changeAminityValue = (e, index) => {
        const {name, value} = e.target
        let aminities_list = [...aminitiesList]
        aminities_list[index][name] = value
        setAminitiesList(aminities_list)
    }

    const route = useRouter()

    const multiImagesChange = async (e) => {
		await setMultiImages(e.target.files);
        let files = [];
        await Array.from(e.target.files).forEach((file) => {
            files.push(URL.createObjectURL(file))
        })
	};

    const getStates = async (id) => {
        let mystates = States.filter((state) => state.country_id==id);
        await sortAsc(mystates, "name")
        await setStates(mystates)
    }

    const setInNumber = async (e) => {
        const re = /^[0-9\b]+$/;
        // if value is not blank, then test the regex
        if (e.target.value === '' || re.test(e.target.value)) {
            handleInputs(e)
        }
    }

    // Add property
    const handleSubmit = async (e) => {
		e.preventDefault();
        await setLoading(true)
        const {token} = parseCookies()
		const {
			propertyTitle,
			area,
			bedrooms,
			floors,
			bathrooms,
			priceDemand,
			biddingEnd,
			address,
			city,
			zip,
			description,
            country
		} = user;

		let myHeaders = new Headers();
		myHeaders.append(
			"Authorization",
			`Bearer ${token}`
		);

		var formdata = new FormData();
		formdata.append("propertyTitle", propertyTitle);
		formdata.append("description", description);
		formdata.append("area", area);
		formdata.append("propertyType", propertyType);
		formdata.append("address", address);
		formdata.append("bedrooms", bedrooms);
		formdata.append("bathrooms", bathrooms);
		formdata.append("floors", floors);
		formdata.append("priceDemand", priceDemand);
		formdata.append("biddingEnd", biddingEnd);
		formdata.append("images", multiImages[0]);
		formdata.append("country", country);
		formdata.append("city", city);
		formdata.append("state", countrySate);
		formdata.append("zip", zip);
		formdata.append("paymentPlan", paymentPlan);
        await aminitiesList.map((aminity, index) => {
            formdata.append(`amenities[${index}]`, aminity.aminity);
        })

        let result = await axios({
            method: "POST",
            url: `${'https://handoverbackendapp.herokuapp.com'}/property/add`,
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${token}`
            },
            data: formdata
        }).then((response) => {
            return response
        }).catch((err) => {
            console.log("error in opportunties filter request", err.response);
        });

        if(result?.status==200)
        {
            route.push('/seller/properties')
            await setUser(initialState)
            setAlert(true)
            setAlertMessage('Property added successfully')
            setCountrySate('')
        }
        setLoading(false)
	};

    // Update property
    const {token} = parseCookies()
    const propertyLists = async () => {
        let res = await fetch(`${Base_URL}/api/seller/properties`,{
            method: "GET",
            headers: {
                "Authorization" : `Bearer ${token}`
            }
        }).then(response => response.json())
        return res
    }
    const handleSubmitUpdate = async (e) => {
		e.preventDefault();
        await setLoading(true)
        
		const {
			propertyTitle,
			area,
			bedrooms,
			floors,
			propertyType,
			bathrooms,
			priceDemand,
			biddingEnd,
			address,
			city,
			state,
			zip,
			description,
		} = user;

		let myHeaders = new Headers();
		myHeaders.append(
			"Authorization",
			`Bearer ${token}`
		);

		let formdata = {
            "propertyTitle": propertyTitle,
            "description": description,
            "area": area,
            "propertyType": "Constructed",
            "address": address,
            "bedrooms": bedrooms,
            "bathrooms": bathrooms,
            "floors": floors,
            "priceDemand": priceDemand,
            "biddingEnd": biddingEnd,
            "city": city,
            "state": countrySate,
            "zip": zip,
        }

        let result = await axios({
            method: "PATCH",
            url: `${'https://handoverbackendapp.herokuapp.com'}/property/edit/${property._id}`,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            data: formdata
        }).then((response) => {
            return response
        }).catch((err) => {
            console.log("error in opportunties filter request", err.response);
        });

        if(result?.status==200)
        {
            await setUser(initialState)
            setAlert(true)
            setAlertMessage('Property updated successfully')
            setCountrySate('')
            setProperty(null)
            let properties = await propertyLists()
            setProperties(properties.data)
        }
        setLoading(false)
	}

    useEffect(() => {
        const defaultFunc = async () => {
            if(property)
            {
                window.scrollTo(0, 0)
                if(property.amenities.length > 0)
                {
                    let aminity_list = []
                    property.amenities.map((aminity) => {
                        aminity_list.push({aminity: aminity})
                    })
                    setAminitiesList(aminity_list)
                }
            }
            let sortedCountries = await sortAsc(Countries, 'name');
            await setCountries(sortedCountries)
        }
        defaultFunc()
    }, [countries, property, ])

    return (
        <div className="mt-4 bg-white rounded-xl">
            <form onSubmit={(e)=>{
                if(property)
                {
                    handleSubmitUpdate(e)
                }
                else
                {
                    handleSubmit(e)
                }
                }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-x-10 pb-6 border-solid border-b">
                    <div className="grid grid-cols-1 gap-2">
                        <label htmlFor="propertyTitle" className="text-gray-500">Property title <span className="text-red-500">*</span></label>
                        <input type="text" className="px-3 py-1 rounded-full bg-white border border-solid focus:border-1 focus:border-blue-500 transition-all duration-300" id="propertyTitle" name="propertyTitle" placeholder="Property title" required value={user.propertyTitle} onChange={(e)=>handleInputs(e)} />
                    </div>

                    <div className="grid grid-cols-1 gap-2">
                        <label htmlFor="area" className="text-gray-500">Area <span className="text-red-500">*</span></label>
                        <div className='relative overflow-hidden rounded-full border border-solid focus:border-1 focus:border-blue-500'>
                            <input type="text" className="px-3 py-1 rounded-full bg-white transition-all duration-300 w-full" id="area" name="area" placeholder="Area in sq.ft" value={user.area} onChange={(e)=>setInNumber(e)} required />
                            <span className='absolute right-0 bottom-0 top-0 bg-gray-50 text-sm text-gray-500 px-2 flex items-center'>sq.ft</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                        <label htmlFor="type" className="text-gray-500">Select property type <span className="text-red-500">*</span></label>
                        <select className="px-3 py-1 rounded-full bg-white border border-solid focus:border-1 focus:border-blue-500 transition-all duration-300" id="type" name="type" defaultValue={propertyType} onChange={(e) => setpropertyType(e.target.value)} required>
                            <option value="">Select property type</option>
                            {
                                propertyTypes.map((option) => (
                                    <option key={option.id} value={option.name}>{option.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    {
                        propertyType != 'OffPlan' && (
                            <>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="grid grid-cols-1 gap-2">
                                        <label htmlFor="bedrooms" className="text-gray-500">Bedrooms <span className="text-red-500">*</span></label>
                                        <input type="number" className="px-3 py-1 rounded-full bg-white border border-solid focus:border-1 focus:border-blue-500 transition-all duration-300" id="bedrooms" name="bedrooms" placeholder="Bedrooms" value={user.bedrooms} onChange={(e)=>handleInputs(e)} />
                                    </div>
                                    <div className="grid grid-cols-1 gap-2">
                                        <label htmlFor="bathrooms" className="text-gray-500">Bathrooms <span className="text-red-500">*</span></label>
                                        <input type="number" className="px-3 py-1 rounded-full bg-white border border-solid focus:border-1 focus:border-blue-500 transition-all duration-300" id="bathrooms" name="bathrooms" placeholder="Bathrooms" value={user.bathrooms} onChange={(e)=>handleInputs(e)} />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-2">
                                    <label htmlFor="floors" className="text-gray-500">Floors <span className="text-red-500">*</span></label>
                                    <input type="number" className="px-3 py-1 rounded-full bg-white border border-solid focus:border-1 focus:border-blue-500 transition-all duration-300" id="floors" name="floors" placeholder="Floors" value={user.floors} onChange={(e)=>handleInputs(e)} />
                                </div>
                            </>
                        )
                    }

                    <div className="grid grid-cols-1 gap-2">
                        <label htmlFor="priceDemand" className="text-gray-500">Price <span className="text-red-500">*</span></label>
                        <div className='relative overflow-hidden rounded-full border border-solid focus:border-1 focus:border-blue-500'>
                            <input type="text" className="px-3 py-1 rounded-full bg-white transition-all duration-300 w-full" id="priceDemand" name="priceDemand" placeholder="Price" value={user.priceDemand} onChange={(e)=>setInNumber(e)} required />
                            <span className='absolute right-0 bottom-0 top-0 bg-gray-50 text-sm text-gray-500 px-2 flex items-center'>{currency_symbol}</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                        <label htmlFor="biddingEnd" className="text-gray-500">Bid End <span className="text-red-500">*</span></label>
                        <input type="date" className="px-3 py-1 rounded-full bg-white border border-solid focus:border-1 focus:border-blue-500 transition-all duration-300" id="biddingEnd" name="biddingEnd" value={user.biddingEnd} onChange={(e)=>handleInputs(e)} required />
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                        <label htmlFor="biddingEnd" className="text-gray-500">Est Completion <span className="text-red-500">*</span></label>
                        <input type="text" className="px-3 py-1 rounded-full bg-white border border-solid focus:border-1 focus:border-blue-500 transition-all duration-300" id="estCompletion" name="estCompletion" placeholder='e.g. __ years | __ months | __ days' required />
                    </div>

                    <div className="grid grid-cols-1 gap-2">
                        <label htmlFor="type" className="text-gray-500">Select payment plan <span className="text-red-500">*</span></label>
                        <select className="px-3 py-1 rounded-full bg-white border border-solid focus:border-1 focus:border-blue-500 transition-all duration-300" id="type" name="type" defaultValue={paymentPlan} onChange={(e) => setpaymentPlan(e.target.value)} required>
                            <option value="">Select payment plan</option>
                            {
                                paymentPlans.map((option) => (
                                    <option key={option.id} value={option.name}>{option.name}</option>
                                ))
                            }
                        </select>
                    </div>

                    <div className="grid grid-cols-1 gap-2 col-span-2">
                        <label htmlFor="description" className="text-gray-500">Description</label>
                        <Editor apiKey={textEditorApiKey} id="description" textareaName='description' value={user.description} onEditorChange={(text) => setUser({...user, description: text})} />
                    </div>

                    <div className="grid grid-cols-1 gap-2 col-span-2">
                        <label htmlFor="images" className="text-black font-medium border border-solid border-gray-500 px-10 py-1 w-max rounded-full cursor-pointer">Upload property images</label>
                        <input type="file" className="hidden px-3 py-1 rounded-full bg-white border border-solid focus:border-1 focus:border-blue-500 transition-all duration-300" id="images" name="images" multiple onChange={(e) => multiImagesChange(e)} />
                    </div>

                    {
                        multiImages.length > 0 && (
                            <div className="grid grid-cols-1 gap-2 col-span-2">
                                <div className="flex flex-wrap">
                                {
                                    Array.from(multiImages).map((link, i) => {
                                        return (
                                            <div className="relative border border-solid mr-2 rounded" style={{width:"200px", height:"200px"}} key={i}>
                                                <Image src={URL.createObjectURL(link)} layout="fill" className="object-contain" alt='Multiple Images' />
                                            </div>
                                        )
                                    })
                                }
                                </div>
                            </div>
                        )
                    }

                    {/* Location Fields */}
                    <div className="pb-6 border-solid border-b shadow mt-4 rounded-xl overflow-hidden col-span-2">
                        <div className="p-4 bg-gray-900 w-full text-white">
                            <label htmlFor="">Location</label>
                        </div>
                        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-6 gap-x-10">
                            <div className="grid grid-cols-1 gap-2">
                                <label htmlFor="address" className="text-gray-500">Address <span className="text-red-500">*</span></label>
                                <input type="text" className="px-3 py-1 rounded-full bg-white border border-solid focus:border-1 focus:border-blue-500 transition-all duration-300" id="address" name="address" placeholder="Address" value={user.address} onChange={(e)=>handleInputs(e)} required />
                            </div>

                            <div className="grid grid-cols-1 gap-2">
                                <label htmlFor="country" className="text-gray-500">Select country <span className="text-red-500">*</span></label>
                                <select className="px-3 py-1 rounded-full bg-white border border-solid focus:border-1 focus:border-blue-500 transition-all duration-300" id="country" name="country" onChange={(e)=>{
                                    handleInputs(e)
                                    getStates(e.target.value)
                                }} required>
                                    <option value="">Select country</option>
                                    {
                                        countries.map((option) => (
                                            <option key={option.id} value={option.id}>{option.name + ' - ' + option.iso2}</option>
                                        ))
                                    }
                                </select>
                            </div>

                            <div className="grid grid-cols-1 gap-2">
                                <label htmlFor="city" className="text-gray-500">City <span className="text-red-500">*</span></label>
                                <input type="text" className="px-3 py-1 rounded-full bg-white border border-solid focus:border-1 focus:border-blue-500 transition-all duration-300" id="city" name="city" placeholder="City" value={user.city} onChange={(e)=>handleInputs(e)} required />
                            </div>

                            <div className="grid grid-cols-1 gap-2">
                                <label htmlFor="state" className="text-gray-500">Select state <span className="text-red-500">*</span></label>
                                <select className="px-3 py-1 rounded-full bg-white border border-solid focus:border-1 focus:border-blue-500 transition-all duration-300" id="state" name="state" defaultValue={countrySate} onChange={(e) => setCountrySate(e.target.value)} required>
                                    <option value="">Select state</option>
                                    {
                                        states.map((option) => (
                                            <option key={option.id} value={option.name}>{option.name}</option>
                                        ))
                                    }
                                </select>
                            </div>

                            <div className="grid grid-cols-1 gap-2">
                                <label htmlFor="zip" className="text-gray-500">Zip Code <span className="text-red-500">*</span></label>
                                <input type="text" className="px-3 py-1 rounded-full bg-white border border-solid focus:border-1 focus:border-blue-500 transition-all duration-300" id="zip" name="zip" placeholder="Zip Code" value={user.zip} onChange={(e)=>setInNumber(e)} required />
                            </div>
                        </div>
                    </div>

                    <div className="pb-6 border-solid border-b shadow mt-4 rounded-xl overflow-hidden col-span-2">
                        <div className="p-4 bg-gray-900 w-full text-white">
                            <label htmlFor="">Amineties <small className='text-gray-100'>(optional)</small></label>
                        </div>
                        <div className="grid grid-cols-1 gap-2 p-4">
                            {
                                aminitiesList.map((aminity, index) => {
                                    return <div key={index}>
                                        <div className='flex pb-2'>
                                            <input type="text" className="px-3 py-1 rounded-full bg-white border border-solid focus:border-1 focus:border-blue-500 transition-all duration-300" id="aminity" name="aminity" placeholder="Amineties" value={aminity.aminity} style={{flex:8}} onChange={(e) => changeAminityValue(e, index) } />
                                            {
                                                index > 0 && (
                                                    <button type='button' className='btn bg-red-500 w-max px-4 py-1 text-white rounded-full ml-2' onClick={()=>removeNewAnimity(index)} style={{flex:1}} >Remove</button>
                                                )
                                            }
                                        </div>
                                        {
                                            aminitiesList.length - 1 === index && (
                                                <div className='mt-2'>
                                                    <button type='button' className='btn bg-gray-900 w-max px-4 py-1 text-white rounded-full' onClick={() => addNewAnimity()} >Add New</button>
                                                </div>
                                            )
                                        }
                                    </div>
                                })
                            }
                        </div>
                    </div>

                </div>
                <div className="mt-4 flex">
                    {
                        property ? (
                            <>
                                <button className="btn bg-black text-white rounded-full px-4 py-1 mr-4 flex" disabled={loading ? true : false}>Update Property {
                                loading &&
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 128 128" xmlSpace="preserve" style={{marginLeft: '1rem'}}><g><path d="M64 9.75A54.25 54.25 0 0 0 9.75 64H0a64 64 0 0 1 128 0h-9.75A54.25 54.25 0 0 0 64 9.75z" fill="#252153" /><animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="1200ms" repeatCount="indefinite" /></g></svg>
                                }
                                </button>
                                <button type="button" className="btn bg-red-100 hover:bg-red-500 text-red-500 hover:text-white rounded-full px-4 py-1 mr-4 transition-all duration-300" onClick={()=>setProperty(null)}>Cancel</button>
                            </>
                        ) : (
                            <>
                                <button className="btn bg-black text-white rounded-full px-4 py-1 mr-4 flex flex-wrap" disabled={loading ? true : false}>Save {
                                loading &&
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 128 128" xmlSpace="preserve" style={{marginLeft: '1rem'}}><g><path d="M64 9.75A54.25 54.25 0 0 0 9.75 64H0a64 64 0 0 1 128 0h-9.75A54.25 54.25 0 0 0 64 9.75z" fill="#252153" /><animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="1200ms" repeatCount="indefinite" /></g></svg>
                                }
                                </button>
                                <Link href={'/seller/properties'}>
                                    <a className="btn bg-red-100 hover:bg-red-500 text-red-500 hover:text-white rounded-full px-4 py-1 mr-4 transition-all duration-300">Cancel</a>
                                </Link>
                            </>
                        )
                    }
                </div>
            </form>
        </div>
    )
}

export default PropertyForm