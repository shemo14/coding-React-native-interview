import {buildPath, client} from '../../app/ClientConnection.ts';

const apiType = 'TMDB';
const apiGetMovies = async () =>
  client(apiType).get(buildPath('movie/popular', apiType));

const apiGetMovieDetails = async (id: string) =>
  client(apiType).get(buildPath(`movie/${id}`, apiType));

export {apiGetMovies, apiGetMovieDetails};
