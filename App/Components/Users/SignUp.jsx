import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import Field from "../Common Component/Field";
import Btn from "../Common Component/Btn";
import { SkyBlue, Yellow } from "../Common Component/Color";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
const SignUp = () => {
  const [fname, setFname] = useState("");
  // const [lastname, setLastname] = useState("");
  const [email,setEmail]=useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfpassword] = useState("");
  const navigation = useNavigation();


  const handleSubmit=()=>{
    if(!fname || !email || !mobile || !password || !confpassword){
      Alert.alert("Error","Please fill in all mandatory details");
      return
    }
    if(password !==confpassword){
      Alert.alert("Error","Password dont matched")
      return
    } 

    const userData ={
      fname:fname,
      email:email,
      mobile:mobile,
      password:password,
      confpassword:confpassword,
    };
      axios.post("http://192.168.141.85:5001/register",userData).then((res)=>{
        console.log(res.data)
        if(res.data.status == "Ok"){
          Alert.alert("Success","Register Successfully",[{text:"Ok",onPress:()=>navigation.navigate("Login")}])
        }else{
          Alert.alert("Error",res.data.error || "Registration failed!")
        }
      }).catch((error)=>{
        console.log("Registration",error)
        Alert.alert("Error","Rigistration failed plz try again later")
      })
  }

  

  // const handleSubmit=()=>{
  //   const userData={
  //     fname:fname,
  //     // lastname,
  //     email,
  //     mobile,
  //     password,confpassword,
  //   };

  //   if(fname && email && mobile && password && confpassword){
  //     axios.post("http://192.168.4.85:5001/register",userData).then((res)=>{
  //       console.log(res.data)
  //       if(res.data.Status =="Ok"){
  //         Alert.alert("Register Successfully")
  //         navigation.navigate("Login")
  //       }else{
  //         Alert.alert(JSON.stringify(res.data));
  //       }
  //     }).catch((error)=>{
  //         console.log(error);
  //     })
  //   }else{
  //     Alert.alert("Error","Please fill mandatory details")
  //   }
   
  // }
    


  // const handleSignup = () => {
  //   if (
  //     !firstname.trim() ||
  //     !lastname.trim() ||
  //     !email.trim()||
  //     !mobile.trim() ||
  //     !password.trim() ||
  //     !confpassword.trim()
  //   ) {
  //     Alert.alert("Error", "Please Fill The All Details");
  //     return;
  //   }
  //   if(password !== confpassword){
  //     Alert.alert("Error","Password do not match")
  //     return
  //   }
  //   navigation.navigate("Login")
  // };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingTop: 100, paddingVertical: 10 }}>
        <Image
          style={styles.logo}
          source={{
            uri: "https://previews.123rf.com/images/r4yhan/r4yhan2007/r4yhan200700249/151036789-handshake-logo-icon-for-business-agreement-deal-contract-and-partnership-logo.jpg",
          }}
        />
      </View>
      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.title}>Register Your Account</Text>
        </View>
        <View style={styles.form}>
          <View>
            <Field
              value={fname}
              onChangeText={(text) => {
                setFname(text);
              }}
              lock="user"
              placeholder="First Name"
            />
            {/* <Field
              value={lastname}
              onChangeText={(text) => {
                setLastname(text);
              }}
              lock="user"
              placeholder="Last Name"
            /> */}
             <Field
              value={email}
              onChangeText={(text) => {
                setEmail(text);
              }}
              lock="phone-square"
              placeholder="Enter Email"
            />
            <Field
              value={mobile}
              onChangeText={(text) => {
                setMobile(text);
              }}
              lock="phone-square"
              placeholder="Mobile Number"
              keyboardType="numeric"
            />
            <Field
              value={password}
              onChangeText={(text) => {
                setPassword(text);
              }}
              lock="unlock-alt"
              placeholder="Password"
              secureTextEntry={true}
            />
            <Field
              value={confpassword}
              onChangeText={(text) => {
                setConfpassword(text);
              }}
              lock="lock"
              placeholder="Conform Password"
              secureTextEntry={true}
            />
            <Btn
              // onPress={handleSignup}
              onPress={()=>handleSubmit()}
              textColor="white"
              bgColor={SkyBlue}
              btnLabel="Sign Up"
            />
          </View>
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
            Already Have An Account ?
          </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{ color: "red", fontWeight: "bold" }}>Login</Text>
          </TouchableOpacity>
        </View>

        <View></View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;

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
