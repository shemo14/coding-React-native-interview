import {buildPath, client} from '../../app/ClientConnection.ts';

const apiType = 'TMDB';
const apiGetMovies = async () =>
  client(apiType).get(buildPath('movie/popular?', apiType));

const apiGetMovieDetails = async (id: string) =>
  client(apiType).get(buildPath(`movie/${id}?`, apiType));

const apiGetMoviesSearch = async (query: string) =>
  client(apiType).get(
    buildPath(`search/movie?query=${encodeURIComponent(query)}&`, apiType),
  );

const apiMoviesDiscover = async (query: string) =>
  client(apiType).get(buildPath(`discover/movie${query}&`, apiType));

const apiGetGenres = async () =>
  client(apiType).get(buildPath('genre/movie/list?', apiType));

export {
  apiGetMovies,
  apiGetMovieDetails,
  apiGetMoviesSearch,
  apiGetGenres,
  apiMoviesDiscover,
};
