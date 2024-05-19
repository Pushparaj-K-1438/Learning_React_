import { SWIGGY_IMG, STAR_IMG } from "../utils/constants"
const ItemList = ({ items }) => {
    console.log(items);
    return (
        <div className="flex flex-col gap-3 px-6 pb-5">
            {
                items.map((item) => (
                    <div className="border-b flex justify-between gap-10 py-6" key={item?.card?.info?.id}>
                        <div className="flex flex-col gap-2 w-10/12">
                            <div className="flex flex-col ">
                                <h3 className="font-bold">
                                    {item?.card?.info?.name}
                                </h3>
                                <p>
                                    ₹ {item?.card?.info?.price ? item?.card?.info?.price / 100 : item?.card?.info?.defaultPrice / 100}
                                </p>
                            </div>
                            <p className="flex items-center">
                                {STAR_IMG}
                                <span className="text-xs font-semibold text-green-800">
                                    {item?.card?.info?.ratings?.aggregatedRating?.rating}
                                    <span className="text-gray-400">
                                        ({item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})
                                    </span>
                                </span>
                            </p>
                            <p className="text-gray-500">
                                {item?.card?.info?.description}
                            </p>
                        </div>
                        <div className="flex w-2/12">
                            <img className="rounded-lg h-32 object-cover w-full" src={SWIGGY_IMG + item?.card?.info?.imageId} />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ItemList