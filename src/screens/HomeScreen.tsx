import React from 'react';
import {View, Text, Button} from 'react-native';

export const HomeScreen = ({navigation}: any) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Ir a pokemon"
        onPress={() => {
          navigation.navigate('PokemonScreen');
        }}
      />
    </View>
  );
};
