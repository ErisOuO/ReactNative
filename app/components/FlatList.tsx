// FlatList.tsx
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

type HistoryItem = {
  id: string;
  consumo: number;
  porcentaje: number;
  propina: number;
  total: number;
};

type Props = {
  history: HistoryItem[];
};

const TipHistory: React.FC<Props> = ({ history }) => {
  return (
    <FlatList
      data={history}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text>Consumo: ${item.consumo.toFixed(2)}</Text>
          <Text>Propina: {item.porcentaje}%</Text>
          <Text>Monto Propina: ${item.propina.toFixed(2)}</Text>
          <Text>Total a Pagar: ${item.total.toFixed(2)}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
});

export default TipHistory;