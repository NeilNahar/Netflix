import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const PrimaryContainer = () => {
  const movie = useSelector((state) => state.movie?.nowPlayingMovies);
  if(!movie) return
  const mainMovie = movie[0];
  const { title, overview, id } = mainMovie;
  return (
    <div>
    <VideoTitle title={title} overview={overview} />
      <VideoBackground id={id} />
    </div>
  );
};

export default PrimaryContainer;
