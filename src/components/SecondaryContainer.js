import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movie);
  console.log(movies)
  return (
    movies && (
      <div className="bg-black">
        <div className="flex flex-col gap-16 py-2 ps-16 relative -mt-56">
          <MovieList title={"Now Playing"} list={movies?.nowPlayingMovies} />
          <MovieList title={"Upcoming Movies"} list={movies?.upcomingMovies} />
          <MovieList title={"Popular Movies"} list={movies?.popularMovies} />
          <MovieList title={"Top Rated Movies"} list={movies?.topRatedMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
