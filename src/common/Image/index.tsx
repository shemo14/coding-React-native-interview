import React from 'react';
import FastImage from 'react-native-fast-image';

const Image = props => {
  const {style, source, children} = props;
  return (
    <FastImage
      style={style}
      source={{
        uri: source.uri,
        priority: FastImage.priority.normal,
      }}
      resizeMode={FastImage.resizeMode.contain}>
      {children}
    </FastImage>
  );
};

export default Image;
