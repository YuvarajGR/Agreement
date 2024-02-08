import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { SkyBlue, DarkYBlue } from "./Color";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
const Field = ({ name, lock, ...rest }) => {
  return (
    <View style={styles.fieldContainer}>
      <FontAwesome
        style={styles.icon}
        name={lock}
        lock={lock}
        size={24}
        color={SkyBlue}
      />
      {/* <MaterialIcons
        style={styles.icon}
        name={lock}
        lock={lock}
        size={24}
        color={SkyBlue}
      /> */}
      <TextInput
        {...rest}
        style={styles.input}
        placeholderTextColor={DarkYBlue}
      />
    </View>
  );
};

export default Field;

const styles = StyleSheet.create({
  fieldContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
    marginTop: 20,
  },
  icon: {
    marginLeft: 10,
    fontSize: 28,
  },
  input: {
    flex: 1,
    fontSize: 15,
    borderRadius: 5,
    color: SkyBlue,
    height: 48,
    paddingHorizontal: 20,
    backgroundColor: "white",
    // style={{ fontSize: email ? 16 : 16 }}
  },
});
