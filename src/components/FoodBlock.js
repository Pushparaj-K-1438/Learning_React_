import { SWIGGY_IMG } from "../utils/constants";

export const FoodBlock = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } = resData?.info;
    return (
        <div className="care_wrap">
            <img src={SWIGGY_IMG + cloudinaryImageId} className="food_img" />
            <div className="details_wrap">
                <h3>{name}</h3>
                <p>{cuisines.join(", ")}</p>
                <p>{avgRating}</p>
                <p className="txt_captilize">{costForTwo}</p>
            </div>
        </div>
    );
}