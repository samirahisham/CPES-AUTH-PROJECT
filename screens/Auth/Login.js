import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  SafeAreaView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { login } from "../../store/actions/AuthActions";

const Login = ({ navigation, login, user }) => {
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
          placeholder="password"
          secureTextEntry={true}
          style={{
            width: "70%",
            borderWidth: 1,
            height: 20,
            marginBottom: 5,
          }}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text>Don't have an acount? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={{ color: "dodgerblue" }}>Signup</Text>
        </TouchableOpacity>
      </View>
      <Button
        title="Login"
        onPress={() => login({ username: username, password: password })}
      />
    </SafeAreaView>
  );
};
const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
});
const mapStateToProps = (state) => ({
  user: state.rootAuth.user,
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
