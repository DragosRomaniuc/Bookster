import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { User } from "types/user";

export const initialState = {
  user: {},
  isLoggedIn: false,
  isLoggingIn: false,
  error: {},
  success: {},
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state) {
      state.isLoggingIn = true;
    },
    loginSuccess(state, action: PayloadAction<User>) {
      state.isLoggingIn = false;
      state.isLoggedIn = true;
      state.user = action.payload;
      state.error = {};
      state.success = {};
    },
    loginError(state, action: PayloadAction<number>) {
      state.isLoggingIn = false;
      state.isLoggedIn = false;
      state.user = null;
      state.error = action.payload;
      state.success = {};
    },
    resetAuth(state) {
      state = initialState;
    },
    setAccount(state, action: PayloadAction<number>) {
      state.user = {
        ...state.user,
        accountId: action.payload,
      };
    },
  },
});

const { login, loginSuccess, loginError, resetAuth, setAccount } = auth.actions;

export const actions = {
  login,
  loginSuccess,
  loginError,
  resetAuth,
  setAccount,
};

export const namespace = auth.name;

export const reducer = auth.reducer;
