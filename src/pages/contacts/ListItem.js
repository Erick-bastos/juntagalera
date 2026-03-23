import React from "react";
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native'
import Users from "../../data/Users";

const ListItem = ({contact}) => {
    <TouchableOpacity style={styles.item}>
        <Image source={{uri: contact.avatarUrl}} style={styles.itemPhoto}/>
        <View style={styles.itemInfo}>
            <Text style={styles.itemP1}>{contact.name}</Text>
            <Text style={styles.itemP2}>{contact.email}</Text>
        </View>

    </TouchableOpacity>

}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        marginLeft: 30,
        marginRight: 30,
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
        fontSize: 22,
        color:'#red',
        marginBottom: 5,
    
    },
    itemP2: {
        fontSize: 18,        

    },
})