import { useState } from "react";
import ItemList from "./ItemList";

const ResturantFoodList = ({ data, collapseAccordian, setCollapseAccordian}) => {
    const toggleAccordian = () => {
        // setCollapseAccordian(!collapseAccordian)
        setCollapseAccordian()
    }
    return (
        <div className="flex flex-col shadow-xl border-b">
            <div className="flex justify-between w-full px-6 pb-5 cursor-pointer" onClick={toggleAccordian}>
                <p>{data?.title} ({data?.itemCards ? data?.itemCards.length : data?.categories.length})</p>
                <span>🔽</span>
            </div>
            {collapseAccordian && <ItemList key={data?.title} items={data?.itemCards ? data?.itemCards : data?.categories}/>}
        </div>
    )
}

export default ResturantFoodList;