import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore, Action } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";

import rootReducer, { RootState } from "./rootReducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  blacklist: [],
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [],
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
