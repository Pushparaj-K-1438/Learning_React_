import {FoodBlock} from "./FoodBlock";
import {foodItems} from "../utils/mockData";


const Body = () => (
    <div className="body_wrap">
        {
            foodItems.map((itamsList) => (<FoodBlock key={itamsList.info.id} foodItems={itamsList} />))
        }
    </div>
)
export default Body;