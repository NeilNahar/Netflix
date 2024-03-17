import useFetchTrailor from "../hooks/useFetchTrailor";
import { useSelector } from 'react-redux'
const VideoBackground = (id) => {
  const trailor = useSelector((state) => state.movie.trailor)
  useFetchTrailor(id);
  return (
    <div className="w-full absolute z-0 -top-20">
      <iframe
        className="w-full aspect-video "
        src={trailor}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        autoPlay="1"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
