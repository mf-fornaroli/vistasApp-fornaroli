import React from 'react';
import { FlatList, View, Text } from 'react-native';
import Empresa from './Empresa';
import Card from './Card';
import { FAB } from 'react-native-elements';
import Colors from '../constants/Colors';

const EmpresaList = (props) => {
 const { items, navigation, empresasList, setEmpresasList } = props;
  //console.log('empresaList');
  return (
   <View>
  <FlatList
   data={items}
   renderItem={data => {
    return (
     <Card>
      <Empresa item={data.item} />
     </Card>
   
   );
   }}
   keyExtractor={item => item.id}
   />
  <FAB title="+"
      style={{
       borderRadius: 100,
       width: 50,
      height: 50
      }}
      color={Colors.accent}
      placement='right'
      onPress={() => navigation.navigate('Empresa', {
        empresasList: empresasList,
        setEmpresasList: setEmpresasList
      })}
  />
</View>
);
}

export default EmpresaList;
