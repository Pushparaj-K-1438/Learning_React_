import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";


const Resturant = () => {
    const {resId} = useParams();
    const resInfo = useResturantMenu(resId);

    if(resInfo === null) return null;
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