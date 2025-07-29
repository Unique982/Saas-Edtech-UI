import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IInstituteTeacherInitailData,
  IInstituteTeacherInitialDataTeacher,
} from "./institute-teacher-type";

import { Status } from "@/lib/types/type";
import { AppDispatch } from "../../store";
import API from "@/lib/http";
import APIWITHTOKEN from "@/lib/http/APIWITHTOKEN";
const initailsState: IInstituteTeacherInitailData = {
  teacher: {
    course: {
      courseName: "",
      coursePrice: "",
      courseThumbnail: "",
    },
    teacherEmail: "",
    teacherExperience: "",
    teacherPhoneNumber: "",
    teacherName: "",
    salary: "",
    joinedDate: "",
    teacherAddress: "",
    teacherPhoto: null,
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
    setFetchTeacher(
      state: IInstituteTeacherInitailData,
      action: PayloadAction<IInstituteTeacherInitialDataTeacher>
    ) {
      state.teacher = action.payload;
    },
    //   setDeleteTeacher(
    //     state,
    //     action: PayloadAction<any>
    //   ) {
    //     const teacherId = action.payload.id;
    //     const data = action.payload.data

    //     const index = state.teacher.findIndex((teacher)=>teacher.id === teacherId);
    //     if(index !== -1){
    //       state.teacher[] = data;
    //     }
  },
});
const { setStatus, setTeacher, setFetchTeacher } =
  instituteTeacherSlice.actions;
export default instituteTeacherSlice.reducer;
//create method
export function createInstituteTeacher(
  data: IInstituteTeacherInitialDataTeacher
) {
  return async function createInstituteTeacherThunk(dispatch: AppDispatch) {
    dispatch(setStatus(Status.LOADING));
    try {
      const response = await APIWITHTOKEN.post("institute/teacher", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 200) {
        response.data.data && dispatch(setTeacher(response.data.data));
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
      const response = await APIWITHTOKEN.get("institute/teacher");
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
