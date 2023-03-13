import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {shadow} from '../Theme/themeApp';
import {useDebouncedValue} from '../screens/useDebouncedValue';

interface Props {
  onDebounce: (value: string) => void;
}

export const SearchInput = ({onDebounce}: Props) => {
  const [textValue, setTextValue] = useState('');

  const debouncedValue = useDebouncedValue(textValue);

  useEffect(() => {
    onDebounce(debouncedValue);
  }, [debouncedValue]);

  return (
    <View style={styleComponent.container}>
      <View style={[styleComponent.textBackground, shadow.cardShadow]}>
        <TextInput
          placeholder="Buscar Pokémon"
          style={{
            ...styleComponent.textInput,
            top: Platform.OS === 'ios' ? 0 : 3,
          }}
          autoCapitalize="none"
          autoCorrect={false}
          value={textValue}
          onChangeText={setTextValue}
        />
        <Icon name="search-outline" color={'#A1A1A1'} size={20} />
      </View>
    </View>
  );
};

const styleComponent = StyleSheet.create({
  container: {},
  textBackground: {
    backgroundColor: '#F3F1F3',
    borderRadius: 50,
    height: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    fontSize: 18,
  },
});
