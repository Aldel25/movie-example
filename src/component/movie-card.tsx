interface Props {
  title: string;
  poster_path: string;
  release_date: string;
  onClick: () => void;
  size?: string;
}
const MovieCard = (props: Props) => {
  const { title, poster_path, release_date, size, onClick } = props;
  return (
    <div className={`flex flex-col cursor-pointer ${size}`} onClick={onClick}>
      {/* di tmdb terdapat beberapa ukuran untuk load gambar */}
      <img src={`https://image.tmdb.org/t/p/w185/${poster_path}`} />
      <label className="font-semibold">{title}</label>
      <p>{release_date}</p>
    </div>
  );
};

export default MovieCard;
