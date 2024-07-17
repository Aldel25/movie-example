import type { Movie, ResponseMovie } from "../../services/movie/type";
import { getMovieId, getNowPlaying } from "../../services/movie";
import { useEffect, useState } from "react";

import MovieCard from "../../component/movie-card";
import { UseMovieList } from "./hooks/useMovieList";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../../hooks/useQuery";

const Movies = () => {
  const navigate = useNavigate();

  const { loading, nowPlayingData } = UseMovieList();

  const query = useQuery();
  const page = (query.get("page") !== null ? query.get("page") : 1) as string;

  const [selectedMovie, setSelectedMovie] = useState<Movie>();

  const nextPage = () => {
    const numPage = Number(page);
    navigate(`?page=${numPage + 1}`);
  };

  const backPage = () => {
    const numPage = Number(page);
    if (numPage > 1) {
      navigate(`?page=${numPage - 1}`);
    }
  };

  const toDetailMovie = async (id: number) => {
    try {
      const response = await getMovieId(id.toString());
      setSelectedMovie(response);
      navigate(`/detail/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col p-5">
      <label className="text-xl font-semibold p-3 ]">Movies List</label>
      {!loading ? (
        <div className="flex flex-row flex-wrap gap-5 justify-center">
          {nowPlayingData?.results.map((item: Movie) => (
            <MovieCard
              key={item.id}
              poster_path={item.poster_path}
              title={item.title}
              release_date={item.release_date}
              size="w-40"
              onClick={() => toDetailMovie(item.id)} // Tambahkan onClick handler
            />
          ))}
        </div>
      ) : (
        <div>Loading ...</div>
      )}
      <div className="flex flex-row justify-center gap-3 p-8">
        <button
          onClick={backPage}
          className="bg-gray-300 p-2 rounded-sm"
          disabled={Number(page) <= 1}
        >
          Back
        </button>
        <button onClick={nextPage} className="bg-gray-300 p-2 rounded-sm">
          Next
        </button>
      </div>

      {selectedMovie && (
        <div className="p-5 border rounded mt-5">
          <img
            src={`https://image.tmdb.org/t/p/original/${selectedMovie.poster_path}`}
            alt={selectedMovie.title}
          />
          <p>{selectedMovie.release_date}</p>
          <p>{selectedMovie.vote_average}</p>
          <p>{selectedMovie.popularity}</p>
          <p>{selectedMovie.overview}</p>
        </div>
      )}
    </div>
  );
};

export default Movies;
