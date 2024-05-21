import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';
import {MovieDetails} from '../screens';
import {screens} from './ScreensEnum.ts';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'TabNavigation'} component={TabNavigation} />
      <Stack.Screen name={screens.MovieDetails} component={MovieDetails} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
