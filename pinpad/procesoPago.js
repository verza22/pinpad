import React from 'react';
import {View,Text,Button,Alert,StyleSheet} from 'react-native';
import PinpadNative from 'react-native-pinpad-native';
import styles from './estilos'

function procesoPago(){
    console.log("--------PROCESO PAGO--------")
    PinpadNative.procesoPago(
        1,      //Tipo transacción
        1,      //Red Adquiriente
        "0",    //Codigo Diferido
        "1.00", //Base 0
        "1.00", //Base Imponible
        "0.12", //IVA
        "2.12"  //Monto Total
        ,(res => {
        console.log(res)
    }))
}

export default () => {
    return (
        <View>
            <Text style={styles.title}>Este método permite hacer un pago con la tarjeta</Text>
            <Button title="Proceso Pago" onPress={procesoPago} />
            <View style={styles.separator} />
        </View>
    );
};