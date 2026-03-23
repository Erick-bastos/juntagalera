import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, Image, FlatList, View,} from 'react-native';
import { Component, useEffect, useState } from 'react';
import Cidades from "../../components/Cidades"




export default function Home(){
  const [cidade, setCidade] = useState('')
  
  //const navigation = useNavigation();

  // async function Start() {
  //   var result = await api.get(`popular?api_key=${apiKey}&language=pt-BR`)
  //   setMovies(result.data.results);   
  // } 

  useEffect(()=> {
   console.log('Você Selecionou:', cidade)
  },[cidade]);


  const pegarCidade = t =>{
    setCidade(t)
    console.log('Home - cidade t:', t)
}

  return (
    <SafeAreaView style={styles.container}>
     
      <Image style={styles.bannerimg} source={require('../../images/logo.png')}/>
      <Text style={styles.title}>HOME PAGE</Text>
      <View style={styles.barpesq}>
        
      <Cidades upCidade={pegarCidade}/>

      </View>
      <FlatList/>

      <StatusBar backgroundColor='white'/>
      <View style={styles.rodape}>
        <Text style={styles.textRodape}>@JuntaGalera. Todos os direitos reservados Erick Bastos.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  barpesq:{
    width: '100%',
    height: 30,  
   

  },

  div: {
    margin: 5,
    width: 180,
    height: 280,  
    justifyContent: 'top',
    alignItems:'center',
    

  },
  rodape: {
    margin: 3,
    width: 380,
    height: 30,  
    justifyContent: 'center',
    alignItems:'center',    

  },

  title: {
    color: 'red',
    fontSize: 30,   
    margin: 5,    
  },

  text: {
    color: '#fff',
    fontSize:15,   
    margin: 2,   
    width: 150, 
    textAlign: 'center',
  },

  textRodape: {
    color: 'black',
    fontSize:13,   
    margin: 2,   
    width: 350, 
    textAlign: 'center',
  },

  bannerimg:{
    width: 150,
    height: 50,
    marginTop: 30,
    
  },
  
  filmeimg:{
    width: 150,
    height: 200,  
    margin:3,      
  },

  button:{
    width: 170,
    height: 50,
    backgroundColor: '#fa4a4a',  
    fontSize: 20, 
    borderRadius: 20,
    justifyContent: 'center',
    textAlign: 'center',
    margin: 15,
    color: '#fff',
    textAlignVertical: 'center',
  },

});
