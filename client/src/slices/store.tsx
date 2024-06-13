import { configureStore } from "@reduxjs/toolkit";
import dark from "./dark";

export const store = configureStore({
  reducer: {
    setter: dark,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
