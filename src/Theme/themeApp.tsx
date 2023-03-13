import {StyleSheet} from 'react-native';

export const colorsApp = StyleSheet.create({
  black: {color: '#000000'},
  white: {color: '#FFFFFF'},
});

export const shadow = StyleSheet.create({
  cardShadow: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
});

export const stylesApp = StyleSheet.create({
  containerApp: {
    marginHorizontal: 20,
  },
  pokebolaBG: {
    width: 300,
    height: 300,
    position: 'absolute',
    top: -80,
    right: -80,
    opacity: 0.2,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#000000',
  },
});
