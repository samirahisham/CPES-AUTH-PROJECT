import { combineReducers } from "redux";
import cartReducer from "./CartReducer";
import authReducer from "./AuthReducer";

const rootReducer = combineReducers({
  rootCart: cartReducer,
  rootAuth: authReducer,
});
export default rootReducer;
