import React from 'react';
import {View} from 'react-native';
import Text from '../Text';

const Container = (props: any) => {
  const {loading} = props;

  return (
    <View style={{flex: 1, padding: 10}}>
      {loading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: '#fff'}} type={'h1'}>
            {'Im loading now ...............'}
          </Text>
        </View>
      ) : (
        props.children
      )}
    </View>
  );
};

export default Container;
