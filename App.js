import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./components/Login";
import Home from "./components/Home";
import Setting from "./components/Setting";
import ViewDeviceList from "./components/ViewDeviceList";
import HumiditySensor from "./components/HumiditySensor";
import Detail from "./components/Detail";
import Automatic from "./components/Automatic";
import Manual from "./components/Manual";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="ViewDeviceList" component={ViewDeviceList} />
        <Stack.Screen name="HumiditySensor" component={HumiditySensor} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Automatic" component={Automatic} />
        <Stack.Screen name="Manual" component={Manual} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
