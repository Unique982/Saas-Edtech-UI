import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInstitute, IInstituteInitialData } from "./institute.type";
import { Status } from "@/lib/types/type";
import { AppDispatch } from "../store";
import APIWITHTOKEN from "@/lib/http/APIWITHTOKEN";
import API from "@/lib/http";

// initialState ko types
const initialState: IInstituteInitialData = {
  institute: {
    instituteName: "",
    instituteEmail: "",
    instituteAddress: "",
    institutePhoneNumber: "",
  },
  status: Status.LOADING,
};

const instituteSlice = createSlice({
  name: "institute",
  initialState,
  reducers: {
    setStatus(state: IInstituteInitialData, action: PayloadAction<Status>) {
      state.status = action.payload;
    },
    setInstitute(
      state: IInstituteInitialData,
      action: PayloadAction<IInstitute>
    ) {
      state.institute = action.payload;
    },
  },
});
const { setStatus, setInstitute } = instituteSlice.actions;
export default instituteSlice.reducer;

// create institue API call
export function createInstitute(data: IInstitute) {
  return async function createInstituteThunk(dispatch: AppDispatch) {
    dispatch(setStatus(Status.LOADING));
    try {
      const response = await APIWITHTOKEN.post("institute", data);
      if (response.status === 200) {
        dispatch(setInstitute(response.data.data));
        dispatch(setStatus(Status.SUCCESS));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (err) {
      dispatch(setStatus(Status.ERROR));
    }
  };
}

// fetch all institute list

export function fetchInstitute(data: IInstitute) {
  return async function fetchInstituteThunk(dispatch: AppDispatch) {
    dispatch(setStatus(Status.LOADING));
    try {
      const response = await API.get("institute");
      if (response.status === 200) {
        dispatch(setInstitute(response.data.data));
        dispatch(setStatus(Status.SUCCESS));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (err) {
      dispatch(setStatus(Status.ERROR));
    }
  };
}
