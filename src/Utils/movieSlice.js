import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    onPlayingMovies: null,
    PopularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    trailerVideo: null,
    showMovieDetails: {
      showDetails: false,
      movieIdToShow: null,
      movieDetails: null,
    },
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.onPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.PopularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addMovieDetails: (state, action) => {
      state.showMovieDetails.movieDetails = action.payload;
    },
    addShowDetails: (state, action) => {
      state.showMovieDetails.showDetails = true;
    },
    addMovieIdToShow: (state, action) => {
      state.showMovieDetails.movieIdToShow = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addMovieDetails,
  addShowDetails,
  addMovieIdToShow,
} = movieSlice.actions;
export default movieSlice.reducer;
