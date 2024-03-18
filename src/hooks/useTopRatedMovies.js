import { options } from "../utils/constant";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((state) => state.movie.topRatedMovies)
  const topRatedMoviesFetch = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };
  useEffect(() => {
    !topRatedMovies && topRatedMoviesFetch();
  }, []);
};

export default useTopRatedMovies;
