import {RESTURANT_FOOD_LIST} from "./constants"
import { useEffect, useState } from "react";


const useResturantMenu = (resId) => {
    const [resInfo, useResInfo] = useState(null)
    useEffect(() =>{
        fetchResturantdata();
    },[])

    const fetchResturantdata = async () =>{
        const fetchedData = await fetch(RESTURANT_FOOD_LIST + resId);
        const fetchedJson = await fetchedData.json();
        useResInfo(fetchedJson.data);
    }
    return resInfo;
}
export default useResturantMenu;