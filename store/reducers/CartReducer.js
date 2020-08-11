import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/types";
import Cart from "../../screens/Cart/Cart";

const initalState = {
  Cart: [],
};

const cartReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
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
      let foundItem = state.Cart.find(
        (cart) => cart.item.id === action.payload.item.id
      );
      console.log("action.payload", action.payload.item);

      if (foundItem) {
        foundItem.quantity += action.payload.quantity;
        return { ...state, Cart: [...state.Cart] };
      }
      //   return state;
      return { Cart: state.Cart.concat(action.payload) };

    case REMOVE_FROM_CART:
      let filteredCart = state.Cart.filter(
        (cartObj) => cartObj !== action.payload
      );
      return {
        Cart: filteredCart,
      };

    default:
      return state;
  }
};

export default cartReducer;
