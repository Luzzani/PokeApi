import React, {useState} from 'react';
import {
  ActivityIndicator,
  Animated,
  ImageErrorEventData,
  ImageStyle,
  NativeSyntheticEvent,
  StyleProp,
  View,
} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';
import {StyleSheet} from 'react-native';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({uri, style = {}}: Props) => {
  const {opacity, fadeIn} = useAnimation();
  const [isLoading, setIsLoading] = useState(true);

  const finishLoading = () => {
    setIsLoading(false);
    fadeIn();
  };

  const onError = (err: NativeSyntheticEvent<ImageErrorEventData>) => {
    setIsLoading(false);
  };

  return (
    <View style={{...styleComponent.containerImage, ...(style as any)}}>
      {isLoading && (
        <ActivityIndicator
          style={styleComponent.loading}
          color="grey"
          size={30}
        />
      )}

      <Animated.Image
        source={{uri}}
        onError={onError}
        onLoad={finishLoading}
        style={{
          ...(style as any),
          opacity,
        }}
      />
    </View>
  );
};
const styleComponent = StyleSheet.create({
  containerImage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    position: 'absolute',
  },
});
