import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./views/Login";
import Option from "./views/Option";

import HomeView1 from "./views/views1/Home";
import SettingView1 from "./views/views1/Setting";
import AutomaticView1 from "./views/views1/Automatic";
import ManualView1 from "./views/views1/Manual";
import Price from "./views/views1/Prices";
import News from "./views/views1/News";

import HomeView2 from "./views/views2/Home";
import SettingView2 from "./views/views2/Setting";
import AutomaticView2 from "./views/views2/Automatic";
import ManualView2 from "./views/views2/Manual";
import ViewDeviceList from "./views/views2/ViewDeviceList";
import HumiditySensor from "./views/views2/HumiditySensor";
import Detail from "./views/views2/Detail";

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
        <Stack.Screen name="Option" component={Option} />
        <Stack.Screen
          name="HomeView1"
          component={HomeView1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeView2"
          component={HomeView2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SettingView1"
          component={SettingView1}
          options={{ title: "Cài đặt" }}
        />
        <Stack.Screen
          name="SettingView2"
          component={SettingView2}
          options={{ title: "Cài đặt" }}
        />
        <Stack.Screen
          name="ViewDeviceList"
          component={ViewDeviceList}
          options={{ title: "Xem thiết bị" }}
        />
        <Stack.Screen name="HumiditySensor" component={HumiditySensor} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen
          name="AutomaticView1"
          component={AutomaticView1}
          options={{ title: "Thiết lập tưới tự động" }}
        />
        <Stack.Screen
          name="ManualView1"
          component={ManualView1}
          options={{ title: "Thiết lập tưới thủ công" }}
        />
        <Stack.Screen
          name="AutomaticView2"
          component={AutomaticView2}
          options={{ title: "Thiết lập tưới tự động" }}
        />
        <Stack.Screen
          name="ManualView2"
          component={ManualView2}
          options={{ title: "Thiết lập tưới thủ công" }}
        />
        <Stack.Screen
          name="Price"
          component={Price}
          options={{ title: "Thị trường nông sản" }}
        />
        <Stack.Screen
          name="News"
          component={News}
          options={{ title: "Tin tức nông sản" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
