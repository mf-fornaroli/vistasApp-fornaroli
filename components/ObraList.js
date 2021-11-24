import React from 'react';
import { FlatList, View } from 'react-native';
import Obra from './Obra';
import Card from './Card';
import { FAB } from 'react-native-elements';
import Colors from '../constants/Colors';

const ObraList = (props) => {
 const { navigation, obrasList, setObrasList } = props;

  return (
   <View>
  <FlatList
   data={obrasList}
   renderItem={data => {
    return (
      <Card>
        <Obra item={data.item} />
      </Card>
    );
   }}
     keyExtractor={item => item.id} />
   <FAB title="+"
      style={{
       borderRadius: 100,
       width: 50,
      height: 50
      }}
      color={Colors.accent}
      placement='right'
      onPress={() => navigation.navigate('Obra', {
        obrasList: obrasList,
        setObrasList: setObrasList
      })}
      />
    </View>
  );
  
}
export default ObraList;
