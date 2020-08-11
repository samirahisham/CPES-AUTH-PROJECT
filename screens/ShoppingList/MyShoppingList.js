import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Platform,
  View,
  TouchableOpacity,
} from "react-native";

const MyShoppingList = () => {
  const myItems = [
    "itdfhakjlskjdshgejkafwdlawdjsfskdalsjdfkem1",
    "item2",
    "item3",
    "item1",
    "item2",
    "item3",
    "item2",
    "item3",
    "item1",
    "item2",
    "item3",
    "item2",
    "item3",
    "item1",
    "item2",
    "item3",
    "item2",
    "item3",
    "item1",
    "item2",
    "item3",
    "item2",
    "item3",
    "item1",
    "item2",
    "item3",
    "item2",
    "item3",
    "item1",
    "item2",
    "item3",
  ];
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={{ padding: 5 }}>
        <Text style={{ width: "100%" }}>{item}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          width: "100%",
          marginTop: (Platform.OS = "android" ? 40 : 20),
        }}
      >
        <TextInput
          placeholder="enter an Item name"
          style={{
            width: "70%",
            borderWidth: 1,
            height: 20,
            marginBottom: 5,
            marginTop: 30,
          }}
        />
        <View
          style={{
            flex: 1,
          }}
        >
          <FlatList
            keyExtractor={(item, idx) => idx}
            style={{ padding: 10 }}
            data={myItems}
            renderItem={renderItem}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyShoppingList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
