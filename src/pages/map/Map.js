import React, { useEffect, useState} from 'react';
import MapView, {Callout, Marker} from 'react-native-maps';
import { Image, StyleSheet, Text, TouchableOpacity, View, Modal, SafeAreaView} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as Location from 'expo-location';
import { useNavigation } from "@react-navigation/native"
import NovoMarker from '../../data/Marker'
import ActiveModal from '../../components/modal/ModalDetails';
import { MultipleSelectList } from 'react-native-dropdown-select-list'


import { MultiSelect } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';


import ListFiltro from '../../data/FiltroMap' 




export default function Map(){

  const navigation = useNavigation();

  const [location, setLocation] = useState(null);
  const [marker, setMarker] = useState([]);
  const [coordenadas, setCoordenadas] = useState([]);
  const [modalcreate , setModalcreate] = useState(false);
  const [modalinf , setModalinf] = useState(false);
  const [modalfilter , setModalfilter] = useState(false);
 
  const [selectFilter, setSelectFilter] = useState([]);
  const [detalheMarker, setDetalheMarker] = useState([]);



// Verificar filtro

    const [listMarker, setListMarker] = useState(NovoMarker);

    useEffect(()=>{

      const ArrayMarker = []

      if (selectFilter.length ===0) {
          setListMarker(NovoMarker)
      }
      else {

           
        NovoMarker.map((n) =>{
          selectFilter.filter((e)=>{
              if (n.tipo === e) {
                ArrayMarker.push(n)
              }else{

              }                      
          })
        })
        
        setListMarker(ArrayMarker)
            
      }  

    },[selectFilter]);



  useEffect(() => {
    console.log('location inicial:', location )
 }, []);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();

  }, []);

  function captar(coordinate) {
    console.log('Coordinate:>>', coordinate)
    setCoordenadas([coordinate])
  }

  function gravar () {

  //  coordenadas.map((ponto) => 
  // setMarker ([...marker, ponto]))


    setModalcreate(false)
    
    navigation.navigate('CriarEvento', {...coordenadas});
    setCoordenadas([])
    
    console.log('NovoMarker - MAPA:', NovoMarker)
  }

  const PegarDetlheMarker = d =>{
    //console.log('Detalhes Marker:', d)
    setDetalheMarker([d])
}

