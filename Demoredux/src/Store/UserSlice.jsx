import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count:0,
};

const Userslice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = Userslice.actions;

export default Userslice.reducer;
