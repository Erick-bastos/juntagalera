
import React, { useState, useEffect} from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { SelectCountry } from 'react-native-element-dropdown';

const local_data = [
  { value: 'Esporte', lable: 'Esporte' },
  { value: 'Entretenimento', lable: 'Entretenimento'},
  { value: 'Jogos', lable: 'Jogos'},
  { value: 'Lazer', lable: 'Lazer'}, 
];

const SelectCategoria = (props) => {

  const [categoria, setCategoria] = useState(''); 
  
  useEffect(() => {
    props.upCategoria(categoria)
   },[categoria]);  

  return (
    <SelectCountry
      style={styles.dropdown}
      selectedTextStyle={styles.selectedTextStyle}
      placeholderStyle={styles.placeholderStyle}
      // imageStyle={styles.imageStyle}
      // iconStyle={styles.iconStyle}
      maxHeight={200}
      value={categoria}
      data={local_data}
      valueField="value"
      labelField="lable"
      // imageField="image"
      placeholder="Selecione Categoria"
      searchPlaceholder="Buscar..."
      onChange={e => {
        setCategoria(e.value);
      }}
    />
    
  );
 
};

export default SelectCategoria;

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 30,
    width: 200,
    backgroundColor: '#EEEEEE',
    borderRadius: 22,
    paddingHorizontal: 8,
  },
  imageStyle: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 8,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});