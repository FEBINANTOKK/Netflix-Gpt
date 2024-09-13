import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    shoeGptSearch: false,
    moviesName: null,
    tmdbMovies: null,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.shoeGptSearch = !state.shoeGptSearch;
    },
    addGptMovies: (state, action) => {
      const { gptMovies, tmdbMovies } = action.payload;

      state.tmdbMovies = tmdbMovies;
      state.moviesName = gptMovies;
    },
  },
});
export const { toggleGptSearchView, addGptMovies } = gptSlice.actions;
export default gptSlice.reducer;
