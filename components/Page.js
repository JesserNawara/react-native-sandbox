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
          initialRouteName="1"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
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
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          screenOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'grey',
            labelStyle: { paddingBottom: 10, fontSize: 10 },
            style: { padding: 10, height: 70}
          }}
          >
              <Tab.Screen name = "1" component={First} />
              <Tab.Screen name = "2" component={Second}/>
              <Tab.Screen name = "3" component={Third} />
          </Tab.Navigator>
      </NavigationContainer>
    )
}

const styles = StyleSheet.create({

})