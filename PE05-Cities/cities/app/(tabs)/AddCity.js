// Listing 6.5 AddCity tab
// Listing 6.6 AddCity tab
import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { v4 as uuidV4 } from 'uuid';
import { colors } from './Colors'

class AddCity extends React.Component {
  state = {
    city: '',
    country: ''
  }
  onChangeText = (key, value) => {
    this.setState({ [key]: value })
  }
  submit = () => {
    if (this.state.city === '' || this.state.country === '') alert('please complete form')
    const city = {
      city: this.state.city,
      country: this.state.country,
      id: uuidV4(),
      locations: []
    }
    this.props.addCity(city)
    this.setState({
      city: '',
      country: ''
    }, () => {
      this.props.navigation.navigate('Cities')
    })
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Text style={styles.heading}>Add City</Text>
        <TextInput
          placeholder='City name'
          onChangeText={val => this.onChangeText('city', val)}
          style={styles.input}
          value={this.state.city}
        />
        <TextInput
          placeholder='Country name'
          onChangeText={val => this.onChangeText('country', val)}
          style={styles.input}
          value={this.state.country}
        />
        <TouchableOpacity onPress={this.submit} style={styles.button}>
          <Ionicons name="add-circle" size={24} color="white" style={{ marginRight: 8 }} />
          <Text style={styles.buttonText}>Add City</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#1976D2',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  heading: {
    color: '#1976D2',
    fontSize: 32,
    marginBottom: 10,
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 30
  },
  container: {
    backgroundColor: '#f4f6fb',
    flex: 1,
    justifyContent: 'center'
  },
  input: {
    margin: 10,
    backgroundColor: 'white',
    paddingHorizontal: 12,
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#d1d5db',
    fontSize: 16
  }
})

export default AddCity