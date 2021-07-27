/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import type {Node} from 'react';
import HomeScreen from './components/HomeScreen'
import TestScreen from './components/TestScreen'
import StatsScreen from './components/StatsScreen'

const Stack = createStackNavigator();

const App: () => Node = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Test"
          component={TestScreen}
          options={{ title: 'Test' }}
        />
      <Stack.Screen
          name="Stats"
          component={StatsScreen}
          options={{ title: 'Stats' }}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


// android:screenOrientation="portrait"