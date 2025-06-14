import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import { colors } from './Colors'

class AddCountry extends React.Component {
  state = {
    country: '',
    currency: ''
  }
  onChangeText = (key, value) => {
    this.setState({ [key]: value })
  }
  submit = () => {
    if (this.state.country === '' || this.state.currency === '') {
      alert('please complete form')
      return
    }
    const country = {
      country: this.state.country,
      currency: this.state.currency
    }
    this.props.addCountry(country)
    this.setState({
      country: '',
      currency: ''
    }, () => {
      // Use navigation.navigate to CountriesNav, then force refresh
      if (this.props.navigation && this.props.navigation.navigate) {
        this.props.navigation.navigate('CountriesNav');
      }
    })
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Text style={styles.heading}>Add Country</Text>
        <TextInput
          placeholder='Country name'
          onChangeText={val => this.onChangeText('country', val)}
          style={styles.input}
          value={this.state.country}
        />
        <TextInput
          placeholder='Currency'
          onChangeText={val => this.onChangeText('currency', val)}
          style={styles.input}
          value={this.state.currency}
        />
        <TouchableOpacity onPress={this.submit} style={styles.button}>
          <Ionicons name="add-circle" size={24} color="white" style={{ marginRight: 8 }} />
          <Text style={styles.buttonText}>Add Country</Text>
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

export default AddCountry
