import { createSlice } from "@reduxjs/toolkit";
import { IInitialState, IUserData } from "./authSlice.type";
import { Status } from "@/lib/types/type";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState: IInitialState = {
  user: {
    email: "",
    password: "",
  },
  status: Status.LOADING,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setUser(state: IInitialState, action: PayloadAction<IUserData>) {
      state.user = action.payload;
    },
    setStatus(state: IInitialState, action: PayloadAction<Status>) {
      state.status = action.payload;
    },
  },
});

export const { setUser, setStatus } = authSlice.actions;
export default authSlice.reducer;
