import React from 'react';
import {View, Text} from 'react-native';
import {stylesApp} from '../Theme/themeApp';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {
  title: string;
}

export const TitleHeader = ({title}: Props) => {
  const {top} = useSafeAreaInsets();

  return (
    <View>
      <Text
        style={{
          ...stylesApp.containerApp,
          ...stylesApp.title,
          top: top + 20,
          marginBottom: top + 20,
        }}>
        {title}
      </Text>
    </View>
  );
};
