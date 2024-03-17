import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import PrimaryContainer from "./PrimaryContainer";
import SecondaryContainer from "./SecondaryContainer";
import Search from "./Search";
import { useSelector } from "react-redux";

const Browse = () => {
  const searchToggle = useSelector((state) => state.ai.searchShow);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      {searchToggle ? (
        <Search />
      ) : (
        <>
          <PrimaryContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
