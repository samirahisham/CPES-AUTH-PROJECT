import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { styles1 } from "../../styles";

const ShoppingItemObj = ({ item }) => {
  return (
    <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
      <Image
        style={styles1.img}
        source={{
          uri: item.image_url,
        }}
      />
      <View>
        <Text> name : {item.name}</Text>
        <Text> price : {item.price}</Text>
        {item.stock && <Text> Stock : {item.stock}</Text>}
      </View>
    </View>
  );
};

export default ShoppingItemObj;
