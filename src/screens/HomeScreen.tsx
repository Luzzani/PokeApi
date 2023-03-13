import React from 'react';
import {Image, ActivityIndicator, StyleSheet, View} from 'react-native';
import {stylesApp} from '../Theme/themeApp';
import {usePokemonPaginated} from '../hooks/usePokemonPaginated';
import {FlatList} from 'react-native-gesture-handler';
import {PokemonCard} from '../components/PokemonCard';
import {TitleHeader} from '../components/TitleHeader';

export const HomeScreen = () => {
  const {simplePokeList, loadPokemons} = usePokemonPaginated();

  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={stylesApp.pokebolaBG}
      />
      <View
        style={{
          ...styleComponent.containerFlatList,
        }}>
        <FlatList
          data={simplePokeList}
          numColumns={2}
          //header
          ListHeaderComponent={<TitleHeader title={'Pokédex'} />}
          renderItem={({item}) => <PokemonCard pokemon={item} />}
          keyExtractor={poke => poke.id}
          //infinite scroll
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}
          ListFooterComponent={
            <ActivityIndicator
              style={styleComponent.loading}
              size={20}
              color={'#000000'}
            />
          }
        />
      </View>
    </>
  );
};
const styleComponent = StyleSheet.create({
  loading: {
    height: 100,
  },

  containerFlatList: {
    alignItems: 'center',
  },
});
