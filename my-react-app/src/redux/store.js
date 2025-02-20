import { persistReducer, persistStore, PERSIST } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "../redux/loginSlice";
import userReducer from "../redux/userSlice";

const loginConfig = {
  key: "login",
  storage,
};

const userConfig = {
  key: "user",
  storage,
};

const persistedUserReducer = persistReducer(userConfig, userReducer);
const persistedLoginReducer = persistReducer(loginConfig, loginReducer);

export const store = configureStore({
  reducer: {
    login: persistedLoginReducer,
    user: persistedUserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }),
});
export const persistedStore = persistStore(store);