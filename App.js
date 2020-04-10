import 'react-native-gesture-handler';
import React from 'react'
import styled from 'styled-components/native'
import { Restaurants } from './Pages/Restaurants'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Container = styled.View`
  flex: 1;
  background-color: white;
`

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Container>
    <Stack.Navigator>
      <Stack.Screen name="Restaurants" component={Restaurants} />
    </Stack.Navigator>
    </Container>
  </NavigationContainer>
  )
}

export default App
