import React, { Status } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import  Routes  from './src/Routes';

import api from './src/components/Services/api';

export default function App() {
  return (
    <NavigationContainer>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
          <Routes />
      </NavigationContainer>
  );
}

