import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ShoppingHome from "../screens/Shopping/ShoppingHome";
import Detail from "../screens/Shopping/Detail";
import { Button } from "react-native";
import { logout } from "../store/actions/AuthActions";
import { connect } from "react-redux";
const Stack = createStackNavigator();
const StackNav = ({ logout }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Shop"
        component={ShoppingHome}
        options={{
          headerRight: () => (
            <Button onPress={() => logout()} title="logout" color="red" />
          ),
        }}
      />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(StackNav);
