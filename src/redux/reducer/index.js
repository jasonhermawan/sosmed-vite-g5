import { configureStore } from "@reduxjs/toolkit";
import { accountReducer } from "./accountreducer";

export const globalState = configureStore({
  reducer: {
    accountReducer,
  }
})

