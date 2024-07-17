import type { Movie, ResponseMovie } from "../../services/movie/type";
import { useEffect, useState } from "react";

import MovieCard from "../../component/movie-card";
import { getNowPlaying } from "../../services/movie";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../../hooks/useQuery";

const Movies = () => {
  const navigate = useNavigate();
  const query = useQuery();
  const page = (query.get("page") !== null ? query.get("page") : 1) as String;

  const [loading, setLoading] = useState(false);
  const [nowPlayingData, setNowPlayingData] = useState<ResponseMovie>();

  // const query = useQuery();
  // const page = (query.get("page") !== null ? query.get("page") : 1) as String;

  useEffect(() => {
    fetchMovies();
  }, []);

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

  const nextPage = () => {
    // setPage((prev) => prev + 1);
    const numPage = Number(page);
    navigate(`?page=${numPage + 1}`);
  };

  const backPage = () => {
    const numPage = Number(page);
    navigate(`?page=${numPage - 1}`);
  };

  const toDetailMovie = async (id: number) => {
    try {
      // const response = await getMovieDetails(id.toString());
      // setSelectedMovie(response);
      navigate(`/detail/${id}`); // Navigasi ke halaman detail dengan ID
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
    </div>
  );
};

export default Movies;
