import React, { useEffect } from "react";
import { AsyncStorage } from "react-native";
import { AppLoading } from "expo";
import SampleData from "../data";

export default function Loading({ navigation }) {
  useEffect(() => checkLocalData(), []);
  function checkLocalData() {
    AsyncStorage.getItem("members", (err, data) => {
      AsyncStorage.setItem("members", JSON.stringify(SampleData.members));
      alert("Err")
      console.log(data);
      navigation.navigate("Home");
      //   if (data === null) {
      //     AsyncStorage.setItem("members", JSON.stringify(SampleData.members)); //save the initial data in Async
      //     navigation.navigate("Home");
      //   } else {
      //     alert("ERR");
      //     console.log(data);
      //     navigation.navigate("Home");
      //   }
    });
  }
  return <AppLoading />;
}
