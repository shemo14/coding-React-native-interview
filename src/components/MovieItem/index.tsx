import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {Movie} from '../../features/movies/interfaces';
import {imgPath} from '../../app/ClientConnection';
import {useNavigation} from '@react-navigation/native';
import {screens} from '../../navigation/ScreensEnum.ts';

const {width} = Dimensions.get('window');
const MovieItem = ({movie}: {movie: Movie}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(screens.MovieDetails, {id: movie.id})}
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
      }}>
      <ImageBackground
        source={{uri: imgPath(movie.poster_path)}}
        style={{width: width * 0.29, height: 200}}
        resizeMode={'cover'}>
        <View
          style={{
            backgroundColor: '#0000009c',
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: 'auto',
            padding: 2,
          }}>
          <Text style={{color: '#fff'}}>{movie.original_title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default MovieItem;
