import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import Empresas from '../data/Empresas';

const EmpresaScreen = ({ navigation, route }) => {

 const { empresasList, setEmpresasList } = route.params;

 //const [empresas, setEmpresas] = useState(Empresas.empresas);
 const [razonSocial, setRazonSocial] = useState('');
 const [cuit, setCuit] = useState('');
 const [ubicacion, setUbicacion] = useState('');
 const [telefono, setTelefono] = useState('');
 const [email, setEmail] = useState('');
 const [art, setArt] = useState('');

 const handlerRazonSocialChange = (value) => {
  setRazonSocial(value);
 };

 const handlerCuitChange = (value) => {
  setCuit(value);
 };
 
 const handlerUbicacionChange = (value) => {
  setUbicacion(value);
 };
 
 const handlerTelefonoChange = (value) => {
  setTelefono(value);
 };
 
 const handlerEmailChange = (value) => {
  setEmail(value);
 };
 
 const handlerArtChange = (value) => {
  setArt(value);
 };

 const handlerConfirm = () => {
  const newId = empresasList.length + 1;
  
  const newEmpresa = {
   id: newId,
   razonSocial: razonSocial,
   cuit: cuit,
   ubicacion: ubicacion,
   telefono: telefono,
   email: email,
   artContratada: art
  };

  const newEmpresas = [...empresasList, newEmpresa];
  
  setEmpresasList(newEmpresas);
  
  //console.log('Empresas', newEmpresas);
  
  /*
 insertar mensaje de grabación exitosa
 */

   //luego de insertar vuelvo a la lista de empresas
  navigation.navigate('EmpresaList');
 };


 return (<View>
  <Text>{'Razón Social'}</Text>
  <TextInput value={razonSocial}
   placeholder="Ingrese razón social..."
   onChangeText={handlerRazonSocialChange}/>
  
  <Text>{'CUIT'}</Text>
  <TextInput value={cuit}
   placeholder='Ingrese cuit...'
   onChangeText={handlerCuitChange}/>
  
  <Text>{'Ubicación'}</Text>
  <TextInput value={ubicacion}
   placeholder='Ingrese ubicación...'
   onChangeText={handlerUbicacionChange}/>
  
  <Text>{'Telefono'}</Text>
  <TextInput value={telefono}
   placeholder='Ingrese teléfono...'
   onChangeText={handlerTelefonoChange}/>
  
  <Text>{'Email'}</Text>
  <TextInput value={email}
   placeholder='Ingrese email...'
   onChangeText={handlerEmailChange}/>
  
  <Text>{'ART Contratada'}</Text>
  <TextInput value={art}
   placeholder='Ingrese ART contratada...'
   onChangeText={handlerArtChange}/>
 
  <Button title='Confirmar' onPress={handlerConfirm} />

 </View>
 )};

const styles = StyleSheet.create({
 screen: {
  
 }
});

export default EmpresaScreen;