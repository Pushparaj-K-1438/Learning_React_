import { FoodBlock } from "./FoodBlock";
import foodItems from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfFilteredData, setListOfFilteredData] = useState(foodItems);
  return (
    <div>
      <button onClick={() =>{
        const filteredData = listOfFilteredData.filter(
          (res) => res.info.avgRating > 4.3
        )
        setListOfFilteredData(filteredData);
      }}>click to filter Data</button>
      <div className="body_wrap">
        {listOfFilteredData.map((resturant) => (
          <FoodBlock key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  )
}
export default Body;
