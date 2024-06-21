/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from './stacks';
import NavigationService from './NavigationService';


const Navigator = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
      >
      <RootStack />
    </NavigationContainer>
  );
};

export default Navigator;
