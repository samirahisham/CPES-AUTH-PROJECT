import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  View,
  Platform,
  Button,
} from "react-native";
import ShoppingItemObj from "../Shopping/ShoppingItemObj";
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/cartActions";

const Cart = ({ myCart, removeItem }) => {
  // const myCart = [
  //   {
  //     item: {
  //       id: 1,
  //       name: "food",
  //       price: 12,
  //       image_url:
  //         "https://taw9eelcdn.cachefly.net/media/catalog/product/cache/2/image/519x/9df78eab33525d08d6e5fb8d27136e95/1/_/1_567_100.jpg",
  //     },

  //     qauntity: 2,
  //   },
  //   {
  //     item: {
  //       id: 1,
  //       name: "food",
  //       price: 12,
  //       image_url:
  //         "https://taw9eelcdn.cachefly.net/media/catalog/product/cache/2/image/519x/9df78eab33525d08d6e5fb8d27136e95/1/_/1_567_100.jpg",
  //     },

  //     qauntity: 2,
  //   },
  //   {
  //     item: {
  //       id: 1,
  //       name: "food",
  //       price: 12,
  //       image_url:
  //         "https://taw9eelcdn.cachefly.net/media/catalog/product/cache/2/image/519x/9df78eab33525d08d6e5fb8d27136e95/1/_/1_567_100.jpg",
  //     },

  //     qauntity: 2,
  //   },
  //   {
  //     item: {
  //       id: 1,
  //       name: "food",
  //       price: 12,
  //       image_url:
  //         "https://taw9eelcdn.cachefly.net/media/catalog/product/cache/2/image/519x/9df78eab33525d08d6e5fb8d27136e95/1/_/1_567_100.jpg",
  //     },

  //     qauntity: 2,
  //   },
  // ];
  const total = myCart.reduce(
    (prev, next) => prev + next.item.price * next.qauntity,
    0
  );
  const renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <ShoppingItemObj item={item.item} />
        <Text>quantity:{item.quantity} </Text>
        <Button title="remove" onPress={() => removeItem(item)} />
      </View>
    );
  };
  const handlePress = () => {
    // console.log("my cart", myCart);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          marginTop: (Platform.OS = "android" ? 60 : 20),
          width: "100%",
        }}
      >
        <Text style={{ alignSelf: "center" }}>My Cart</Text>
        <FlatList
          style={{ width: "100%", marginBottom: 10 }}
          data={myCart}
          keyExtractor={(item, idx) => item.item.id.toString() + idx}
          renderItem={renderItem}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>Total</Text>
          <Text>{total} KD</Text>
        </View>
        <Button title="checkout" onPress={handlePress} />
      </View>
    </SafeAreaView>
  );
};
const mapStateToProps = (state) => ({
  myCart: state.rootCart.Cart,
});

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeFromCart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
