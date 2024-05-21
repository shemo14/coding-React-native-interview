import React from 'react';
import {View, Text} from 'react-native';

const MovieDetails = (props: any) => {
  const {id} = props.route.params;
  return (
    <View>
      <Text style={{color: '#fff'}}>
        This is a MovieDetails Screen ... {id}
      </Text>
    </View>
  );
};

export default MovieDetails;
