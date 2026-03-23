import { SafeAreaView, StyleSheet, Text, TouchableOpacity, Image, View, FlatList, TextInput} from 'react-native';
import { useEffect, useState } from 'react';
import { useNavigation } from "@react-navigation/native"
import Users from '../../data/Users'
import {AntDesign } from '@expo/vector-icons'


export default function Contatos(){
  const navigation = useNavigation();
  const [searchText, setSerchText] = useState('')
  const [list, setList] = useState(Users)

  useEffect(()=>{
    if (searchText ==='') {     
     
        let newList = [...Users];
    
        newList.sort((a, b)=>{
            if (a.name > b.name){
              return 1;
            }else {
              if (b.name > a.name){
                return -1;
              }else {
                return 0;
              }
            }
        });
        setList(newList);
         
      
    }else {
      setList(
        Users.filter(item =>{
          if (item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1){
            return true;
          }else{
            return false;
          }
        })       
      )
    }  
  },[searchText]);
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Novo Contato</Text> 

      <View style={styles.Pesqisa}>
        <View style={{borderRadius:10, backgroundColor:'#C0C0C0', width: '100%', height:50, alignItems:'center', flexDirection: 'row'}}>
            <AntDesign
              name='search1'
              size={32}
              color='#888'
              style={{backgroundColor:'', left: 10,}}
            />
            <TextInput 
              style={styles.input}
              placeholder='Digite um nome'
              placeholderTextColor='#888'
              value={searchText}
              onChangeText={(t) => setSerchText(t)}
            />      
            
          </View>

        <View style={{width:'100%', height:'100%', backgroundColor:''}}> 
          <FlatList
            data={list} 
            style={{ height: 400,backgroundColor:''}}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
            return (    
              <TouchableOpacity onPress={()=> navigation.navigate('DetalheContato', {...item})} 
              style={styles.item}>
                <Image source={{uri: item.avatarUrl}} style={styles.itemPhoto}/>
                <View style={styles.itemInfo}>
                    <Text style={styles.itemP1}>{item.name}</Text>
                    <Text style={styles.itemP2}>{item.cidade}</Text>
                </View>
                
              </TouchableOpacity>)}}           
          />    


        </View>

      </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CriarEvento')}>
                  <Text style={styles.text}>Cadastro</Text>       
        </TouchableOpacity> 



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

  Pesqisa: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor:'',
    width:'98%'

  }, 

  input: {
    
    height: 40,
    width:'80%',
    backgroundColor:'#C0C0C0',
    margin:15,
    borderRadius: 5,
    fontSize: 19,
    paddingLeft: 15,
    paddingRight:15,
    color: '#ffffff'
  }, 

  botaoOrdenar: {
    width: 40,
    marginRight:20,
    backgroundColor:''
    
    

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
    width: 50,
    height: 50,
    borderRadius: 30

},
itemInfo: {
    marginLeft: 20,

},
itemP1: {
    fontSize: 18,
    marginBottom: 5,

},

itemP2: {
    fontSize: 14,        

},

botaoadd: {
  alignItems: 'center',
  
  width: 50,
  height: 50,


},


});
