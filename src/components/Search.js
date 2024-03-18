import SearchBar from "./SearchBar";
import AiMoviesResult from "./AiMoviesResult";
const Search = () => {
  return (
    <div>
    <img
        className="absolute top-0 w-screen h-screen -z-10 brightness-40"
        src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg"
        alt="backgroundImage"
      />
      <SearchBar />
      <AiMoviesResult />
    </div>
  );
};

export default Search;
