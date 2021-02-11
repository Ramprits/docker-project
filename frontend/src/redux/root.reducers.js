import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { cartReducer } from "./reducers/cart.reducer";
import { directoryReducer } from "./reducers/directory.reducer";
import { userLoginReducer } from "./reducers/user.reducer";
import { shopReducer } from "./reducers/shop.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "cart"],
};

const rootReducer = combineReducers({
  user: userLoginReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
