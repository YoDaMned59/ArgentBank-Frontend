import { createSlice } from "@reduxjs/toolkit";

const loginState = {
  token: null,
  isAuth: false,
  error: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState: loginState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.body.token;
      state.isAuth = true;
      state.error = null;
    },
    loginFail: (state, action) => {
      state.token = null;
      state.isAuth = false;
      state.error = action.payload;
    },
    logoutSuccess: (state) => {
      state.isAuth = false;
      state.error = null;
    },
    resetError: (state) => {
      state.error = null;
    },
  },
});

export const { loginSuccess, loginFail, logoutSuccess, resetError } =
  loginSlice.actions;

export const loginReducer = loginSlice.reducer;
