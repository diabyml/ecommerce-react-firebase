import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";

import cartReducer from "./cart/cart.reducer";

import DirectoryReducer from "./directory/directory.reducer";

import ShopReducer from "./shop/shop.reducer";

import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directoryReducer: DirectoryReducer,
  shopReducer: ShopReducer,
});

export default persistReducer(persistConfig, rootReducer);
