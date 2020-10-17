import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import {Login} from './LoginScreen';
import {Register} from './RegisterScreen';
import {About} from './AboutScreen';
import {Skill} from './SkillScreen';
import {Add} from './AddScreen';
import {Project} from './ProjectScreen';

const Drawer = createDrawerNavigator();
const DrawerScreen = () => (
  <Drawer.Navigator initialRouteName="Skill">
    <Drawer.Screen name="Home" component={TabsScreen} />
    <Drawer.Screen name="About" component={About} />
  </Drawer.Navigator>
);

const Tabs = createBottomTabNavigator();
const TabsScreen = () => (
    <Tabs.Navigator 
    tabBarOptions={{ 
        labelStyle: { fontSize: 30 }, 
        activeBackgroundColor: '#ebdbb0', 
        inactiveBackgroundColor: '#FCFFE8'}} >
      <Tabs.Screen name="Skill" component={Skill} />
      <Tabs.Screen name="Add" component={Add} />
      <Tabs.Screen name="Project" component={Project} />
    </Tabs.Navigator>
  );

const RootStack = createStackNavigator();

export default () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator screenOptions={{headerShown: false}}>
                <RootStack.Screen
                    name="Login"
                    component={Login}
                />
                <RootStack.Screen
                name="Register"
                component={Register}
                />

                <RootStack.Screen
                name="Home"
                component={DrawerScreen}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}
