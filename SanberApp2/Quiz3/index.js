import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {Login} from './Login';
import {Register} from './Register';
import {Splash} from './Splash';
import {Home} from './HomeScreen';


const Tabs = createBottomTabNavigator();
const TabsScreen = () => (
    <Tabs.Navigator 
    tabBarOptions={{labelStyle: { fontSize: 30 }}} >
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Cart" component={Splash} />
      <Tabs.Screen name="Message" component={Splash} />
      <Tabs.Screen name="Profile" component={Splash} />
    </Tabs.Navigator>
  );

const RootStack = createStackNavigator();

export default () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator screenOptions={{headerShown: false}}>
                <RootStack.Screen
                name="Register"
                component={Register}
                />

                <RootStack.Screen
                    name="Login"
                    component={Login}
                />  

                <RootStack.Screen
                name="Home"
                component={TabsScreen}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}
