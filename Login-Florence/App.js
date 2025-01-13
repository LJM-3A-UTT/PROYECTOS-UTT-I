import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPaciente from './src/LoginPaciente';
import InformacionMedica from './src/InformacionMedica';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={{ flex: 1 }}>
     
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginPaciente">
          <Stack.Screen name="InformacionMedica" component={InformacionMedica} />
          <Stack.Screen name="LoginPaciente" component={LoginPaciente} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}