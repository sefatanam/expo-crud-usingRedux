import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
  TouchableOpacity,
  SafeAreaView,
  Button,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getMember, deleteMember } from "../actions";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const dataReducer = useSelector((state) => state.dataReducer);
  const { members } = dataReducer;

  useEffect(() => getData(), []);

  const getData = () => {
    AsyncStorage.getItem("members", (err, members) => {
      if (err) alert("Home Component " + err.message);
      else {
        dispatch(getMember(JSON.parse(members)));
      }
    });
  };

  const onDelete = (id) => {
    AsyncStorage.getItem("members", (err, members) => {
      if (err) alert(err.message);
      else if (members !== null) {
        members = JSON.parse(members);
        const index = members.findIndex((obj) => obj.id === id);
        console.log(index);
        if (index !== -1) members.splice(index, 1);
        AsyncStorage.setItem("quotes", JSON.stringify(members), () =>
          dispatch(deleteMember(id))
        );
      }
    });
  };

  return (
    <SafeAreaView>
      {members.map((obj) => (
        <View style={styles.touchableOpacityContainer}>
          <TouchableOpacity key={obj.id} style={styles.touchableOpacityStyle}>
            <View>
              <Text style={styles.textStyle}>{obj.name}</Text>
              <Text style={styles.textStyle}>{obj.contact}</Text>
            </View>
            <View style={styles.buttonStyle}>
              <View>
                <Button
                  title="Edit"
                  onPress={() => alert("this id is :" + obj.id)}
                />
              </View>
              <View>
                <Button title="Delete" onPress={() => onDelete(obj.id)} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  touchableOpacityStyle: {
    backgroundColor: "#6420ee",
    borderRadius: 5,
  },
  touchableOpacityContainer: {
    padding: 12,
  },
  textStyle: {
    fontSize: 20,
    color: "#fff",
    margin: 4,
    textAlign: "center",
  },
  buttonStyle: {
    flexDirection: "column",
  },
});
