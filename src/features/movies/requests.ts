import {createAsyncThunk} from '@reduxjs/toolkit';
import {apiGetMovies, apiGetMovieDetails} from './api';
import {Movie, MoviesResponse} from './interfaces';

export const getMovies = createAsyncThunk<MoviesResponse>(
  'movies/getAllMovies',
  async () => {
    try {
      const {data} = await apiGetMovies();
      return data;
    } catch (e) {
      console.error('---ERROR---', e);
    }
  },
);

export const getMovieDetails = createAsyncThunk<Movie, string>(
  'movies/movieDetails',
  async id => {
    try {
      const {data} = await apiGetMovieDetails(id);
      return data;
    } catch (e) {
      console.error('---ERROR---', e);
    }
  },
);
