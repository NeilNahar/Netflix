import { options } from "../utils/constant";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((state) => state.movie.upcomingMovies)
  const upcomingMoviesFetch = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      options
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };
  useEffect(() => {
    !upcomingMovies && upcomingMoviesFetch();
  }, []);
};

export default useUpcomingMovies;
