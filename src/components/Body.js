import { FoodBlock, PromotedFoodBlock } from "./FoodBlock";
import { useState } from "react";
import { Link } from "react-router-dom";
import useFetchResturantsList from "../utils/useFetchResturantsList";


const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const { filteredSearchData, searchResturants, filterBasedOnRating } = useFetchResturantsList();
  const PromotedBlock = PromotedFoodBlock(FoodBlock);

  return (
    <div className="flex justify-center">
      <div className="container flex flex-col gap-8 m-6">
        <div className="flex gap-4">
          <div className="flex gap-3">
            <input type="text" className="rounded border" value={searchInput} onChange={(e) => { setSearchInput(e.target.value); }} />
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 rounded px-4 py-1" onClick={() => searchResturants(searchInput)}>Search</button>
          </div>
          <button onClick={() => { filterBasedOnRating() }} className="bg-gray-300 hover:bg-gray-400 text-gray-800 rounded px-4 py-1">click to filter Data</button>
        </div>
        <div className="flex flex-wrap gap-6">
          {filteredSearchData.map((resturant) => (
            <Link key={resturant.info.id} to={"/resturant/" + resturant.info.id} className="card-flex flex flex-col gap-4 bg-slate-200 p-4 rounded">
              {
                resturant.info.isNewlyOnboarded ? <PromotedBlock resData={resturant} /> : <FoodBlock resData={resturant} />
              }
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Body;
