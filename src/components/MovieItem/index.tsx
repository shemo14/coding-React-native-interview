import React from 'react';
import {TouchableOpacity, View, ImageBackground} from 'react-native';
import {Movie} from '../../features/movies/interfaces';
import {imgPath} from '../../app/ClientConnection';
import {useNavigation} from '@react-navigation/native';
import {screens} from '../../navigation/ScreensEnum.ts';
import Text from '../../common/Text';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import styles from './styles';

const MovieItem = ({movie}: {movie: Movie}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(screens.MovieDetails, {movie})}
      style={styles.container}>
      <ImageBackground
        source={{uri: imgPath(movie.poster_path)}}
        style={styles.imageBackground}
        resizeMode={'cover'}>
        <View style={styles.movieTitleContainer}>
          <Text type={'p4'}>{movie.original_title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default MovieItem;
