import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home.js";
import Page from "./components/Page.js";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Home}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="page"
          component={Page}
          options={{ title: "page" }}
        />
      </Stack.Navigator> */}
      <Drawer.Navigator initialRouteName="page" >
        <Drawer.Screen name="home" component={Home}/>
        <Drawer.Screen name="page" component={Page}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}