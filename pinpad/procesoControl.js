import React from 'react';
import {View,Text,Button,Alert,StyleSheet} from 'react-native';
import PinpadNative from 'react-native-pinpad-native';
import styles from './estilos'

function procesoControl(){
    PinpadNative.procesoControl(res => {
        console.log("--------PROCESO CONTROL--------")
        console.log(res)
    })
}

export default () => {
    return (
        <View>
            <Text style={styles.title}>El proceso de control se encarga de limpiar los datos en el pinpad, se debe ejecutar antes de lectura de tarjeta</Text>
            <Button title="Proceso Control" onPress={procesoControl} />
            <View style={styles.separator} />
        </View>
    );
};