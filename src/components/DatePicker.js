import React from "react"
import { useState } from "react"
import {StyleSheet, View, TouchableOpacity, SafeAreaView, TextInput, Text} from "react-native"
import DateTimePicker from "react-native-modal-datetime-picker"

export default function CustomDatePicker () {
    const [date, setDate] = useState (null)
    const [showPicker, setShowPicker] = useState (false)

    const handleDateChange  = (event, selectedDate ) => {

}

    return(

    <View>
        <TouchableOpacity onPress={() => setShowPicker(true)}>
            <Text> Open Data </Text>
        </TouchableOpacity>
        <DateTimePicker
        mode={'date'}
        value={date || new Date()}
        onChange={handleDateChange}     
        />

    </View>

)

}