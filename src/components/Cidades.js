import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import BuscarCidades from '../data/Cidades'

const ListaCidades = BuscarCidades

  const Cidades = (props) => {
   
    const [selected, setSelected] = useState('');
    
    useEffect(() => {
     props.upCidade(selected)  
    },[selected]);
  
    return(
      <SelectList 
          setSelected={(val) => setSelected(val)} 
          data={ListaCidades} 
          save="value"
          placeholder='Selecione sua cidade'
          dropdownStyles={styles.dropdown}
  
      />
      
    )
  
  };
  
  
  
  export default Cidades;
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 5,
      width:200,
    },
    dropdown: {
      height: 300,
      width: 200,
      backgroundColor: '#EEEEEE',
      borderRadius: 22,
      paddingHorizontal: 8,
    },
  });