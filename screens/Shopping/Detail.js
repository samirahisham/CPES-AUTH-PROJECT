import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  View,
  Button,
} from "react-native";
import ShoppingItemObj from "./ShoppingItemObj";
import { addToCart } from "../../store/actions/cartActions";
import { connect } from "react-redux";

const Detail = ({ route, add }) => {
  const [quantity, setQuantity] = useState(0);
  const itemProp = route.params.ItemParam;
  const ItemAttibtes = {
    id: 1,
    Reviews: [{ written_review: "good food !", user: "samira" }],
    Categories: [{ name: "Food" }],
    Producer: { name: "The Food co" },
    name: "food",
    img: " http://127.0.0.1:8000/media/155557testImg.jpg ",
    price: "12",
    description: "well made food",
    stock: "15",
  };
  const renderItem = ({ item }) => {
    return (
      <Text>
        {item.user} : {item.written_review}
      </Text>
    );
  };
  const renderCat = ({ item }) => {
    return <Text>category : {item.name}</Text>;
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, marginBottom: 30 }}>
        <ShoppingItemObj item={itemProp} />
      </View>
      <View style={{ flex: 1 }}>
        <Text>producer : {ItemAttibtes.Producer.name}</Text>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Button title="-" onPress={() => setQuantity(quantity - 1)} />
          <Text> {quantity} </Text>
          <Button title="+" onPress={() => setQuantity(quantity + 1)} />
        </View>
        <Button
          title="add to cart"
          onPress={() => add({ item: itemProp, quantity: quantity })}
        />
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          keyExtractor={(item, idx) => item.id + idx}
          data={ItemAttibtes.Categories}
          renderItem={renderCat}
        />
        <FlatList
          keyExtractor={(item, idx) => item.id + idx}
          data={ItemAttibtes.Reviews}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};
const mapDispatchToProps = (dispatch) => ({
  add: (item) => dispatch(addToCart(item)),
});

export default connect(null, mapDispatchToProps)(Detail);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
