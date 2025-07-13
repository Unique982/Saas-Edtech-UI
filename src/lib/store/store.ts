import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth/authSlice";

const store = configureStore({
  reducer: {
    auth: auth,
  },
});
export default store;
// useDispatch type dina chai xa
export type AppDispatch = typeof store.dispatch;
// useSelector type dina chai xa
export type RootState = ReturnType<typeof store.getState>;

// differnts hooks provide garxa : useSelector(), useDispatch()
