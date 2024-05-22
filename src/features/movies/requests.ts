import {createAsyncThunk} from '@reduxjs/toolkit';
import {apiGetMovies, apiGetMovieDetails, apiGetMoviesSearch} from './api';
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

export const getMoviesSearch = createAsyncThunk<MoviesResponse, string>(
  'movies/getMoviesSearch',
  async query => {
    try {
      const {data} = await apiGetMoviesSearch(query);
      return data;
    } catch (e) {
      console.error('---ERROR---', e);
    }
  },
);
