import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

// Correct import paths for Cities, AddCity, Countries, and AddCountry
import Cities from './Cities';
import AddCity from './AddCity';
import CountriesNav from './CountriesNav';
import AddCountry from './AddCountry';

const Tab = createBottomTabNavigator();

export default class App extends Component {
  state = {
    cities: [],
    countries: []
  }

  addCity = (city) => {
    this.setState((prevState) => ({ cities: [...prevState.cities, city] }))
  }

  editCity = (index, newCity) => {
    this.setState((prevState) => {
      const cities = [...prevState.cities];
      cities[index] = newCity;
      return { cities };
    });
  }

  deleteCity = (index) => {
    this.setState((prevState) => {
      const cities = prevState.cities.filter((_, i) => i !== index);
      return { cities };
    });
  }

  addCountry = (country) => {
    this.setState((prevState) => ({ countries: [...prevState.countries, country] }))
  }

  editCountry = (index, newCountry) => {
    this.setState((prevState) => {
      const countries = [...prevState.countries];
      countries[index] = newCountry;
      return { countries };
    });
  }

  deleteCountry = (index) => {
    this.setState((prevState) => {
      const countries = prevState.countries.filter((_, i) => i !== index);
      return { countries };
    });
  }

  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Cities">
          {props => <Cities {...props} cities={this.state.cities} editCity={this.editCity} deleteCity={this.deleteCity} />}
        </Tab.Screen>
        <Tab.Screen name="AddCity">
          {props => <AddCity {...props} addCity={this.addCity} />}
        </Tab.Screen>
        <Tab.Screen name="CountriesNav">
          {props => <CountriesNav {...props} countries={this.state.countries} editCountry={this.editCountry} deleteCountry={this.deleteCountry} />}
        </Tab.Screen>
        <Tab.Screen name="AddCountry">
          {props => <AddCountry {...props} addCountry={this.addCountry} />}
        </Tab.Screen>
      </Tab.Navigator>
    );
  }
}