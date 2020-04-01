import React from 'react';
import {View,Text,Button,Alert,StyleSheet} from 'react-native';
import PinpadNative from 'react-native-pinpad-native';
import styles from './estilos'

function reverso(){
    console.log("--------PROCESO PAGO--------")
    PinpadNative.reverso(
        1,      //Red Adquiriente (Datafast, Medianet o Austro) (SMM)
        "9999999"
        ,(res => {
        console.log(res)
    }))
}

export default () => {
    return (
        <View>
            <Text style={styles.title}>Este método permite hacer un reverso de un pago</Text>
            <Button title="Reverso" onPress={reverso} />
            <View style={styles.separator} />
        </View>
    );
};