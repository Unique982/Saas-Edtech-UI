import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
export default store;
// useDispatch type dina chai xa
export type AppDispatch = typeof store.dispatch;
// useSelector type dina chai xa
export type RootState = ReturnType<typeof store.getState>;

// differnts hooks provide garxa : useSelector(), useDispatch()
