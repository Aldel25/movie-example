import React, { useEffect, useState } from "react";

import { DetailMovie } from "../../services/movie/type";
import { getMovieId } from "../../services/movie";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [movie, setMovie] = useState<DetailMovie>();

  useEffect(() => {
    fetchMovieById();
  }, [id]);

  const fetchMovieById = async () => {
    try {
      setLoading(true);
      const response = await getMovieId(id as string);
      setMovie(response);
      setLoading(false);
    } catch (error) {}
  };

  return (
    <div className="flex flex-row gap-8 p-5">
      <img
        src={`https://image.tmdb.org/t/p/w342/${movie?.poster_path}`}
        alt={movie?.title}
        className="w-60 h-auto"
      />
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold">{movie?.title}</h1>
        <p className="text-gray-500">{movie?.release_date}</p>
        <p>
          <strong>Overview : </strong> {movie?.overview}
        </p>
        <p>
          <strong>Rating : </strong> {movie?.vote_average}
        </p>
        <p>
          <strong>Popularity : </strong> {movie?.vote_average}
        </p>
      </div>
    </div>
  );
};

export default Detail;
