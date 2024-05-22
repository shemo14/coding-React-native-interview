import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {getMovies} from '../../features/movies/requests';
import {useAppDispatch, useAppSelector} from '../../app/reduxHooks';
import MovieItem from '../../components/MovieItem';
import {Container, SearchInput} from '../../common';

const Movies = () => {
  const movies = useAppSelector(state => state.movies.moviesResponse);
  const loading = useAppSelector(state => state.movies.loading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <Container loading={loading}>
      <SearchInput />
      <FlatList
        data={movies?.results}
        renderItem={({item}: any) => <MovieItem movie={item} />}
        numColumns={3}
      />
    </Container>
  );
};

export default Movies;
