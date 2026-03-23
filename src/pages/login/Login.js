import React from 'react';
import {Image, View, TextInput,StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useForm, Controller} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import { useNavigation } from "@react-navigation/native"



const schema = yup.object({
    email: yup.string().email('Email invalido').required('Informe seu email'),
    senha: yup.string().min(6, 'A senha deve conter no mínimo 6 digitos').required('Digite sua senha'),
});

export default function Login () {   
    const navigation = useNavigation();

    const {control, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema)
     })

    function handleSignIn(data){            
     console.log(data);
    } 

    

return (   

    <View style={styles.container}> 
    
    <Image style={styles.bannerimg} source={require('../../images/logo.png')}/>

    <Text style={styles.title}>Bem Vindo </Text> 
    
    <Controller
        control={control}
        name='email'
        render={({field:{onChange, onBlur, value}}) => (
            <TextInput
                style={styles.input}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}   
                placeholder='Digite seu e-mail'
            />
        )}
    /> 
    {errors.email && <Text style={styles.textoErro}>{errors.email?.message}</Text>}

    <Controller
        control={control}
        name='senha'
        render={({field:{onChange, onBlur, value}}) => (
            <TextInput
                style={styles.input}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder='Digite sua senha'
                secureTextEntry={true}
            />
        )}
    />  
    {errors.senha && <Text style={styles.textoErro}>{errors.senha?.message}</Text>}           
        
    <TouchableOpacity style={styles.btnAcessar} onPress={handleSubmit(handleSignIn)}>
            <Text style={styles.btnText}> Entrar</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
        <Text>  Ainda não tem uma conta? Cadastre aqui.</Text>       
    </TouchableOpacity> 
    
    <TouchableOpacity style={styles.btnAcessar} onPress={() => navigation.navigate('Inicio')}>
        <Text style={styles.btnText}>HOME</Text>       
    </TouchableOpacity> 
            
    </View>
    


)

}


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems:"center",     
        textAlign:"center",

        
    },
    input: {
        
        backgroundColor:"#fff",
        borderRadius: 3,
        borderWidth:1,
        paddingHorizontal:5,
        margin: 4,
        width:'90%',
        borderColor:'green',
        
        
    },
    btnAcessar:{
        backgroundColor:"green",
        borderRadius: 3,
        marginHorizontal:5,
        paddingVertical:6,
        justifyContent: "center",
        color:"#fff",
        margin:5,
        textAlign:"center",
        width: '90%',
    },
    btnText:{
        textAlign:"center",
        color:"white",
        
    },

    title:{
        textAlign:"center",        
        fontSize: 35,
        margin: 20,
    },


    textoErro:{
        alignSelf:'flex-start',
        color:'#ff375b',
        marginBottom: 8,
        marginLeft: 20,
    },

    bannerimg:{
        width: 150,
        height: 50,
        margin: 10,
      },
})