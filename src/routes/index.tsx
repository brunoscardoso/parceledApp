import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import routesDefinitions from './routes-definitions';

export default function Routes() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={routesDefinitions.home.name}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={routesDefinitions.home.name}
          component={routesDefinitions.home.screen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
