import { movieImageURL } from "../utils/constant";

const MovieCard = (props) => {
  const imageURL = movieImageURL + props.poster_path;
  return (
    <div className="w-44">
      <img className="" src={imageURL} alt="Movieimage" />
    </div>
  );
};

export default MovieCard;
