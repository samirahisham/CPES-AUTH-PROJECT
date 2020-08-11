import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { register } from "../../store/actions/AuthActions";
import { connect } from "react-redux";

const Register = ({ navigation, register }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Text>Username : </Text>
        <TextInput
          onChangeText={(text) => setUsername(text)}
          placeholder="username"
          style={{
            width: "70%",
            borderWidth: 1,
            height: 20,
            marginBottom: 5,
          }}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text>Password : </Text>
        <TextInput
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          placeholder="password"
          style={{
            width: "70%",
            borderWidth: 1,
            height: 20,
            marginBottom: 5,
          }}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text>Already have an account ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={{ color: "dodgerblue" }}>login</Text>
        </TouchableOpacity>
      </View>
      <Button
        title="Register"
        onPress={() => register({ username: username, password: password })}
      />
    </SafeAreaView>
  );
};
const mapDispatchToProps = (dispatch) => ({
  register: (user) => dispatch(register(user)),
});
export default connect(null, mapDispatchToProps)(Register);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
