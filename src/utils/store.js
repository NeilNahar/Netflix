import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import aiReducer from "./aiSlice"

export const store = configureStore({
  reducer: { user: userReducer, movie: movieReducer, ai: aiReducer },
});
