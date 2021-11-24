import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import EmpresaList from '../components/EmpresaList';
import ObraList from '../components/ObraList';
import Obras from '../data/Obras';

const ObraListScreen = ({navigation, route}) => {

 const [obrasList, setObrasList] = useState(Obras.obras);
//items={obrasList}
 return (
  <View>
    <ObraList  navigation={navigation} obrasList={obrasList} setObrasList={setObrasList}/>
 </View>)
}

const styles = StyleSheet.create({
 screen: {
  
 }
});

export default ObraListScreen;