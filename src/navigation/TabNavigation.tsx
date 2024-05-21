import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Movies, Search} from '../screens';
import {screens} from './ScreensEnum.ts';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={screens.Movies} component={Movies} />
      <Tab.Screen name={screens.Search} component={Search} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
