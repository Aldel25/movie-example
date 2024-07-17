import React, { useEffect, useState } from "react";

import { ResponseMovie } from "../../../services/movie/type";
import { getNowPlaying } from "../../../services/movie";
import { useQuery } from "../../../hooks/useQuery";

export const useMovieList = () => {
  const query = useQuery();
  const page = (query.get("page") !== null ? query.get("page") : 1) as String;

  const [loading, setLoading] = useState(false);
  const [nowPlayingData, setNowPlayingData] = useState<ResponseMovie>();

  useEffect(() => {
    fetchMovies();
  }, [page]);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const response = await getNowPlaying(page as string);

      setNowPlayingData(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return { loading, nowPlayingData };
};

export default useMovieList;
