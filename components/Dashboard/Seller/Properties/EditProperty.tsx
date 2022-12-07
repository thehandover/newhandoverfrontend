import axios from 'axios';
import { parseCookies } from 'nookies';
import React, { useContext, useState } from 'react'
import { MainContext } from '../../../../context/MainContext';
import { Base_URL } from "../../../../config/constants"

const EditProperty = (props: any) => {

    const initialState = {
		propertyTitle: props.property.propertyTitle,
		area: props.property.area,
		bedrooms: props.property.bedrooms,
		floors: props.property.floors,
		propertyType: props.property.propertyType,
		bathrooms: props.property.bathrooms,
		priceDemand: props.property.priceDemand,
		biddingEnd: props.property.biddingEnd.split('T')[0],
		address: props.property.location.address,
		city: props.property.location.city,
		state: props.property.location.state,
		zip: props.property.location.zip,
		description: props.property.description,
	};
    const {setAlert, setAlertMessage} = useContext(MainContext)
	const [user, setUser] = useState(initialState);
	const [propertyType, setpropertyType] = useState(props.property.propertyType);
	const [countrySate, setCountrySate] = useState(props.property.location.state);
    const [loading, setLoading] = useState(false)

    const {token}: any = parseCookies()

	const handleInputs = (e: any) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

    const propertyLists = async () => {
        let res = await fetch(`${Base_URL}/api/seller/properties`,{
            method: "GET",
            headers: {
                "Authorization" : `Bearer ${token}`
            }
        }).then(response => response.json())
        return res
    }

	const handleSubmit = async (e: any) => {
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
            url: `${'https://handoverbackendapp.herokuapp.com'}/property/edit/${props.property._id}`,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            data: formdata
        }).then((response: any) => {
            return response
        }).catch((err: any) => {
            console.log("error in opportunties filter request", err.response);
        });

        if(result?.status==200)
        {
            await setUser(initialState)
            setAlert(true)
            setAlertMessage('Property updated successfully')
            setCountrySate('')
            props.setProperty(null)
            let properties: any = await propertyLists()
            props.setProperties(properties.data)
        }
        setLoading(false)
	};

	const property_types = [
		{
		  value: 'Constructed',
		  label: 'Constructed',
		},
		{
		  value: 'Non Constructed',
		  label: 'Non Constructed',
		}
	];

	const states = [
		{
		  value: 'Dubai',
		  label: 'Dubai',
		}
	];

    return (
        <>
            <form onSubmit={(e: any)=>handleSubmit(e)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-x-10 pb-6 border-solid border-b">
                    <div className="grid grid-cols-1 gap-2">
                        <label htmlFor="propertyTitle" className="text-gray-500">Property title <span className="text-red-500">*</span></label>
                        <input type="text" className="px-3 py-1 rounded-full bg-white border border-solid focus:border-1 focus:border-blue-500 transition-all duration-300" id="propertyTitle" name="propertyTitle" placeholder="Property title" value={user.propertyTitle} onChange={(e)=>handleInputs(e)} />
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                        <label htmlFor="area" className="text-gray-500">Area <span className="text-red-500">*</span></label>
                        <input type="text" className="px-3 py-1 rounded-full bg-white border border-solid focus:border-1 focus:border-blue-500 transition-all duration-300" id="area" name="area" placeholder="Area" value={user.area} onChange={(e)=>handleInputs(e)} />
                    </div>
                    <div className="grid grid-cols-2 gap-4 gap-x-10 col-span-2">
                        <div className="flex flex-col">
                            <label htmlFor="description" className="text-gray-500">Description</label>
                            <textarea className="px-3 py-1 rounded-lg bg-white border border-solid focus:border-1 focus:border-blue-500 transition-all duration-300" id="description" name="description" placeholder="Description" value={user.description} onChange={(e)=>handleInputs(e)} rows={5}></textarea>
                        </div>
                        <div>
                            <div className="grid grid-cols-1 gap-2 mb-4">
                                <label htmlFor="bedrooms" className="text-gray-500">Bedrooms <span className="text-red-500">*</span></label>
                                <input type="text" className="px-3 py-1 rounded-full bg-white border border-solid focus:border-1 focus:border-blue-500 transition-all duration-300" id="bedrooms" name="bedrooms" placeholder="Bedrooms" value={user.bedrooms} onChange={(e)=>handleInputs(e)} />
                            </div>
                            <div className="grid grid-cols-1 gap-2">
                                <label htmlFor="floors" className="text-gray-500">Floors <span className="text-red-500">*</span></label>
                                <input type="text" className="px-3 py-1 rounded-full bg-white border border-solid focus:border-1 focus:border-blue-500 transition-all duration-300" id="floors" name="floors" placeholder="Floors" value={user.floors} onChange={(e)=>handleInputs(e)} />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                        <label htmlFor="bathrooms" className="text-gray-500">Bathrooms <span className="text-red-500">*</span></label>
                        <input type="text" className="px-3 py-1 rounded-full bg-white border border-solid focus:border-1 focus:border-blue-500 transition-all duration-300" id="bathrooms" name="bathrooms" placeholder="Bathrooms" value={user.bathrooms} onChange={(e)=>handleInputs(e)} />
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                        <label htmlFor="priceDemand" className="text-gray-500">Price Demand <span className="text-red-500">*</span></label>
                        <input type="text" className="px-3 py-1 rounded-full bg-white border border-solid focus:border-1 focus:border-blue-500 transition-all duration-300" id="priceDemand" name="priceDemand" placeholder="Price Demand" value={user.priceDemand} onChange={(e)=>handleInputs(e)} />
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                        <label htmlFor="biddingEnd" className="text-gray-500">Bid End <span className="text-red-500">*</span></label>
                        <input type="date" className="px-3 py-1 rounded-full bg-white border border-solid focus:border-1 focus:border-blue-500 transition-all duration-300" id="biddingEnd" name="biddingEnd" value={user.biddingEnd} onChange={(e)=>handleInputs(e)} />
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                        <label htmlFor="type" className="text-gray-500">Select property type <span className="text-red-500">*</span></label>
                        <select className="px-3 py-1 rounded-full bg-white border border-solid focus:border-1 focus:border-blue-500 transition-all duration-300" id="type" name="type" defaultValue={propertyType} onChange={(e) => setpropertyType(e.target.value)}>
                            <option value="">Select property type</option>
                            {
                                property_types.map((option) => (
                                    <option key={option.value} value={option.value}>{option.label}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                        <label htmlFor="address" className="text-gray-500">Address <span className="text-red-500">*</span></label>
                        <input type="text" className="px-3 py-1 rounded-full bg-white border border-solid focus:border-1 focus:border-blue-500 transition-all duration-300" id="address" name="address" placeholder="Address" value={user.address} onChange={(e)=>handleInputs(e)} />
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                        <label htmlFor="city" className="text-gray-500">City <span className="text-red-500">*</span></label>
                        <input type="text" className="px-3 py-1 rounded-full bg-white border border-solid focus:border-1 focus:border-blue-500 transition-all duration-300" id="city" name="city" placeholder="City" value={user.city} onChange={(e)=>handleInputs(e)} />
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                        <label htmlFor="state" className="text-gray-500">Select state <span className="text-red-500">*</span></label>
                        <select className="px-3 py-1 rounded-full bg-white border border-solid focus:border-1 focus:border-blue-500 transition-all duration-300" id="state" name="state" defaultValue={countrySate} onChange={(e) => setCountrySate(e.target.value)}>
                            <option value="">Select state</option>
                            {
                                states.map((option) => (
                                    <option key={option.value} value={option.value}>{option.label}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                        <label htmlFor="zip" className="text-gray-500">Zip Code <span className="text-red-500">*</span></label>
                        <input type="text" className="px-3 py-1 rounded-full bg-white border border-solid focus:border-1 focus:border-blue-500 transition-all duration-300" id="zip" name="zip" placeholder="Zip Code" value={user.zip} onChange={(e)=>handleInputs(e)} />
                    </div>
                </div>
                <div className="mt-4 flex">
                    <button className="btn bg-black text-white rounded-full px-4 py-1 mr-4 flex" disabled={loading ? true : false}>Update Property {
                    loading &&
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 128 128" xmlSpace="preserve" style={{marginLeft: '1rem'}}><g><path d="M64 9.75A54.25 54.25 0 0 0 9.75 64H0a64 64 0 0 1 128 0h-9.75A54.25 54.25 0 0 0 64 9.75z" fill="#252153" /><animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="1200ms" repeatCount="indefinite" /></g></svg>
                    }
                    </button>
                    <button type="button" className="btn bg-red-100 hover:bg-red-500 text-red-500 hover:text-white rounded-full px-4 py-1 mr-4 transition-all duration-300" onClick={()=>props.setProperty(null)}>Cancel</button>
                </div>
            </form>
        </>
    )
}

export default EditProperty