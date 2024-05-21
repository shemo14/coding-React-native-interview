import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Movie, MoviesResponse} from './interfaces';
import {getMovies, getMovieDetails} from './requests';

export interface MoviesState {
  moviesResponse: MoviesResponse;
  movieDetails: Movie | null;
}

const initialState: MoviesState = {
  moviesResponse: {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  },
  movieDetails: null,
};

export const MoviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      getMovies.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.moviesResponse = action.payload;
      },
    );
    builder.addCase(
      getMovieDetails.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.movieDetails = action.payload;
      },
    );
  },
});

export default MoviesSlice;
