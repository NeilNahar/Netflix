import { options } from "../utils/constant";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((state) => state.movie.nowPlayingMovies)
  const nowplayingMoviesFetch = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    !nowPlayingMovies && nowplayingMoviesFetch();
  }, []);
};

export default useNowPlayingMovies;
