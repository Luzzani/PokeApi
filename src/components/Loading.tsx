import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

export const Loading = () => {
  return (
    <View style={styleComponent.loading}>
      <ActivityIndicator size={50} color={'#A1A1A1'} />
    </View>
  );
};

const styleComponent = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
