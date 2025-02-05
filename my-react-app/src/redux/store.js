import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "./loginSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
