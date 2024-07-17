import { API } from ".";
import { TvShowResponse } from "./type";

const getTvShow = async () => {
  try {
    const response = await API.get("/tv/airing_today?language=en-US&page=1");

    return response.data as TvShowResponse;
  } catch (error) {
    console.log(error);
  }
};

export { getTvShow };
