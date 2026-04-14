import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegistroScreen from '../screens/RegistroScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import GuardarScreen from '../screens/GuardarScreen';
import ListaScreen from '../screens/ListaScreen';
import NotasScreen from '../screens/NotasScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MyStack() {
    return (
        <Stack.Navigator initialRouteName='Drawer'>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registro" component={RegistroScreen} />
            <Stack.Screen name="Drawer" component={MyDrawer} />
        </Stack.Navigator>
    );
}

function MyDrawer() {
    return (
        <Drawer.Navigator initialRouteName='Peliculas' >
            <Drawer.Screen name="Guardar" component={GuardarScreen} />
            <Drawer.Screen name="Peliculas" component={ListaScreen} />
            <Drawer.Screen name="Notas" component={NotasScreen} />
        </Drawer.Navigator>
    );
}
export function Navegador(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}