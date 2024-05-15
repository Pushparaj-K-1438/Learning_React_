import { FoodBlock } from "./FoodBlock";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetchResturantsList from "../utils/useFetchResturantsList";


const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const {listOfFilteredData, filteredSearchData, searchResturants, filterBasedOnRating} = useFetchResturantsList();

  return (
    <div>
      <div className="filter_div">
        <div className="search_div">
          <input type="text" className="input_txt" value={searchInput} onChange={(e) => { setSearchInput(e.target.value); }} />
          <button className="search_btn" onClick={() => searchResturants(searchInput)}>Search</button>
        </div>
        <button onClick={() => {filterBasedOnRating()}}>click to filter Data</button>
      </div>
      <div className="body_wrap">
        {filteredSearchData.map((resturant) => (
          <Link key={resturant.info.id} to={"/resturant/"+resturant.info.id}>
            <FoodBlock resData={resturant} />
          </Link>
        ))}
      </div>
    </div>
  )
}
export default Body;
