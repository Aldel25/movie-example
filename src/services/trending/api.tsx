import { API } from ".";
import { TrendingResponse } from "./style";

const getTrending = async () => {
  try {
    const response = await API.get("/trending/movie/day?language=en-US");

    return response.data as TrendingResponse;
  } catch (error) {
    console.log(error);
  }
};

export { getTrending };
