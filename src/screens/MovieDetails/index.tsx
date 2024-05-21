import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {getMovieDetails} from '../../features/movies/requests';
import {useAppDispatch, useAppSelector} from '../../app/reduxHooks';
import {getMovieTrailer} from '../../features/trailers/requests.ts';
import YoutubePlayer from 'react-native-youtube-iframe';

const MovieDetails = (props: any) => {
  const {id} = props.route.params;
  const movieDetails = useAppSelector(state => state.movies.movieDetails);
  const movieTrailers = useAppSelector(state => state.trailers.trailerResponse);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMovieDetails(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (movieDetails) {
      dispatch(getMovieTrailer(movieDetails?.title));
    }
  }, [dispatch, id, movieDetails]);

  return (
    <View>
      <Text style={{color: '#fff'}}>
        This is a MovieDetails Screen ... {movieDetails?.title}
      </Text>
      <YoutubePlayer
        height={300}
        play={true}
        videoId={movieTrailers?.items[0]?.id?.videoId}
      />
    </View>
  );
};

export default MovieDetails;
