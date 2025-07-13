import { createSlice } from "@reduxjs/toolkit";
import { IInitialState, IRegisterdata, IUserData } from "./authSlice.type";
import { Status } from "@/lib/types/type";
import { PayloadAction } from "@reduxjs/toolkit";
import API from "@/lib/http";
import { AppDispatch } from "../store";

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

export function registerUser(data: IRegisterdata) {
  return async function registerUserThunk(dispatch: AppDispatch) {
    dispatch(setStatus(Status.LOADING));
    try {
      const response = await API.post("auth/register", data);
      if (response.status === 200) {
        dispatch(setStatus(Status.SUCCESS));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (err) {
      console.log(err);
    }
  };
}
