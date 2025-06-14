import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Countries from './Countries';
import Country from './Country';

const Stack = createStackNavigator();

const CountriesNav = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="CountriesList" 
        options={{ title: 'Countries' }}
      >
        {navProps => <Countries {...props} {...navProps} />}
      </Stack.Screen>
      <Stack.Screen 
        name="Country" 
        component={Country} 
        options={({ route }) => ({ title: route.params.country })}
      />
    </Stack.Navigator>
  );
};

export default CountriesNav;
