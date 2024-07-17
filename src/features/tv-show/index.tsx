import React, { useEffect, useState } from "react";

import { getTvShow } from "../../services/tv-show";
import type { TvShow, TvShowResponse } from "../../services/tv-show/type";
import TvShowCard from "../../component/tvshow-card";

const TvShow = () => {
  const [nowPlayingData, setNowPlayingData] = useState<TvShowResponse>();

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await getTvShow();

      setNowPlayingData(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col m-3">
      <label className="text-2xl font-semibold mb-5">TV Show</label>
      <div className="flex flex-row flex-wrap gap-2 justify-center">
        {nowPlayingData?.results.map((item: TvShow) => (
          <TvShowCard
            poster_path={item.poster_path}
            name={item.name}
            first_air_date={item.first_air_date}
            size="w-40"
          />
        ))}
      </div>
    </div>
  );
};

export default TvShow;
