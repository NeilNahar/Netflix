import React, { useRef } from "react";
import openai from "../utils/openAI";
import {options} from "../utils/constant"
import { useDispatch } from "react-redux";
import { addAIMovieResult } from "../utils/aiSlice";

const SearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const searchMovieTMDB=async(movieName)=>{
    const movieURL="https://api.themoviedb.org/3/search/movie?query="+movieName+"&include_adult=false&language=en-US&page=1"
    const data = await fetch(movieURL, options);
    const json = await data.json();
    console.log(json.results)
    return json.results
  }
  const handleAiSearch = async () => {
      const query = "Act as a movie recommendation expert and suggest some movies for the query"+searchText.current.value+"only give me the names of 5 movies, comma seperated like the example result. example: dhamal, hera pheri, golmaal, singham, all the best";
      const gptResults = await openai.chat.completions.create({
        messages: [{ role: "user", content: query }],
        model: "gpt-3.5-turbo",
      });
      console.log(gptResults.choices[0]?.message?.content.split(","))
      const gptMovies=gptResults.choices[0]?.message?.content.split(",")
      const data=gptMovies.map((movie) => {return searchMovieTMDB(movie) })
      const tmdbResult=await Promise.all(data)
      dispatch(addAIMovieResult({moviesName:gptMovies,moviesInfo:tmdbResult}))
  };
  return (
    <div className="pt-32 pb-20">
      <form
        onClick={(e) => e.preventDefault()}
        className=" flex justify-center gap-4 p-1"
      >
        <input
          type="text"
          className="w-1/4 py-1 px-2 text-sm rounded-md"
          placeholder="Search for a movie..."
          ref={searchText}
        />
        <button
          className="bg-slate-100 hover:bg-slate-200 px-2 py-1 rounded"
          onClick={handleAiSearch}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
