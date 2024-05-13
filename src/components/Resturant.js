import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import {RESTURANT_FOOD_LIST} from "../utils/constants"


const Resturant = () => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchResturantData();
    }, []);
    const {resId} = useParams();

    const fetchResturantData = async () =>{
        const restData = await fetch(RESTURANT_FOOD_LIST+resId);
        const restResult = await restData.json();
        setResInfo(restResult.data);
        console.log(restResult.data);
    }
    if(resInfo === null) return false;
    const {name,avgRating,totalRatingsString,locality,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  return (
    <div>
        <h1>{name}</h1>
        <p>{avgRating}<span>{totalRatingsString}</span><span>.</span> <span>{costForTwoMessage}</span></p>
        <p>{locality}</p>
        <ul>
            {itemCards.map(menuList => <li key={menuList?.card?.info?.id}>{menuList?.card?.info?.name} - RS {menuList?.card?.info?.price / 100}</li>)}
        </ul>
    </div>
  )
}

export default Resturant