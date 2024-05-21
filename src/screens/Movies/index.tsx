import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {getMovies} from '../../features/movies/requests';
import {useAppDispatch, useAppSelector} from '../../app/reduxHooks';
import MovieItem from '../../components/MovieItem';

const Movies = () => {
  const movies = useAppSelector(state => state.movies.moviesResponse);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <View style={{flex: 1, paddingHorizontal: 10}}>
      <FlatList
        data={movies?.results}
        renderItem={({item}: any) => <MovieItem movie={item} />}
        numColumns={3}
      />
    </View>
  );
};

export default Movies;
