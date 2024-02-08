import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Btn = ({ onPress, textColor, btnLabel, bgColor }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={onPress}
      style={{
        backgroundColor: bgColor,
        borderRadius: 10,
        alignItems: "center",
        alignSelf: "center",
        width: 240,
        paddingVertical: 12,
        marginVertical: 30,
      }}
    >
      <Text style={{ color: textColor, fontSize: 18, fontWeight: "bold" }}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
};

export default Btn;

const styles = StyleSheet.create({});
