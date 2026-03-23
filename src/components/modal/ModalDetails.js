import React from "react";
import {SafeAreaView, StyleSheet,TouchableOpacity, View, Text} from 'react-native';

export default function ActiveModal ({handleClose, detalhe}) {
    
   const DetalheMarker = detalhe.map((item)=>item.tipo)

    return (

        <SafeAreaView style={styles.container}>
           <TouchableOpacity style={{flex:1, zIndex:9,}} onPress={handleClose}></TouchableOpacity>
            <View style={[styles.content]}>
                <Text>Area de Detalhes</Text>
                <Text style={{fontWeight:"bold", fontSize:18, textAlign:'center'}}>{DetalheMarker}</Text>
            </View>

        </SafeAreaView>

    )
}

const styles = StyleSheet.create ({
    container:{
        flex:1,        
    },
    content:{    
           
        marginLeft: 10,
        marginRight: 10,
        marginBottom:60,
        backgroundColor:"#FFF",
        width: '95%',
        height:'20%',
        borderRadius:10,
       


    }

})