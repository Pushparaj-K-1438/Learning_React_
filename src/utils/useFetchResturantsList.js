import { RESTURANT_LIST }  from "../utils/constants"
import { useState, useEffect } from "react";

const useFetchResturantsList = () => {
    const [listOfFilteredData, setListOfFilteredData] = useState([]);
    const [filteredSearchData, setFilteredSearchData] = useState([]);
    useEffect (() => {
        resturantList();
    },[])
    const resturantList = async () =>{
        const fetchedList = await fetch(RESTURANT_LIST);
        const fetchedJson = await fetchedList.json();
        const  resturantsListData = fetchedJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfFilteredData(resturantsListData);
        setFilteredSearchData(resturantsListData);
    };

    const searchResturants = (searchInput) => {
        const filteredData = listOfFilteredData.filter(
            (filteredSearch) => filteredSearch.info.name.toLowerCase().includes(searchInput.toLowerCase())
        );
        setFilteredSearchData(filteredData);
        console.log(filteredData);
    }

    const filterBasedOnRating = () =>{
        const filteredRating = listOfFilteredData.filter(
            (filtededData) => filtededData.info.avgRating > 4.3
        );
        setFilteredSearchData(filteredRating);
    }
    return {listOfFilteredData, filteredSearchData, searchResturants, filterBasedOnRating};
}

export default useFetchResturantsList;