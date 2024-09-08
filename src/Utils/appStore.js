import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Utils/userSlice";
import gptReducer from "./gptSlice";
import moviesReducer from "./movieSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
  },
});

export default appStore;
