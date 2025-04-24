import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppNavigator from './AppNavigator'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1  }}>

        <NavigationContainer>
          <AppNavigator/>
        </NavigationContainer>
      </SafeAreaView>

    </SafeAreaProvider>
  );
}

