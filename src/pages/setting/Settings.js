import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, Image, FlatList, View,Modal} from 'react-native';
import { Component, useEffect, useState } from 'react';


import MapView, {Callout, Marker} from 'react-native-maps';


export default function Config(){
  const [movies, setMovies] = useState([])
  
  //const navigation = useNavigation();

  // async function Start() {
  
  // } 

  // useEffect(()=> {
  //   Start();
  // },[]);

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.bannerimg} source={require('../../images/logo.png')}/>
      <Text style={styles.title}>CONFIGUAÇÕES</Text>

{/* 

      <MapView style={styles.map}
        initialRegion={{
            latitude:-2.1634579077887883, 
            longitude:-56.09435290487479,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
        }}
        showsPointsOfInterest={false}
        showsBuildings={false}
      >
        <Marker
        coordinate={{ latitude:-2.1634579077887883, longitude:-56.09435290487479,}}
        title={'Testando'}
        >


        </Marker>

      </MapView> */}

      <FlatList

            />

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
    justifyContent: 'top',
    marginTop: 20,
  },

  div: {
    margin: 5,
    width: 180,
    height: 280,  
    justifyContent: 'top',
    alignItems:'center',

  },  
  
  map: {
      width: '80%',
      height: '80%',
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
    color: '#fff',
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
