import React from 'react';
import {Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Navigation} from './Navigation';
import {Tab2Screen} from './Tab2';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: '#FFFFFF'}}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#0021AD',
        tabBarLabelStyle: {marginBottom: Platform.OS === 'ios' ? 0 : 10},
      }}>
      <Tab.Screen
        name="Navigation"
        component={Navigation}
        options={{
          tabBarLabel: 'List',
          tabBarIcon: ({color}) => (
            <Icon color={color} size={20} name={'grid-outline'} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={Tab2Screen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color}) => (
            <Icon color={color} size={20} name={'search-outline'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
