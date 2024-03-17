import React from "react";

const SearchBar = () => {
  return (
    <div className="py-40">
      <form className=" flex justify-center gap-4 p-1">
        <input type="text" className="w-1/4 py-1 px-2 text-sm rounded-md" placeholder="Search for a movie..." />
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
