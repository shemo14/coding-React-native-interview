import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Movie, MoviesResponse} from './interfaces';
import {getMovies, getMovieDetails, getMoviesSearch} from './requests';

export interface MoviesState {
  moviesResponse: MoviesResponse;
  searchResponse: MoviesResponse | null;
  movieDetails: Movie | null;
  loading: boolean;
}

const initialState: MoviesState = {
  moviesResponse: {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  },
  searchResponse: null,
  movieDetails: null,
  loading: false,
};

export const MoviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getMovies.pending, state => {
      state.loading = true;
    });
    builder.addCase(
      getMovies.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.moviesResponse = action.payload;
      },
    );
    builder.addCase(
      getMovieDetails.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.movieDetails = action.payload;
      },
    );
    builder.addCase(
      getMoviesSearch.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.searchResponse = action.payload;
      },
    );
  },
});

export default MoviesSlice;
