import { combineReducers } from "@reduxjs/toolkit";

import { auth } from "ducks";

const rootReducer = combineReducers({
  auth: auth.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
