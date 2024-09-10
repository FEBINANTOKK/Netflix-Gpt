import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Utils/userSlice";
import gptReducer from "./gptSlice";
import moviesReducer from "./movieSlice";
import configReducer from "./config";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    config: configReducer,
  },
});

export default appStore;
