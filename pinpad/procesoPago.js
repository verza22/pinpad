import React from 'react';
import {View,Text,Button,Alert,StyleSheet} from 'react-native';
import PinpadNative from 'react-native-pinpad-native';
import styles from './estilos'

function procesoPago(){
    console.log("--------PROCESO PAGO--------")
    PinpadNative.procesoPago(
        1,      //Tipo transacción (Siempre corriente 1)
        1,      //Red Adquiriente (Datafast, Medianet o Austro) (SMM)
        "0",    //Codigo Diferido (Siempre 0 sin diferido)
        "1.00", //Base 0
        "1.00", //Base Imponible
        "0.12", //IVA
        "2.12", //Monto Total,
        3       // 1 Tarjeta, 2 Bp Wallet, 3 PayClub
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