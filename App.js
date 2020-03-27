import React from 'react';
import {View} from 'react-native';

import Configuraciones from './pinpad/setConfig'
import EnviarConfiguraciones from './pinpad/sendConfig'
import ProcesoControl from './pinpad/procesoControl'
import LecturaTarjeta from './pinpad/lecturaTarjeta'
import ProcesoPago from './pinpad/procesoPago'

import styles from './pinpad/estilos'


export default () => {
  return (
    <View style={styles.container}>
      <Configuraciones />
      <EnviarConfiguraciones />
      <ProcesoControl />
      <LecturaTarjeta />
      <ProcesoPago />
    </View>
  );
};

