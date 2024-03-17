import { options } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailor } from "../utils/movieSlice";

const useFetchTrailor = ({ id }) => {
  const TrailorURL =
    "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US";
  const dispatch = useDispatch();
  const movieTrailor = async () => {
    const data = await fetch(TrailorURL, options);
    const json = await data.json();
    const filterJson = json.results.filter((item) => item.type === "Trailer");
    const selectedTrailor =
      filterJson.length !== 0
        ? filterJson[0]
        : json.results.filter((item) => item.type === "Teaser");
    const trailor="https://www.youtube.com/embed/" + selectedTrailor.key+"?autohide=1&mute=1&showinfo=0&controls=0&autoplay=1"
    dispatch(
      addTrailor(trailor)
    );
  };
  useEffect(() => {
    movieTrailor();
  }, []);
};

export default useFetchTrailor;
