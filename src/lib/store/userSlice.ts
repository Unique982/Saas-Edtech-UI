import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserInitialState } from "./types";
import API from "../http";
const userInitialState: IUserInitialState = {
  name: "testing",
  password: "Ktm",
  data: "",
};
const userSlice = createSlice({
  name: "userSlice",
  initialState: userInitialState,

  reducers: {
    // state --> mathi ko instialState
    // action -> trigger gard pathauna data auna kura ho
    setName(state: IUserInitialState, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setPassword(state: IUserInitialState, action: PayloadAction<string>) {
      state.name = action.payload;
    },
  },
});
export const { setName, setPassword } = userSlice.actions;
export default userSlice.reducer;

function registerUser(data) {
  return async function registerUserThunk(data) {
    try {
      const response = await API.post("user/register", data);
      console.log("Response data k aayo:", data);
    } catch (err) {
      console.log("Eror:", err);
    }
  };
}
