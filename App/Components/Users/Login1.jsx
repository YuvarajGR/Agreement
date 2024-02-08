import {
  Button,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";

const Login1 = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={100}
        style={styles.container}
      >
        <View style={{ alignItems: "center" }}>
          <Text style={styles.header}> Login to your account</Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.label}>Username </Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <Button
            style={styles.btn}
            title="login1"
            onPress={() => props.navigation.navigate("login")}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login1;

const styles = StyleSheet.create({
  header: { fontSize: 30, fontWeight: "bold", padding: 50 },
  container: {
    // flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingTop:100
  },
  form: {
    backgroundColor: "white",
    padding: 22,
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
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
});
