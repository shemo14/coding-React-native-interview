type belongsToCollection = {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
};

type genres = {
  id: number;
  name: string;
};

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  budget: number;
  homepage: string;
  imdb_id: string;
  origin_country: string[];
  status: string;
  belongs_to_collection: belongsToCollection;
  genres: genres[];
}

export interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
