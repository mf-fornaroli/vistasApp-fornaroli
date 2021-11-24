import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, CreateNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import EmpresaScreen from '../screens/EmpresaScreen';
import EmpresaListScreen from '../screens/EmpresaListScreen';
import ObraScreen from '../screens/ObraScreen';
import ObraListScreen from '../screens/ObraListScreen';
import InspeccionScreen from '../screens/InspeccionScreen';
import { StyleSheet } from 'react-native';


const Stack = createNativeStackNavigator();

const AppNavigator = () => (
 <NavigationContainer>

  <Stack.Navigator initialRouteName="Home"
   screenOptions={{
    headerStyle: styles.header,
    headerTintColor: Colors.textLight
   }}>
   
   <Stack.Screen name="SafeTI" component={HomeScreen} />

   <Stack.Screen name="EmpresaList" component={EmpresaListScreen} options={{
    title:'Listado de Empresas'
   }} />
   
   <Stack.Screen name="Empresa" component={EmpresaScreen} options={{
    title:'Alta de Empresa'
   }} />
   
   <Stack.Screen name="ObraList" component={ObraListScreen} options={{
    title:'Listado de Obras'
   }} />
   
   <Stack.Screen name="Obra" component={ObraScreen} options={{
    title:'Alta de Obra'
   }} />
   
   <Stack.Screen name="Inspeccion" component={InspeccionScreen} options={{
    title:'Inspecciones de Seguridad'
   }} />
   
  </Stack.Navigator>

 </NavigationContainer>
);

const styles = StyleSheet.create({
 header: {
  backgroundColor: Colors.primary
 }

});

export default AppNavigator;