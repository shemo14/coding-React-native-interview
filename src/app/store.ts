import {configureStore} from '@reduxjs/toolkit';
import {MoviesSlice, MoviesState} from '../features/movies';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const store = configureStore({
  reducer: {
    movies: MoviesSlice.reducer,
  },
});

export function moviesState(state: RootState): MoviesState {
  return state[MoviesSlice.name];
}
