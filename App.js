import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home.js";
import Page from "./components/Page.js";
import Navbartest from "./components/Navbartest.js";
import ReactionBar from "./components/Reactionbar/ReactionBar.js";
import Test from "./components/Test.js";


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
      <Drawer.Navigator initialRouteName="reactionbar" >
        <Drawer.Screen name="home" component={Home} options={{ headerShown: false }}/>
        <Drawer.Screen name="page" component={Page} options={{ headerShown: false }}/>
        <Drawer.Screen name="navbar" component={Navbartest} options={{ headerShown: false }}/>
        <Drawer.Screen name="reactionbar" component={ReactionBar} options={{ headerShown: false }}/>
        <Drawer.Screen name="test" component={Test} options={{ headerShown: false }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
