import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";
import ResturantFoodList from "./ResturantFoodList";
import { useState } from "react";


const Resturant = () => {
  const { resId } = useParams();
  const resInfo = useResturantMenu(resId);
  const [collapseAccordian, setCollapseAccordian] = useState(0);
  if (resInfo === null) return null;
  const { name, avgRating, totalRatingsString, costForTwoMessage, avgRatingString } = resInfo?.cards[2]?.card?.card?.info;
  const restFoodList = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (filtered) => { 
      const cardType = filtered.card?.card?.["@type"];
      return cardType === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" || 
            cardType === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";
    }
  );
  return (
    <div className="flex justify-center mt-6">
      <div className="container flex flex-col gap-6 p-0 md:px-60">
        <div className="flex flex-col gap-2 items-center">
          <h1 className="font-bold text-xl">{name}</h1>
          <p> 🌟 {avgRatingString} ({avgRating}<span>{totalRatingsString}</span>) -  <span>{costForTwoMessage}</span></p>
        </div>
        {
          restFoodList.map((foodList, index)=> (
            <ResturantFoodList key={foodList?.card?.card?.title} data={foodList?.card?.card} collapseAccordian={index === collapseAccordian ? true : false} setCollapseAccordian={() => setCollapseAccordian(index)}/>
          ))
        }
      </div>
    </div>
  )
}

export default Resturant