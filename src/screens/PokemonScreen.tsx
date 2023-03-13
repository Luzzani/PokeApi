import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {RootStackParams} from '../navigation/Navigation';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FadeInImage} from '../components/FadeInImage';
import {usePokemon} from '../hooks/usePokemon';
import {PokemonDetail} from '../components/PokemonDetails';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

export const PokemonScreen = ({route, navigation}: Props) => {
  const {top} = useSafeAreaInsets();

  const {
    color,
    simplePokemon: {name, id, picture},
  } = route.params;

  const {isLoading, pokemon} = usePokemon(id);

  return (
    <View style={styleComponent.container}>
      <View style={{backgroundColor: color, ...styleComponent.headerContainer}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeScreen')}
          activeOpacity={0.8}
          style={{...styleComponent.backBtn, top: top + 5}}>
          <Icon name="arrow-back-outline" color={'#FFFFFF'} size={30} />
        </TouchableOpacity>
        <Text
          style={{
            ...styleComponent.pokemonId,
            top: top + 6,
          }}>
          #{id}
        </Text>
        <Text style={{...styleComponent.pokemonName, top}}>{name}</Text>
        <View
          style={{
            transform: [
              {rotate: '224deg'},
              {translateY: 120},
              {translateX: 100},
            ],
          }}>
          <Image source={require('../assets/pokebola-blanca.png')} />
        </View>
        <FadeInImage uri={picture} style={{...styleComponent.pokeImage}} />
      </View>

      {isLoading ? (
        <View style={styleComponent.loading}>
          <ActivityIndicator color={color} size={50} />
        </View>
      ) : (
        <PokemonDetail pokemon={pokemon} />
      )}
    </View>
  );
};

const styleComponent = StyleSheet.create({
  container: {flex: 1},
  headerContainer: {
    height: 370,
    zIndex: 999,
    alignItems: 'center',
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000,
  },
  backBtn: {
    position: 'absolute',
    left: 15,
    zIndex: 999999999,
  },
  pokemonName: {
    color: '#FFFFFF',
    fontSize: 20,
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  pokemonId: {
    color: '#FFFFFF',
    fontSize: 30,
  },
  pokeImage: {
    height: 300,
    width: 300,
    position: 'absolute',
    bottom: 0,
    zIndex: 0,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
