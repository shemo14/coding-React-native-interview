import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text} from '../../common';
import {useAppDispatch, useAppSelector} from '../../app/reduxHooks';
import {getGenres} from '../../features/movies/requests.ts';
import {useTheme} from '@react-navigation/native';

const Genres = ({onSelectGenres}) => {
  const {colors} = useTheme();
  const dispatch = useAppDispatch();
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
  const genres = useAppSelector(state => state.movies.genres);

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  useEffect(() => {
    onSelectGenres(selectedGenres);
  }, [onSelectGenres, selectedGenres]);

  const selectGenresHandler = (genreId: number) => {
    if (selectedGenres.includes(genreId)) {
      setSelectedGenres(selectedGenres =>
        selectedGenres.filter(item => item !== genreId),
      );
    } else {
      setSelectedGenres([...selectedGenres, genreId]);
    }
  };

  return (
    <View>
      <Text type={'p2'} style={{color: colors.black, marginVertical: 10}}>
        Select Genres :
      </Text>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}>
        {genres.map((genre, i) => (
          <TouchableOpacity
            onPress={() => selectGenresHandler(genre.id)}
            key={i}
            style={{
              backgroundColor: selectedGenres.includes(genre.id)
                ? colors.black
                : colors.primary,
              padding: 5,
              marginBottom: 10,
              marginEnd: 10,
            }}>
            <Text
              type={'p4'}
              style={{
                color: selectedGenres.includes(genre.id)
                  ? colors.white
                  : colors.black,
              }}>
              {genre.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Genres;
