import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView,TouchableOpacity, Text,} from 'react-native';
import { MultiSelect } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';

import ListFiltro from '../../data/FiltroMap' 


  export default function ModalFiltro ({handleClose}) {

    const [selected, setSelected] = useState([]);

    return (

        <SafeAreaView style={styles.container}>           
            <View style={styles.content}>
              <View style={styles.container2}>
                <MultiSelect
                  style={styles.dropdown}
                  placeholderStyle={[styles.placeholderStyle,{backgroundColor:''}]}
                  selectedTextStyle={[styles.selectedTextStyle, {backgroundColor:'blue'}]}
                  inputSearchStyle={[styles.inputSearchStyle, {backgroundColor:'green'}]}
                  iconStyle={styles.iconStyle}
                  search
                  data={ListFiltro}
                  labelField="label"
                  valueField="value"
                  placeholder="Selecione um item"
                  searchPlaceholder="Procurar..."
                  value={selected}
                  onChange={item => {
                    setSelected(item);
                  }}

                  selectedStyle={[styles.selectedStyle, {backgroundColor:'yellow'}]}
                />
              </View> 
            </View>
            <TouchableOpacity style={{flex:1, zIndex:9,}} onPress={handleClose}></TouchableOpacity>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create ({
  container:{
      flex:1,
      
      backgroundColor:'pink',
  },

  content:{    

      marginLeft: 10,
      marginRight: 10,
      marginTop: 50,
      backgroundColor:"#FFF",
      width: '95%',
      //height:'50%',
      borderRadius:10,
  },



  container2: { padding: 16, width:'99%', paddingTop: 10, backgroundColor: 'yellow',},
  dropdown: {
    height: 50,
    backgroundColor: 'green',
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

})

