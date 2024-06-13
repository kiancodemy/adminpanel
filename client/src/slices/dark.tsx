import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  mode: string;
}

const initialState: CounterState = {
  mode: "dark",
};

export const setmode = createSlice({
  name: "dark",
  initialState,
  reducers: {
    setmodes: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { setmodes } = setmode.actions;

export default setmode.reducer;
