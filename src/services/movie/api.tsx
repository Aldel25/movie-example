import { DetailMovie, Movie, ResponseMovie } from "./type";

import { API } from ".";

const getNowPlaying = async (page: String) => {
  try {
    const response = await API.get(
      `/movie/now_playing?language=en-US&page=${page}`
    );

    return response.data as ResponseMovie;
  } catch (error) {
    console.log(error);
  }
};
const getMovieId = async (id: string) => {
  try {
    const response = await API.get(`/movie/${id}language=en-US`);
    return response.data as DetailMovie;
  } catch (error) {
    console.error(error);
  }
};

export { getNowPlaying, getMovieId };
