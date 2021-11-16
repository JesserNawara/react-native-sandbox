import React from 'react'
import {View, StyleSheet, Text} from "react-native";
import {NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

//screens 
import First from '../navigationBar/tab1.js'; 
import Second from '../navigationBar/tab2.js'; 
import Third from '../navigationBar/tab3.js';

const first = "1";
const second = "2";
const third = "3";

export default function Page() {
    return (
      <NavigationContainer independent="true">
      <Tab.Navigator
        initialRouteName={First}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;
            let rn = route.name;

            if (rn === first) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === second) {
              iconName = focused ? 'list' : 'list-outline';

            } else if (rn === third) {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={24} color={color} />;
          },
        })}
        >

        <Tab.Screen name={first} component={First} options={{ headerShown: false }} />
        <Tab.Screen name={second} component={Second} options={{ headerShown: false }} />
        <Tab.Screen name={third} component={Third} options={{ headerShown: false }} />

      </Tab.Navigator>
    </NavigationContainer>
    )
}

const styles = StyleSheet.create({

})