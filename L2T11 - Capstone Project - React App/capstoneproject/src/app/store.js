import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlice";
import userReducer from "../slices/userSlice";

// Redux store setup combining slices
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});
