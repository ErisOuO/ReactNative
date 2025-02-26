// Propinas.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import TipHistory from '../components/FlatList';
import { v4 as uuidv4 } from 'uuid';

const Propinas: React.FC = () => {
  const [consumo, setConsumo] = useState('');
  const [porcentaje, setPorcentaje] = useState('');
  const [historial, setHistorial] = useState<any[]>([]);

  const calcularPropina = (porcentajeSeleccionado?: number) => {
    const consumoNum = parseFloat(consumo);
    const porcentajeNum = porcentajeSeleccionado ?? parseFloat(porcentaje);

    if (isNaN(consumoNum) || isNaN(porcentajeNum) || consumoNum <= 0) {
      alert('Ingrese valores válidos');
      return;
    }

    const propina = (consumoNum * porcentajeNum) / 100;
    const total = consumoNum + propina;

    const nuevoRegistro = {
      id: uuidv4(),
      consumo: consumoNum,
      porcentaje: porcentajeNum,
      propina,
      total,
    };

    setHistorial([nuevoRegistro, ...historial]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Propinas</Text>
      <Text>Ingrese el monto de consumo:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={consumo}
        onChangeText={setConsumo}
      />

      <Text>Seleccione un porcentaje de propina:</Text>
      <View style={styles.buttonContainer}>
        <Button title="10%" onPress={() => calcularPropina(10)} />
        <Button title="15%" onPress={() => calcularPropina(15)} />
        <Button title="25%" onPress={() => calcularPropina(25)} />
      </View>

      <Text>O ingrese un porcentaje personalizado:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={porcentaje}
        onChangeText={setPorcentaje}
        placeholder="Ej: 18"
      />

      <Button title="Calcular Propina" onPress={() => calcularPropina()} />
      
      <Text>Historial de Cálculos:</Text>
      <TipHistory history={historial} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BEF1FF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    width: '80%',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    marginVertical: 10,
  },
});

export default Propinas;