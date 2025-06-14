import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Country = ({ route }) => {
  const { country, currency } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{country}</Text>
      <Text style={styles.currencyLabel}>Currency:</Text>
      <Text style={styles.currency}>{currency}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3f2fd',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1976D2',
    marginBottom: 16,
  },
  currencyLabel: {
    fontSize: 18,
    color: '#555',
    marginBottom: 4,
  },
  currency: {
    fontSize: 24,
    color: '#388e3c',
    fontWeight: '600',
  },
});

export default Country;
