
import { useNavigation } from "@react-navigation/native"
import { useState, useEffect } from "react"
import {Image, StyleSheet, View, TouchableOpacity} from "react-native"
import { SafeAreaView, TextInput } from "react-native"
import { Text } from "react-native"
import SelectCategoria from "../../../components/TipoEvento"

import Cidades from "../../../components/Cidades"

import DateTimePicker from '@react-native-community/datetimepicker'
import {FontAwesome, Ionicons} from '@expo/vector-icons'
import NovoMarker from '../../../data/Marker'




export default function CreatEvent({route}){
 
    const navigation = useNavigation();
    const Coordenadas = route.params[0]

   
    console.log('Parametros=>', Coordenadas)



    const [categoria, setCategoria] = useState ('')
    const [cidade, setCidade] = useState ('')
    const [tipo, setTipo] = useState ('')
    const [tipo3, setTipo3] = useState ('')    
    const [date, setDate] = useState (new Date())
    const [timeIni, setTimeIni] = useState (new Date())
    const [timeFin, setTimeFin] = useState (new Date())
    const [showDate, setShowDate] = useState (false)
    const [showTimeIni, setShowTimeIni] = useState (false)
    const [showTimeFin, setShowTimeFin] = useState (false)
   const [timeStamp, setTimeStemp] = useState () 
      
   
    function adicionaZero(numero){
        if (numero <= 9) 
            return "0" + numero;
        else
            return numero; 
    }

    let dataAtualFormatada = (adicionaZero(date.getDate().toString()) + "/" + (adicionaZero(date.getMonth()+1).toString()) + "/" + date.getFullYear())
    let timeIniFormatada = (adicionaZero(timeIni.getHours().toString()) + ":" + (adicionaZero(timeIni.getMinutes().toString())))
    let timeFinFormatada = (adicionaZero(timeFin.getHours().toString()) + ":" + (adicionaZero(timeFin.getMinutes().toString())))


    useEffect(() => {
     console.log('data:',date)
     setTimeStemp(date.getTime())
    },[date]);

    useEffect(() => {          
        console.log('timestamp:', timeStamp)
    },[timeStamp]);

    const onChangeDate  = (event, selectedDate ) => {
        setDate(selectedDate)
        setShowDate(false)        
    }

    const onChangeTimeIni = (event, selectedTime ) => {
        setTimeIni(selectedTime)
        setShowTimeIni(false) 
        console.log('hora Inicial:', selectedTime)    
    }

    const onChangeTimeFin = (event, selectedTime ) => {
        setTimeFin(selectedTime)
        setShowTimeFin(false)        
    }

    const showDatePicker  = () => {
        setShowDate(true)
    }

    const showTimePickerIni = () => {
        setShowTimeIni(true)
    }

    const showTimePickerFin = () => {
        setShowTimeFin(true)
    }

    const pegarCategoria = t =>{
        setCategoria(t)
        console.log('categoria t:',t)
    }

    const pegarCidade = t =>{
        setCidade(t)
        console.log('cidade t:', t)
    }



    console.log('Marker antes:', NovoMarker)
    
    function criarMarker() {
        //NovoMarker.push(Coordenadas)
        
        console.log('Marker depois:', NovoMarker)

        navigation.navigate('Mapa')
    }
    
    
    

   return(   
         
        <SafeAreaView style={style.container}>
           
        <Image style={style.bannerimg} source={require('../../../images/logo.png')}/>
        <Text style={style.title}>Criar Evento</Text>
        <View style={style.View}>
            <Text>Categoria do Evento: </Text>
            
            <SelectCategoria upCategoria={pegarCategoria}/>  
            
        </View>
        
        <View style={style.View}>
            <Text>Nome do Evento:</Text>
            <TextInput
            style={style.input}
            value={tipo}
            onChangeText={t=> setTipo(t)}            
            />
            <Text>{tipo}</Text>
        </View>

        <View style={style.View}>
            <Text>Data: </Text>        
            <Text style={style.textDate}>{dataAtualFormatada}</Text> 

            <TouchableOpacity onPress={() => showDatePicker()}>
            <FontAwesome name="calendar" size={24} color="black" /> 
                {showDate && (
                        <DateTimePicker
                        value={date}
                        mode='date'
                        display='calendar'
                        dateFormat='day month year' 
                        is24Hour={true}
                        onChange={onChangeDate} 
                        timeZoneName='América/São_Paulo'
                        minimumDate={new Date()}                                            
                        />
                )}  
                
            </TouchableOpacity>
        </View>

        <View style={style.View}>
            <Text>Hora Inicial: </Text>        
            <Text style={style.textDate}>{timeIniFormatada}</Text> 

            <TouchableOpacity onPress={() => showTimePickerIni()} >
            <Ionicons name="time-outline" size={24} color="black" /> 
                {showTimeIni && (
                        <DateTimePicker
                        value={timeIni}
                        mode='time'
                        display='clock'
                        is24Hour={true}
                        onChange={onChangeTimeIni} 
                        timeZoneName='América/São_Paulo'                      
                        />
                )}  
                
            </TouchableOpacity>
        </View>

        <View style={style.View}>
            <Text>Hora Final: </Text>        
            <Text style={style.textDate}>{timeFinFormatada}</Text> 

            <TouchableOpacity onPress={() => showTimePickerFin()} >
            <Ionicons name="time-outline" size={24} color="black" /> 
                {showTimeFin && (
                        <DateTimePicker
                        value={timeFin}
                        mode='time'
                        is24Hour={true}
                        onChange={onChangeTimeFin} 
                        timeZoneName='América/São_Paulo'                       
                        />
                )}  
                
            </TouchableOpacity>
        </View>

        <View style={style.View}>
            <Text>Visualização:</Text>
            <TextInput
            style={style.input}
            value={tipo3}
            onChangeText={t=> setTipo3(t)}            
            />
            <Text>  {tipo3}</Text>
        </View>

        <View style={style.View}>
            <Text>Cidade:</Text>
            <Cidades upCidade={pegarCidade} />
        </View>       
        
        <TouchableOpacity style={style.btnAcessar} onPress ={()=>criarMarker()} >
            <Text style={style.btnText}>Cadastrar</Text>
        </TouchableOpacity>        


        </SafeAreaView> 
    );
} 



const style = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#fff",
        justifyContent:'flex-start',
        alignItems:'center',
        marginTop: 35,
                
    },

    View: {        
        flexDirection:'row',  
        backgroundColor: "#fff",
        justifyContent: 'flex-start',
        alignItems:"top",
        width:'100%',
        height:40, 

                
    },

    title: {
        fontSize:22,
        fontWeight:'bold',
        color:'green',
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems:"center",
        padding: 10,
                
    },

    dateComponente: {
        width: 350,
    },
    

    input: {
        backgroundColor:"#fff",
        borderRadius: 3,
        borderWidth:1,
        paddingHorizontal:5,
        margin: 4,
        width:200,
        height:30,    
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
        width:150,
        
    },
    btnText:{
        textAlign:"center",
        color:"#fff",
    },

    bannerimg:{
        margin:50,
        width: 150,
        height: 50,
        margin: 10,
        borderColor:'#999'
      },
    
    textDate:{
        backgroundColor:"#fff",
        borderRadius: 3,
        borderWidth:1,
        paddingHorizontal:5,
        margin: 4,
        width:200,
        height:30,
      },
})
