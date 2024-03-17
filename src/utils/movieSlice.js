import { createSlice } from '@reduxjs/toolkit'

 const movieSlice = createSlice({
  name: 'movie',
  initialState:{nowPlayingMovies:null, trailor:null},
  reducers: {
    addNowPlayingMovies: (state,action) => {
      state.nowPlayingMovies =action.payload
    },
    addTrailor:(state,action)=>{
      state.trailor=action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { addNowPlayingMovies, addTrailor } = movieSlice.actions

export default movieSlice.reducer