import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Pages/Home';
import Detail from './Pages/Detail';


const Stack = createStackNavigator();

const index = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen 
            name="Home" 
            component={Home} />
            <Stack.Screen 
            name="Detail" 
            component={Detail}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default index

const styles = StyleSheet.create({})
