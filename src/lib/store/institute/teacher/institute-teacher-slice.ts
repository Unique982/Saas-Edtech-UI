import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IInstituteTeacherInitailData,
  IInstituteTeacherInitialDataTeacher,
  TeacherExpertise,
} from "./institute-teacher-type";

import { Status } from "@/lib/types/type";
import { AppDispatch } from "../../store";
import API from "@/lib/http";
const initailsState: IInstituteTeacherInitailData = {
  teacher: {
    course: {
      courseName: "",
      coursePrice: "",
      courseThumbnail: "",
    },
    teacherEmail: "",
    teacherExperties: TeacherExpertise.Begineer,
    teacherPhoneNumber: "",
    teacherName: "",
    salary: "",
    joinedData: "",
  },
  status: Status.LOADING,
};

const instituteTeacherSlice = createSlice({
  name: "institute-teacher",
  initialState: initailsState,
  reducers: {
    setStatus(
      state: IInstituteTeacherInitailData,
      action: PayloadAction<Status>
    ) {
      state.status = action.payload;
    },
    setTeacher(
      state: IInstituteTeacherInitailData,
      action: PayloadAction<IInstituteTeacherInitialDataTeacher>
    ) {
      state.teacher = action.payload;
    },
  },
});
const { setStatus, setTeacher } = instituteTeacherSlice.actions;
export default instituteTeacherSlice.reducer;
//create method
export function createInstituteTeacher(data: IInstituteTeacherInitailData) {
  return async function createInstituteTeacherThunk(dispatch: AppDispatch) {
    dispatch(setStatus(Status.LOADING));
    try {
      const response = await API.post("/institute/teacher", data);
      if (response.status === 200) {
        dispatch(setTeacher(response.data.data));
        dispatch(setStatus(Status.SUCCESS));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (err) {
      dispatch(setStatus(Status.ERROR));
      console.log(err);
    }
  };
}

// fetch method
export function fetchInstituteTeacher() {
  return async function fetchInstituteTeacherThunk(dispatch: AppDispatch) {
    dispatch(setStatus(Status.LOADING));
    try {
      const response = await API.get("institute/teacher");
      if (response.status === 200) {
        dispatch(setStatus(Status.SUCCESS));
        response.data.data.length > 0 &&
          dispatch(setTeacher(response.data.data));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (err) {
      console.log(err);
      dispatch(setStatus(Status.ERROR));
    }
  };
}

// delete method
export function deleteInstitiuteTeacher(id: string) {
  return async function deleteInstitiuteTeacherThunk(dispatch: AppDispatch) {
    dispatch(setStatus(Status.LOADING));
    try {
      const response = await API.delete("institute/teacher" + id);
      if (response.status === 200) {
        dispatch(setStatus(Status.SUCCESS));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (err) {
      console.log(err);
      dispatch(setStatus(Status.ERROR));
    }
  };
}
