export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer "+process.env.REACT_APP_TMDBKEY
    }
  };

  export const movieImageURL="https://image.tmdb.org/t/p/w500"

  export const OPENAIKEY=process.env.REACT_APP_OPENAIKEY