import { FoodBlock } from "./FoodBlock";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfFilteredData, setListOfFilteredData] = useState([]);
  const [filteredSearchData, setFilteredSearchData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const result = await data.json();
    setListOfFilteredData(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredSearchData(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  return (
    <div>
      <div className="filter_div">
        <div className="search_div">
          <input type="text" className="input_txt" value={searchInput} onChange={(e) => { setSearchInput(e.target.value); }} />
          <button className="search_btn" onClick={() => {
            const filteredData = listOfFilteredData.filter(
              (filteredSearch) => filteredSearch.info.name.toLowerCase().includes(searchInput.toLowerCase())
            );
            setFilteredSearchData(filteredData);
          }}>Search</button>
        </div>
        <button onClick={() => {
          const filteredData = listOfFilteredData.filter(
            (res) => res.info.avgRating > 4
          )
          setListOfFilteredData(filteredData);
        }}>click to filter Data</button>
      </div>
      <div className="body_wrap">
        {filteredSearchData.map((resturant) => (
          <FoodBlock key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  )
}
export default Body;
