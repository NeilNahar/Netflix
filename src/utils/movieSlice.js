import { createSlice } from '@reduxjs/toolkit'

 const movieSlice = createSlice({
  name: 'movie',
  initialState:{nowPlayingMovies:null, popularMovies:null, topRatedMovies:null, upcomingMovies:null, trailor:null},
  reducers: {
    addNowPlayingMovies: (state,action) => {
      state.nowPlayingMovies =action.payload
    },
    addPopularMovies: (state,action) => {
      state.popularMovies =action.payload
    },
    addTopRatedMovies: (state,action) => {
      state.topRatedMovies =action.payload
    },
    addUpcomingMovies: (state,action) => {
      state.upcomingMovies =action.payload
    },
    addTrailor:(state,action)=>{
      state.trailor=action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { addNowPlayingMovies,addPopularMovies, addTopRatedMovies, addUpcomingMovies, addTrailor } = movieSlice.actions

export default movieSlice.reducer