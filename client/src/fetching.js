import axios from "axios";

export const getAnimals = ( searchQuery, selectedCategory, sortOrder ) => {
    return axios.get("http://localhost:3001/read", {params: { searchQuery, selectedCategory, sortOrder } })
};
