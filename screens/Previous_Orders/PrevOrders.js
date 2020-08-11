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

const PrevOrders = () => {
  const myItems = [
    { date: "2020/02/15", total: "25" },
    { date: "2020/02/15", total: "25" },
    { date: "2020/02/15", total: "25" },
    { date: "2020/02/15", total: "25" },
    { date: "2020/02/15", total: "25" },
    { date: "2020/02/15", total: "25" },
    { date: "2020/02/15", total: "25" },
    { date: "2020/02/15", total: "25" },
    { date: "2020/02/15", total: "25" },
  ];
  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          padding: 10,
          flexDirection: "row",
        }}
      >
        <Text>-</Text>
        <Text style={{ marginHorizontal: 5 }}>{item.date}</Text>
        <Text style={{ marginHorizontal: 5 }}>{item.total}</Text>
      </View>
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
        <Text>My Orders</Text>
        <View
          style={{
            flex: 1,
          }}
        >
          <FlatList
            style={{ padding: 10 }}
            keyExtractor={(item, idx) => item.date.toString() + idx}
            data={myItems}
            renderItem={renderItem}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PrevOrders;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
