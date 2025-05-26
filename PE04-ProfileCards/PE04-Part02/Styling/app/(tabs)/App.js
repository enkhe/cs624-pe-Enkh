import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import ProfileCard from './ProfileCard';
import styles from './styles';

const userImage = require('../../assets/images/user.png');

export default function App() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const users = Array(6).fill({
    image: userImage,
    name: 'John Doe',
    occupation: 'React Native Developer',
    description: 'John is a really great JavaScript developer. He loves building apps with React Native.',
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {users.map((user, index) => (
        <ProfileCard
          key={index}
          user={user}
          isExpanded={expandedIndex === index}
          onPress={() => setExpandedIndex(index === expandedIndex ? null : index)}
        />
      ))}
    </ScrollView>
  );
}