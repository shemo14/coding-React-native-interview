import React from 'react';
import {screens} from '../../navigation/ScreensEnum.ts';
import {Image, TouchableOpacity, View} from 'react-native';
import {imgPath} from '../../app/ClientConnection.ts';
import {Text} from '../index.ts';
import {useNavigation, useTheme} from '@react-navigation/native';
import {Movie} from '../../features/movies/interfaces.ts';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const SearchItem = ({movie}: {movie: Movie}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(screens.MovieDetails, {movie})}
      style={{
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderBottomColor: colors.grey,
      }}>
      <Image
        source={{uri: imgPath(movie?.poster_path)}}
        style={{width: 50, height: 100}}
        resizeMode={'contain'}
      />
      <View style={{marginStart: 20}}>
        <Text type={'p2'} style={{color: colors.black}}>
          {movie.title}
        </Text>
        <Text type={'p3'} style={{color: colors.grey}}>
          {movie.release_date}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SearchItem;
