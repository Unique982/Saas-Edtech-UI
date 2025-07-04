import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserInitialState } from "./types";
const userInitialState: IUserInitialState = {
  name: "testing",
  password: "Ktm",
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
