import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Platform, ScrollView, Text, TextInput, View } from 'react-native';

const HomeScreen = () => {
  const [favoriteCourse, setFavoriteCourse] = useState('');

  // Log the input result to the console whenever it changes
  useEffect(() => {
    console.log(`Favorite course: ${favoriteCourse}`);
  }, [favoriteCourse]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
        <Text style={styles.title}>Welcome to Core Components App</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Which course did you like?</Text>
        <TextInput
          style={styles.input}
          placeholder="ex. CS624"
          value={favoriteCourse}
          onChangeText={setFavoriteCourse}
        />
      </View>

      <View style={styles.courseSection}>
        <Text style={styles.sectionTitle}>Core Requirements (24 credits)</Text>
        <Text>CS 504 Software Engineering</Text>
        <Text>CS 506 Programming for Computing</Text>
        <Text>CS 519 Cloud Computing Overview</Text>
        <Text>CS 533 Computer Architecture</Text>
        <Text>CS 547 Secure Systems and Programs</Text>
        <Text>CS 622 Discrete Math and Algorithms for Computing</Text>
        <Text>DS 510 Artificial Intelligence for Data Science</Text>
        <Text>DS 620 Machine Learning & Deep Learning</Text>
      </View>

      <View style={styles.courseSection}>
        <Text style={styles.sectionTitle}>Depth of Study (6 Credits)</Text>
        <Text>CS 624 Full-Stack Development - Mobile App</Text>
        <Text>CS 628 Full-Stack Development - Web App</Text>
      </View>

      <View style={styles.courseSection}>
        <Text style={styles.sectionTitle}>Capstone (3 Credits)</Text>
        <Text>CS 690 Capstone Project</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  header: {
    alignItems: 'center',
    marginBottom: 16,
  },
  reactLogo: {
    height: 100,
    width: 100,
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 4,
    padding: 8,
    backgroundColor: '#FFF',
  },
  courseSection: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    backgroundColor: 'yellow',
    padding: 4,
  },
});

export default HomeScreen;
