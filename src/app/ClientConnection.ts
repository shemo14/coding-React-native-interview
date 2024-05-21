import {Client} from './Client';
const TMDB_API_KEY: string = 'api_key=4127b96cc79318b6b63a97f8bda628b3';

const baseUrl: string = 'https://api.themoviedb.org/3/';

const buildPath = (path: string) => `${path}?${TMDB_API_KEY}`;

const client = new Client(baseUrl);

export {buildPath, client};
