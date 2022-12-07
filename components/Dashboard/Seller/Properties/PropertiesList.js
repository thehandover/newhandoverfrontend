import React, { useContext, useState } from 'react'
import { Base_URL } from '../../../../config/constants';
import EditProperty from './EditProperty';
import styles from "./Properties.module.css"
import { MainContext } from '../../../../context/MainContext';
import Property from './Property';
import PropertyForm from './PropertyForm';

const PropertiesList = (props) => {

    const {setAlert, setAlertMessage} = useContext(MainContext)
    const [property, setProperty] = useState(null)
    const [properties, setProperties] = useState(props.properties)

    const delProperty = async (id) => {
        let res = await fetch(`${Base_URL}/api/seller/properties/delete`, {
            method: "POST",
            body: JSON.stringify({
                _id: id
            })
        }).then(response => response.json())
        if(res.status!=0)
        {
            setProperties(properties.filter((property) => property._id !== id))
            setAlert(true)
            setAlertMessage(res.data.Message)
        }
    }

    const editProperty = async (property_data) => {
        setProperty(property_data)
    }

    return (
        property == null ? (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                {
                    properties.map((property, index) => {
                        return (
                            <Property key={index} property={property} delProperty={delProperty} editProperty={editProperty} />
                        )
                    })
                }
            </div>
        ) : (
            <PropertyForm property={property} setProperty={setProperty} setProperties={setProperties} />
            // <div className="mt-4 bg-white rounded-xl">
            //     <EditProperty property={property} setProperty={setProperty} setProperties={setProperties} />
            // </div>
        )
    )
}

export default PropertiesList