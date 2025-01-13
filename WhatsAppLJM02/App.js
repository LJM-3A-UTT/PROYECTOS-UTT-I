import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Registro from './Registro';
import Ingreso from './Ingreso';
import Chats from './Chats'; 
import Contactos from './Contactos'; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Ingreso">
        <Stack.Screen name="Ingreso" component={Ingreso} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Chats" component={Chats} />
        <Stack.Screen name="Contactos" component={Contactos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
