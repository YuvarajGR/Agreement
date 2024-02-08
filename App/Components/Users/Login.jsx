import React, { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Pressable,
  Button,
} from "react-native";
import Field from "../Common Component/Field";
import Btn from "../Common Component/Btn";
import { SkyBlue, Yellow } from "../Common Component/Color";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const Login = ({ textColor, btnLabel, bgColor }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleSubmit = () => {
    console.log(email, password);
    const userData = {
      email: email,
      password: password,
    };
    axios.post("http://192.168.4.85:5001/login", userData).then((res) => {
      console.log(res.data);
      if (res.data.status == "Ok") {
        Alert.alert("Login Successfully");
        navigation.navigate("Home");
      } else {
        Alert.alert("Enter username and password");
      }
    }).catch((error)=>{
        console.log(error,"Post request error");
        Alert.alert("Error","Error occuers during login")
    })

  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingTop: 100, paddingVertical: 15 }}>
        <Image
          style={styles.logo}
          source={{
            uri: "https://previews.123rf.com/images/r4yhan/r4yhan2007/r4yhan200700249/151036789-handshake-logo-icon-for-business-agreement-deal-contract-and-partnership-logo.jpg",
          }}
        />
      </View>
      {/* keyboardShouldPersistTaps={"alway"} or KeyboardAvoidingView */}
      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.title}>Login to your Account</Text>
        </View>
        <View style={styles.form}>
          <View>
            <Field
              value={email}
              onChangeText={(text) => {
                setEmail(text);
              }}
              lock="user"
              placeholder="Email Id / Mobile No"
            />
            <Field
              value={password}
              onChangeText={(text) => {
                setPassword(text);
              }}
              lock="lock"
              placeholder="Password"
              secureTextEntry={true}
            />
            <View
              style={{
                backgroundColor: bgColor,
                borderRadius: 10,
                alignItems: "center",
                alignSelf: "center",

                // paddingVertical: 12,
                // marginVertical: 30,
              }}
            >
              <Btn
                onPress={() => handleSubmit()}
                textColor="white"
                bgColor={SkyBlue}
                btnLabel="Login"
              />
            </View>
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => Alert.alert("Forgot Password", "Successfully done")}
          >
            <Text
              style={{
                color: "blue",
                fontSize: 15,
                marginTop: 20,
                fontWeight: "bold",
              }}
            >
              Forgot Password
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 25,
            gap: 8,
          }}
        >
          <Text style={{ color: "#192a56", fontWeight: "bold" }}>
            Don't Have An Account ?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={{ color: "red", fontWeight: "bold" }}>SignUp</Text>
          </TouchableOpacity>
        </View>

        <View></View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -80,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: 100,
    width: 100,
    borderRadius: 100, // for circular image
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#192a56",
  },
  form: {
    backgroundColor: "white",
    padding: 25,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
  },
});
