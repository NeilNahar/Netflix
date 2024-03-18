import { createSlice } from "@reduxjs/toolkit";

const aiSlice = createSlice({
  name: "ai",
  initialState: { searchShow: false, AIMovieName: null, AIMovieResult: null },
  reducers: {
    toggleSearchShow: (state, action) => {
      state.searchShow = !state.searchShow;
    },
    addAIMovieResult: (state, action) => {
      const { moviesName, moviesInfo } = action.payload;
      state.AIMovieName = moviesName;
      state.AIMovieResult = moviesInfo;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleSearchShow, addAIMovieResult } = aiSlice.actions;

export default aiSlice.reducer;
