import {SafeAreaView, StyleSheet, Text, TouchableOpacity, Image, View,} from 'react-native'
import {useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import {MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'
import MyContact from '../../data/MyContact'


const idUsuario = [{id:8}]
const indexUser = 1

export default function ContactDetails (item) {
    
    const navigation = useNavigation();
    
    const detalhes = item.route.params

    const addContact = (detalhe) =>{

        MyContact[1].idamigo.push(detalhe)
        

        navigation.navigate('Contatos')
    
    }


function tipoUsuario () {

     
    const filtro = MyContact[indexUser].idamigo.filter(item => {

        if (item.id === detalhes.id){
            console.log('item são iguais...',item)
            return item 
            

        }else{
            console.log('item são DIFERENTES...')
        }



    })
              

return 'bla bla'
    // if (id === filtro){
    //     return true
    // }else{
    //     return false
    // }

}

console.log('função...',tipoUsuario())

return (

    <SafeAreaView style={styles.container}>
        <View style={{ alignItems: 'center', justifyContent: 'top', marginTop: 80, backgroundColor:'orange'}}>
            <Image source={{uri: detalhes.avatarUrl}} style={styles.itemPhoto}/>
            <View style={styles.itemInfo}>
                <Text style={styles.itemP1}>{detalhes.name}</Text>
                <Text style={styles.itemP2}>{detalhes.cidade}</Text>
            </View>
        </View>

        <View style={{backgroundColor:'red', justifyContent:'space-between', width:'100%', flexDirection:'row' }}>
            <TouchableOpacity 
            onPress={() => navigation.navigate('Contatos')}
            style={{borderRadius:20, backgroundColor:'green', width:'45%', height:50, justifyContent:'center'}}>
                <Text style={{fontSize:20, backgroundColor:'yellow', textAlign:'center' }}>Cancelar</Text>
            </TouchableOpacity>
            
          

            <TouchableOpacity 
            onPress={() => addContact(detalhes)}
            style={{borderRadius:20, backgroundColor:'green', width:'45%', height:50, justifyContent:'center'}}
            >
                <Text style={{fontSize:20, backgroundColor:'yellow', textAlign:'center' }}>Salvar</Text>
            </TouchableOpacity>
            
        </View>
    </SafeAreaView>

);
} 

const styles = StyleSheet.create ({

container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop:35,
        
    },

text: {
    color: '#fff',
    fontSize:15,   
    margin: 2,   
    width: 150, 
    textAlign: 'center',
    },

item: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
    paddingTop: 15,
    paddingBottom: 15,        
},
itemPhoto: {
    width: 100,
    height: 100,
    borderRadius: 100/2
},
itemInfo: {
    backgroundColor:'pink',
    alignItems:'center',
    marginTop:20,

},
itemP1: {
    fontSize: 25,
    marginBottom: 5,

},

itemP2: {
    fontSize: 18,        

},


})