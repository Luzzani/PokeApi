import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {stylesApp} from '../Theme/themeApp';
import {SearchInput} from '../components/SearchInput';
import {usePokemonSearch} from '../hooks/usePokemonSearch';
import {TitleHeader} from '../components/TitleHeader';
import {PokemonCard} from '../components/PokemonCard';
import {Loading} from '../components/Loading';
import {SimplePokemon} from '../interfaces/pokemonInterfaces';

export const SearchScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isFetching, simplePokeList} = usePokemonSearch();

  const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([]);
  const [term, setTerm] = useState('');

  useEffect(() => {
    if (term.length === 0) {
      setPokemonFiltered([]);
    }
    if (isNaN(Number(term))) {
      setPokemonFiltered(
        simplePokeList.filter(poke =>
          poke.name.toLocaleLowerCase().includes(term.toLocaleLowerCase()),
        ),
      );
    } else {
      const pokemonByID = simplePokeList.find(poke => poke.id === term);
      setPokemonFiltered(pokemonByID ? [pokemonByID] : []);
    }
  }, [term]);

  if (isFetching) {
    return <Loading />;
  }

  return (
    <View
      style={{
        ...styleComponent.container,
        top: top + 20,
        ...stylesApp.containerApp,
      }}>
      <SearchInput
        onDebounce={(value: string) => {
          setTerm(value);
        }}
      />

      <FlatList
        data={pokemonFiltered}
        numColumns={2}
        //header
        ListHeaderComponent={<TitleHeader title={term} />}
        renderItem={({item}) => <PokemonCard pokemon={item} />}
        keyExtractor={poke => poke.id}
      />
    </View>
  );
};

const styleComponent = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
