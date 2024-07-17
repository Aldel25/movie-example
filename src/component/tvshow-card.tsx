interface Props {
  name: String;
  poster_path: String;
  first_air_date: string;
  size: String;
}
const TvShowCard = (props: Props) => {
  const { name, poster_path, first_air_date, size } = props;

  return (
    <div className={`flex flex-col ${size}`}>
      <img src={`https://image.tmdb.org/t/p/w185/${poster_path}`} />
      <label className="font-semibold">{name}</label>
      <p>{first_air_date}</p>
    </div>
  );
};

export default TvShowCard;
