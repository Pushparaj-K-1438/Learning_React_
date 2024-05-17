import { SWIGGY_IMG } from "../utils/constants";

export const FoodBlock = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } = resData?.info;
    return (
        <div className="flex flex-col gap-4 bg-slate-200">
            <img src={SWIGGY_IMG + cloudinaryImageId} className="h-36 object-cover rounded" />
            <div className="details_wrap">
                <h3 className="font-bold">{name}</h3>
                <p>{cuisines.join(", ")}</p>
                <p>{avgRating}</p>
                <p className="txt_captilize">{costForTwo}</p>
            </div>
        </div>
    );
}

export const PromotedFoodBlock = (FoodBlock) => {
    return (props) => {
        return(
            <div>
                <label className="absolute bg-lime-600 px-2 rounded-sm text-white">New</label>
                <FoodBlock {...props}/>
            </div>
        )
    }

}