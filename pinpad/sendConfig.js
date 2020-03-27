import React from 'react';
import {View,Text,Button,Alert,StyleSheet} from 'react-native';
import PinpadNative from 'react-native-pinpad-native';
import styles from './estilos'

function sendConfig(){
    console.log("--------SEND CONFIG--------")
    PinpadNative.sendConfig(res => {
        console.log(res)
    })
}

export default () => {
    return (
        <View>
            <Text style={styles.title}>Esté método se encarga de enviar las configuraciones a el pinpad</Text>
            <Button title="Enviar configuraciones" onPress={sendConfig} />
            <View style={styles.separator} />
        </View>
    );
};