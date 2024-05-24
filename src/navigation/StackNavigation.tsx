import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';
import {MovieDetails, SearchResult} from '../screens';
import {screens} from './ScreensEnum.ts';
import {useTheme} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const {colors} = useTheme();
  return (
    <Stack.Navigator screenOptions={{headerTintColor: colors.primary}}>
      <Stack.Screen
        options={{
          title: 'Home',
        }}
        name={'TabNavigation'}
        component={TabNavigation}
      />
      <Stack.Screen
        options={({route}) => ({title: route?.params?.movie.title})}
        name={screens.MovieDetails}
        component={MovieDetails}
      />
      <Stack.Screen
        options={{title: 'Search Result'}}
        name={screens.SearchResult}
        component={SearchResult}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
