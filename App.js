import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./App/components/HomeScreen";
import Loading from "./App/components/Loading";
import { Provider } from "react-redux";
import store from "./App/store";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          {/* <Stack.Screen name="Loading" component={Loading} /> */}
        </Stack.Navigator>
      </NavigationContainer>
      {/* <View style={styles.container}>
        <HomeScreen />
      </View> */}
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
