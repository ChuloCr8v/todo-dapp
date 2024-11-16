import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  connectedAccount: "",
};

const authSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setConnectedAccount: (state, action: PayloadAction<string>) => {
      state.connectedAccount = action.payload;
    },
    logOut: (state) => {
      state.connectedAccount = "";
    },
  },
});

export const { setConnectedAccount, logOut } = authSlice.actions;

export default authSlice.reducer;
