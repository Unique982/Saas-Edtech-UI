import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IInstituteStudentInitialData,
  IStudentData,
} from "./institute-student-type";
import { Status } from "@/lib/types/type";
import { AppDispatch } from "../../store";
import APIWITHTOKEN from "@/lib/http/APIWITHTOKEN";

const initialState: IInstituteStudentInitialData = {
  instituteStudent: {
    studentName: "",
    studentEmail: "",
    studentAddress: "",
    studentImage: "",
    studentPhoneNumber: "",
    enrolledData: "",
  },
  status: Status.LOADING,
};

const instituteStudentSlice = createSlice({
  name: "instituteStudent",
  initialState,
  reducers: {
    setStatus(
      state: IInstituteStudentInitialData,
      action: PayloadAction<Status>
    ) {
      state.status = action.payload;
    },
    setStudentAdd(
      state: IInstituteStudentInitialData,
      action: PayloadAction<IStudentData>
    ) {
      state.instituteStudent = action.payload;
    },
    fetchStudentData(
      state: IInstituteStudentInitialData,
      action: PayloadAction<IStudentData>
    ) {
      state.instituteStudent = action.payload;
    },
  },
});
const { setStatus, setStudentAdd, fetchStudentData } =
  instituteStudentSlice.actions;
export default instituteStudentSlice.reducer;

// api call method here
export function fetchStudent() {
  return async function fetchStudentthunk(dispatch: AppDispatch) {
    try {
      const response = await APIWITHTOKEN.get("institute/student");
      if (response.status === 200) {
        dispatch(setStatus(Status.SUCCESS));
        dispatch(fetchStudentData(response.data.data));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (err) {
      dispatch(setStatus(Status.ERROR));
    }
  };
}

// create stundet api
export function createStudent(data: IStudentData) {
  return async function createStudentThunk(dispatch: AppDispatch) {
    try {
      const response = await APIWITHTOKEN.post("institute/student");
      if (response.status === 200) {
        dispatch(setStatus(Status.SUCCESS));
        response.data.data && dispatch(setStudentAdd(response.data.data));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (err) {
      dispatch(setStatus(Status.ERROR));
    }
  };
}