const filterSelect = ()=>{
  if (selectFilter.length ===0) {
    return ('black')
  }
  else {
    return ('red')
  }
}

  return (
    <View style={styles.container} loadingEnabled>
      <Image style={styles.logo} />    

      <View style={{backgroundColor:'', width:'99%',  alignItems:'flex-end'}}>
      <TouchableOpacity onPress={()=> setModalfilter(!modalfilter)} style={{borderRadius:10,}} >
          <Text style={{color:{filterSelect}, width:80, height:20,  textAlign:'center', fontWeight:'bold', borderRadius:10,}}>
            Filtro
          </Text>
      </TouchableOpacity> 
      </View>

      {/* Modal Filtro */}
      <Modal   
          transparent={true}
          animationType='fade'
          visible={modalfilter}
          onRequestClose={() => setModalfilter(false)}
      >     
        <SafeAreaView style={styles.modalFilter}>           
            <View style={styles.modalFilterDetelhe}>
              <View style={styles.modalFilterContainer}>
                <MultiSelect
                  style={styles.dropdown}
                  placeholderStyle={[styles.placeholderStyle,{backgroundColor:''}]}
                  selectedTextStyle={[styles.selectedTextStyle, {backgroundColor:''}]}
                  inputSearchStyle={[styles.inputSearchStyle, {backgroundColor:''}]}
                  iconStyle={styles.iconStyle}
                  search
                  data={ListFiltro}
                  labelField="label"
                  valueField="label"
                  placeholder="Selecione um item"
                  searchPlaceholder="Procurar..."
                  value={selectFilter}
                  onChange={item => {
                    setSelectFilter(item);
                    console.log(item)
                  }}

                  selectedStyle={[styles.selectedStyle, {backgroundColor:''}]}
                />
              </View> 
            </View>
            <TouchableOpacity style={{flex:1, zIndex:9,}} onPress={()=> setModalfilter(false)}></TouchableOpacity>
        </SafeAreaView>
      
      </Modal>

       {/* Modal Informações Marker */}
      <Modal   
          transparent={true}
          animationType='fade'
          visible={modalinf}
          onRequestClose={() => setModalinf(false)}
      >      
          <ActiveModal handleClose = {()=> setModalinf(false)} 
          detalhe = {detalheMarker}/>    

      </Modal>

     {/* Modal Criar Marker */}
      <Modal
        transparent={true}
        animationType='fade'
        visible={modalcreate}
        onRequestClose={() => setModalcreate(false)}
      >
        <View 
          style={{    
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.3)',
            alignItems: 'center',
            justifyContent: 'center', 
            paddingTop:300,
            paddingBottom:370,
            
          }}
        >
          <View 
          style={{    
            flex: 1,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            width: '90%',
            borderRadius:15, 

          }}>
         
            <View 
              style={{flex:1, width:'80%', height: 30, paddingTop:10,}}>
              <Text style={styles.botao_texto}>Deseja criar um evento?</Text>
              <View 
                style={{
                  flex:1, 
                  flexDirection:'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',

                  }}
              >
                
                <TouchableOpacity 
                  onPress={()=> setModalcreate(false)}
                  style={styles.botao}
                > 
                  <Text style={styles.botao_texto}>Cancelar</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                  onPress={()=> gravar()} 
                  style={styles.botao}
                
                > 
                  <Text style={styles.botao_texto}>Criar</Text>
                </TouchableOpacity>
              </View>
          
            </View>
          </View>          
          
        </View>
      </Modal>

      <MapView style={styles.map}
        onPress={(e) => captar(e.nativeEvent.coordinate)}
        initialRegion={{
            latitude:-2.1634579077887883, 
            longitude:-56.09435290487479,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
        }}
        showsPointsOfInterest={false}
        showsBuildings={false}
      >
        { 
          coordenadas.map((m) => {
            return (
            <Marker 
              onPress={() => setModalcreate(true)}
              coordinate={m} 
              key={Math.random().toString()}
              style={{backgroundColor:'', width: 50, height: 50, flex:1,padding:3, alignItems:'left', justifyContent:'space-top'}}  
              >

            </Marker>);
        }
          
        )}

        {listMarker.length > 0 && 
          listMarker.map((m) => {
            return (
              <Marker 
              onPress={(e) => {setModalinf(true), PegarDetlheMarker(m)}}
              coordinate={m.coordinate} 
              key={Math.random().toString()}
              title={m.tipo}
              >
                <View style={{flex:1, backgroundColor:'', height:36, width:36, alignItems:'center', }}>
                    <View style={styles.markerCirculoUser}>
                      <View style={styles.markerCirculoIcon}>
                        <Image style={{width: 18, height: 18, borderRadius:10,}} source={require('../../images/esporte.jpg')}/> 
                      </View>
                    </View>
                    <View style={styles.markerPinoUser}/>                
                </View>
                
              </Marker>
            );
          }
          
        )}
     
      </MapView>


      

    

     <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',    
    
  },
  map: {
    width: '100%',
    height: '100%',
  },
  markerUser:{
    backgroundColor: 'green',
    borderRadius: 30,
    width: 33,
    height: 30,
    alignItems: 'center',
    
    justifyContent: 'center'
  },
  alfinete:{
    backgroundColor: 'black',
    width: 2,
    height: 4,
    borderColor:'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modal: {
    width: 10,
    height: 10,
  },

  logo: {
    width: 150,
    height: 48,
    marginBottom: 10, 
  },
  
  botao: {
    backgroundColor: '#90EE90',
    width: 90,
    height: 40,
    marginTop: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  botao_texto: {
    fontWeight: "bold",
    fontSize: 15,
    
  },

  caixaMarker: {
    width: 300,
    height: 200,
    //justifyContent: 'center',
    //alignItems: 'center',
    
  },

  // MODAL FILTRO

  modalFilter:{
    flex:1,  
},

  modalFilterDetelhe:{    
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    backgroundColor:"#FFF",
    width: '95%',
    //height:'50%',
    borderRadius:10,
},
  modalFilterContainer: { padding: 16, width:'99%', paddingTop: 10,},
  
  dropdown: {
    height: 30,
    backgroundColor: '',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  icon: {
    marginRight: 5,
  },
  selectedStyle: {
    borderRadius: 12,
  },

//Marker Promotor
markerCirculoProm:{
  backgroundColor:'blue', 
  height:31, 
  width:31, 
  borderRadius: 30,
  alignItems: 'center',
  justifyContent:'center',
},

markerPinoProm:{
  borderLeftWidth:3,
  borderLeftColor:'transparent',
  borderRightWidth:3,
  borderRightColor:'transparent',
  borderTopWidth:5,
  borderTopColor:'blue', 
},



//Marker Usuario
markerCirculoUser:{
  backgroundColor:'green', 
  height:31, 
  width:31, 
  borderRadius: 30,
  alignItems: 'center',
  justifyContent:'center',
},

markerPinoUser:{
  borderLeftWidth:3,
  borderLeftColor:'transparent',
  borderRightWidth:3,
  borderRightColor:'transparent',
  borderTopWidth:5,
  borderTopColor:'green', 

},

markerCirculoIcon:{
  width:24,
  height: 24,
  borderRadius:20,
  backgroundColor: '#ffffff',
  alignItems: 'center',
  justifyContent:'center',
},

});