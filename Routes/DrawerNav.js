import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ShoppingHome from "../screens/Shopping/ShoppingHome";
import MyShoppingList from "../screens/ShoppingList/MyShoppingList";
import PrevOrders from "../screens/Previous_Orders/PrevOrders";
import HomeScreen from "./HomeScreen";
const Drawer = createDrawerNavigator();
const DrawerNav = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="My Shopping List" component={MyShoppingList} />
      <Drawer.Screen name="Pervious Orders" component={PrevOrders} />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
