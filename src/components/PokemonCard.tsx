import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {shadow} from '../Theme/themeApp';
import {FadeInImage} from './FadeInImage';
import {getImageColors} from '../helper/getImageColor';
import {SimplePokemon} from '../interfaces/pokemonInterfaces';

interface Props {
  pokemon: SimplePokemon;
}

const windowWidth = Dimensions.get('window').width;

export const PokemonCard = ({pokemon}: Props) => {
  const [bgColor, setBgColor] = useState('grey');
  const isMounted = useRef(true);
  const navigation = useNavigation();

  const getCardColors = async () => {
    const [secondary = 'grey'] = await getImageColors(pokemon.picture);
    if (isMounted) {
      setBgColor(secondary);
    }
  };

  useEffect(() => {
    getCardColors();
    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() =>
        navigation.navigate('PokemonScreen', {
          simplePokemon: pokemon,
          color: bgColor,
        })
      }>
      <View
        style={{
          ...styleComponent.cardContainer,
          ...shadow.cardShadow,
          width: windowWidth * 0.4,
          backgroundColor: bgColor,
        }}>
        {/* Nombre del pokemon y ID */}
        <View>
          <Text style={styleComponent.name}>
            {pokemon.name + '\n#' + pokemon.id}
          </Text>
        </View>
        <View style={styleComponent.pokeImageContainer}>
          <Image
            source={require('../assets/pokebola-blanca.png')}
            style={styleComponent.imagePokebola}
          />
        </View>
        <FadeInImage uri={pokemon.picture} style={styleComponent.pokeImage} />
      </View>
    </TouchableOpacity>
  );
};

const styleComponent = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    height: 120,
    marginBottom: 25,
    borderRadius: 10,
  },
  name: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    top: 20,
    left: 10,
  },
  pokeImageContainer: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 0,
    right: 0,
    overflow: 'hidden',
  },
  imagePokebola: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: -25,
    right: -25,
    opacity: 0.5,
  },
  pokeImage: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: -7,
    right: -7,
  },
});
