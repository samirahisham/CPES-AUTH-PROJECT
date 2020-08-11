import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Cart from "../screens/Cart/Cart";
import StackNav from "./StackNav";
const Tab = createBottomTabNavigator();
const HomeScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Shop" component={StackNav} />
      <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
