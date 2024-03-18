import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const AiMoviesResult = () => {
  const {AIMovieName,AIMovieResult} = useSelector((state) => state.ai);
  if(!AIMovieName || !AIMovieResult) return null
  return (
    <div className="bg-black text-white">
      <h2 className="text-center text-xl py-2">AI movies Recommendations</h2>
      <div className="flex flex-col gap-16 py-2 ps-16 relative bg-opacity-50">
        <MovieList title={AIMovieName[0]} list={AIMovieResult[0]} />
        <MovieList title={AIMovieName[1]} list={AIMovieResult[1]} />
        <MovieList title={AIMovieName[2]} list={AIMovieResult[2]} />
        <MovieList title={AIMovieName[3]} list={AIMovieResult[3]} />
        <MovieList title={AIMovieName[4]} list={AIMovieResult[4]} />
      </div>
    </div>
  );
};

export default AiMoviesResult;
