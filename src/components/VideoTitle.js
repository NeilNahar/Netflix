const VideoTitle = (props) => {
  return (
    <div className="py-[20%] px-16 flex flex-col gap-4 text-white absolute bg-gradient-to-r z-10 from-black">
      <h2 className="text-5xl font-bold">{props.title}</h2>
      <p className="w-1/3">{props.overview}</p>
      <div className="flex gap-3 font-medium">
        <button className=" text-black bg-white py-1 px-3 hover:bg-slate-200 rounded">Play</button>
        <button className="bg-slate-400 text-white bg-opacity-50 hover:bg-opacity-80 py-1 px-3 rounded">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
