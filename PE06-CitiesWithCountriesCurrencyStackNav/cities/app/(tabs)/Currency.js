import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Currency = ({ currency, used }) => {
  return (
    <View style={[styles.container, { backgroundColor: used ? '#c8e6c9' : '#ffcdd2' }] }>
      <Text style={styles.currency}>{currency}</Text>
      <Text style={styles.status}>{used ? 'Used' : 'Not Used'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 8,
    marginVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 1,
  },
  currency: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1976D2',
  },
  status: {
    fontSize: 14,
    color: '#555',
    marginTop: 2,
  },
});

export default Currency;
