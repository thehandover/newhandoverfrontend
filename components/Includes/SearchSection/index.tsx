import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { MainContext } from "../../../context/MainContext";
import styles from "./SearchSection.module.css"
import propertyTypes from "../../../database/property_types.json"

const SearchSection = () => {

    const {search, setSearch} = useContext(MainContext)
    const [isAdvanceSearch, setIsAdvanceSearch] = useState(false)
    const router = useRouter()

    const searchSubmit = (e: any) => {
        e.preventDefault()
        let searchString = '';
        if(isAdvanceSearch==true)
        {
            searchString = `minPrice=${search.minPrice}&maxPrice=${search.maxPrice}`;
        }
        else
        {
            searchString = `propertyType=${search.property_type}&city=${search.city}&text=${search.text}`;
        }
        router.push(`/opportunities?${searchString}`)
    }

    return (
        <>
        {/* Start of Search Bar  */}
        <div className="container-search py-10 mx-auto">
            <div className={`search-wrapper p-2 rounded-lg ${isAdvanceSearch==true ? 'lg:rounded-3xl': 'lg:rounded-full'}`}>
                <form onSubmit={(e)=>searchSubmit(e)}>
                    <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-9 sm:grid-cols-2 w-full">
                        {
                            isAdvanceSearch == true ? (
                                <>
                                <input type="text" placeholder="Min price" className="px-3 py-1 rounded-full lg:col-span-4" value={search.minPrice} onChange={(e)=>setSearch({...search, minPrice: e.target.value})} />
                                <input type="text" placeholder="Max price" className="px-3 py-1 rounded-full lg:col-span-3" value={search.maxPrice} onChange={(e)=>setSearch({...search, maxPrice: e.target.value})} />
                                </>
                            ) : (
                                <>
                                    <input type="text" placeholder="What are you looking for ?" className="px-3 py-1 w-full lg:col-span-3 rounded-full" value={search.text} onChange={(e)=>setSearch({...search, text: e.target.value})} />
                                    <select className="px-3 py-1 w-full lg:col-span-2 rounded-full" onChange={(e)=>setSearch({...search, property_type: e.target.value})}>
                                        <option value="">Property Type</option>
                                        {
                                            propertyTypes.map((type: any, index: any) => {
                                                return <option key={index} value={type.name}>{type.name}</option>
                                            })
                                        }
                                    </select>
                                    <input className="px-3 py-1 lg:col-span-2 w-full rounded-full" onChange={(e)=>setSearch({...search, city: e.target.value})} placeholder="Cities" />
                                </>
                            )
                        }
                        <div className="flex items-center justify-end text-right w-full text-3xl lg:col-span-2">
                            <div className={`${styles.advanceSearchIcon} ${isAdvanceSearch == true ? styles.activeAdvanceSearchIcon : ''} w-12 mx-2 mr-5 cursor-pointer bg-gray-300 py-2 px-1 rounded-lg`} onClick={()=>setIsAdvanceSearch(!isAdvanceSearch)}>
                                <div className={`${styles.line1} relative border-b-2 border-black border-solid w-full rounded-full`}></div>
                                <div className={`${styles.line2} relative border-b-2 border-black border-solid my-2 w-full rounded-full`}></div>
                                <div className={`${styles.line3} relative border-b-2 border-black border-solid w-full rounded-full`}></div>
                            </div>
                            <button type="submit" className="w-full rounded-full">Search <span className="mdi mdi-magnify" /></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        {/* end of search Bar  */}
        </>
    );
};

export default SearchSection;