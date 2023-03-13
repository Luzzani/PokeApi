import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {PokemonDetails} from '../interfaces/pokemonInterfaces';
import {FadeInImage} from './FadeInImage';

interface Props {
  pokemon: PokemonDetails;
}

export const PokemonDetail = ({pokemon}: Props) => {
  return (
    <ScrollView
      style={{
        ...StyleSheet.absoluteFillObject,
      }}>
      <View style={[styleComponent.detailContainer, styleComponent.container]}>
        <View>
          <Text style={styleComponent.title}>Types</Text>
          <View style={styleComponent.typesContainer}>
            {pokemon.types.map(({type}, index) => {
              return (
                <Text
                  key={type.name + index}
                  style={{
                    ...styleComponent.text,
                    marginRight: 10,
                    textTransform: 'capitalize',
                  }}>
                  {type.name}
                </Text>
              );
            })}
          </View>
        </View>

        <View>
          <Text style={styleComponent.title}>Wight</Text>
          <Text
            style={{
              ...styleComponent.text,
            }}>
            {pokemon.weight}kg
          </Text>
        </View>
      </View>

      <View
        style={{
          ...styleComponent.detailContainer,
          marginTop: 20,
          ...styleComponent.container,
        }}>
        <Text style={styleComponent.title}>Sprites</Text>
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <FadeInImage
          uri={pokemon.sprites.front_default}
          style={styleComponent.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.back_default}
          style={styleComponent.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.front_shiny}
          style={styleComponent.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.back_shiny}
          style={styleComponent.basicSprite}
        />
      </ScrollView>
      <View style={styleComponent.container}>
        <Text style={styleComponent.title}>Ability</Text>
        <View style={{flexDirection: 'row'}}>
          {pokemon.abilities.map(({ability}, index) => {
            return (
              <Text key={ability.name + index} style={styleComponent.text}>
                {ability.name}
              </Text>
            );
          })}
        </View>
      </View>
      <View style={styleComponent.container}>
        <Text style={styleComponent.title}>Stats</Text>
        <View>
          {pokemon.stats.map((stat, index) => {
            return (
              <View
                key={stat.stat.name + index}
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styleComponent.text}>{stat.stat.name}</Text>
                <Text style={{...styleComponent.text, fontWeight: 'bold'}}>
                  {stat.base_stat}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
      <View style={styleComponent.container}>
        <Text style={styleComponent.title}>Moves</Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {pokemon.moves.map(({move}, index) => {
            return (
              <Text key={move.name + index} style={styleComponent.text}>
                {' ' + move.name + ' '}
              </Text>
            );
          })}
        </View>
      </View>
      <View style={{marginBottom: 20, alignItems: 'center'}}>
        <FadeInImage
          uri={pokemon.sprites.front_default}
          style={styleComponent.basicSprite}
        />
      </View>
    </ScrollView>
  );
};

const styleComponent = StyleSheet.create({
  container: {
    marginHorizontal: 40,
  },
  detailContainer: {
    marginTop: 400,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    textTransform: 'capitalize',
  },
  typesContainer: {flexDirection: 'row'},
  text: {
    fontSize: 16,
    color: 'rgba(0,0,0,0.5)',
    textTransform: 'capitalize',
  },
  basicSprite: {
    height: 100,
    width: 100,
  },
});
