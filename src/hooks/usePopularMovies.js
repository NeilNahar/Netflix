import { options } from "../utils/constant";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((state) => state.movie.popularMovies)
  const popularMoviesFetch = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    !popularMovies && popularMoviesFetch();
  }, []);
};

export default usePopularMovies;
