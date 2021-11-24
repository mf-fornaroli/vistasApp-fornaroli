import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text} from 'react-native';
import EmpresaList from '../components/EmpresaList';
import Empresas from '../data/Empresas';
import { FAB } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';

const EmpresaListScreen = ({navigation, route}) => {
 const [empresasList, setEmpresasList] = useState(Empresas.empresas);
 console.log(empresasList);
 return (
  <View>
 
     <EmpresaList items={empresasList} navigation={navigation} empresasList={empresasList} setEmpresasList={setEmpresasList}/>
  
 </View>);
}

const styles = StyleSheet.create({
 screen: {
  
 }
});

export default EmpresaListScreen;