import React from 'react';
import {View,Text,Button,Alert,StyleSheet} from 'react-native';
import PinpadNative from 'react-native-pinpad-native';
import styles from './estilos'

function setConfig(){
    //Método de configuración si está todo correcto devuelve "ok" 
    //caso contrario devuelve el error de la excepción
    console.log("--------SET CONFIG--------")
    PinpadNative.setConfig(
        "192.168.1.25",  //IP
        "255.255.255.0", //Mascara
        "192.168.1.1",   //Gateway
        3000,            //Puerto principal
        9999,            //Puerto escucha
        30000,           //Timeout
        "1000000101",    //MID
        "10100402",      //TID
        "CID123456",     //CajaID
        "3000",          //Lote
        "1001",          //Referencia
        2,               //Version
        2,               //SHA,
        true,            //Emular comunicación
        true             //Emular pago éxitoso
        ,(res => {
        console.log(res)
    }))
}

export default () => {
    return (
        <View>
            <Text style={styles.title}>Este método permite configurar el pinpad con todos los parametros necesarios</Text>
            <Button title="Configuraciones" onPress={setConfig} />
            <View style={styles.separator} />
        </View>
    );
};