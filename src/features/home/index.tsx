import React, { useEffect, useState } from "react";
import { Trending, TrendingResponse } from "../../services/trending/type";

import TvShowCard from "../../component/tvshow-card";
import { getTrending } from "../../services/trending";

const Home = () => {
  const [nowPlayingData, setNowPlayingData] = useState<TrendingResponse>();

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await getTrending();
      setNowPlayingData(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col m-3">
      <label className="text-2xl font-semibold mb-5">TRENDING MOVIES</label>
      <div className="flex flex-row flex-wrap gap-2 justify-center">
        {nowPlayingData?.results.map((item: Trending) => (
          <TvShowCard
            poster_path={item.poster_path}
            name={item.title}
            first_air_date={item.release_date}
            size="w-60"
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
