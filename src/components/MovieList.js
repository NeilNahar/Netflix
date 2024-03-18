import MovieCard from "./MovieCard";

const MovieList = (props) => {
  // if(!props.poster_path) return null
  return (
    <div className="flex flex-col gap-8">
      <p className="text-xl text-white font-semibold">{props.title}</p>
      <div className="flex overflow-x-auto scrollbar-hide">
        <div className="flex gap-8">
          {props.list?.map((movie) => {
            return <MovieCard key={movie.id} poster_path={movie.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
