import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
const EditScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Edit</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default EditScreen;
