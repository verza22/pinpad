import React from 'react';
import {View,Text,Button,Alert,StyleSheet} from 'react-native';
import PinpadNative from 'react-native-pinpad-native';
import styles from './estilos'

function lecturaTarjeta(){
    console.log("--------LECTURA TARJETA--------")
    PinpadNative.lecturaTarjeta(res => {
        console.log(res)
    })
}

export default () => {
    return (
        <View>
            <Text style={styles.title}>Esté método se encarga de leer la tarjeta del tinpad</Text>
            <Button title="Lectura Tarjeta" onPress={lecturaTarjeta} />
            <View style={styles.separator} />
        </View>
    );
};