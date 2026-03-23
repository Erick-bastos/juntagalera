import React from 'react';
import {Image, View, TextInput,StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import { useNavigation } from "@react-navigation/native"
import * as yup from 'yup';


const schema = yup.object({
    nome: yup.string().required("Informe seu nome"),
    email: yup.string().email('Email invalido').required('Informe seu email'),
    senha: yup.string().min(6, "A senha deve conter no mínimo 6 digitos").required('Digite sua senha'),
    conf_senha: yup.string().min(6, "A senha deve conter no mínimo 6 digitos").required('Digite sua senha').oneOf([yup.ref('senha'), null], 'Senhas Diferente! Repita a senha anterior' ),

})

export default function Registro () {
    const {control, handleSubmit, formState:{errors}} = useForm({resolver: yupResolver(schema)})   
    const navigation = useNavigation();
    

    function handleSignIn(data){            
     console.log(data)
     navigation.navigate('Login')

    } 

    function link (){    
    navigation.navigate('Login')
    }

return (   

    <View style={styles.container}> 
    <Image style={styles.bannerimg} source={require('../../images/logo.png')}/>


    <Text style={styles.title}>Cadastro</Text> 
    
    <Controller
        control={control}
        name='nome'
        render={({field:{onChange, onBlur, value}}) => (
            <TextInput
                style={styles.input}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}   
                placeholder='Digite seu Nome'
            />
        )}
    /> 
    {errors.nome && <Text style={styles.textoErro}>{errors.nome?.message}</Text>}

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

        <Controller
        control={control}
        name='conf_senha'
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
    {errors.conf_senha && <Text style={styles.textoErro}>{errors.conf_senha?.message}</Text>}         


    <TouchableOpacity style={styles.btnAcessar} onPress={handleSubmit(handleSignIn)}>
            <Text style={styles.btnText}> Cadastrar</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.btnAcessar} onPress={() => navigation.navigate('Contatos')}>
        <Text style={styles.btnText}>Contatos</Text>       
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