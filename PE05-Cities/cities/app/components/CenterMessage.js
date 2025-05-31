import React from 'react';
import { View, Text } from 'react-native';

const CenterMessage = ({ message }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ fontSize: 18, color: '#888', textAlign: 'center' }}>{message}</Text>
  </View>
);

export default CenterMessage;
