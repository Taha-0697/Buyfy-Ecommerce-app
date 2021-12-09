import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import cartReducer from "./cart/cartReducer";
import productsReducer from "./products/productsReducer";

var rootReducer = combineReducers({
  auth: authReducer,
  product: productsReducer,
  cart: cartReducer,
});

export default rootReducer;
