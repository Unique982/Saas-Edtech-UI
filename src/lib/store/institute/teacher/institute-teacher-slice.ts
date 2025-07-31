import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IInstituteTeacherInitailData,
  IInstituteTeacherInitialDataTeacher,
  IInstituteteacherPostData,
} from "./institute-teacher-type";

import { Status } from "@/lib/types/type";
import { AppDispatch } from "../../store";

import APIWITHTOKEN from "@/lib/http/APIWITHTOKEN";
const initailsState: IInstituteTeacherInitailData = {
  // teacher: {
  //   course: {
  //     courseName: "",
  //     coursePrice: "",
  //     courseThumbnail: "",
  //   },
  //   teacherEmail: "",
  //   teacherExperience: "",
  //   teacherPhoneNumber: "",
  //   teacherName: "",
  //   salary: "",
  //   joinedDate: "",
  //   teacherAddress: "",
  //   teacherPhoto: null,
  // },
  teacher: [],
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
      action: PayloadAction<IInstituteTeacherInitialDataTeacher[]>
    ) {
      state.teacher = action.payload;
    },
    setFetchTeacher(
      state: IInstituteTeacherInitailData,
      action: PayloadAction<IInstituteTeacherInitialDataTeacher[]>
    ) {
      state.teacher = action.payload;
    },
    setDeleteTeacherById(state, action: PayloadAction<any>) {
      const index = state.teacher.findIndex(
        (teacher) => teacher.id === action.payload
      );
      if (index !== -1) {
        state.teacher.splice(index, 1);
      }
    },
  },
});
const { setStatus, setTeacher, setFetchTeacher, setDeleteTeacherById } =
  instituteTeacherSlice.actions;
export default instituteTeacherSlice.reducer;
//create method
export function createInstituteTeacher(data: IInstituteteacherPostData) {
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
export function deleteInstitiuteTeacherById(id: string) {
  return async function deleteInstitiuteTeacherThunk(dispatch: AppDispatch) {
    dispatch(setStatus(Status.LOADING));
    try {
      const response = await APIWITHTOKEN.delete("institute/teacher/" + id);
      if (response.status === 200) {
        dispatch(setDeleteTeacherById(id));
        dispatch(setStatus(Status.SUCCESS));
      }
    } catch (err) {
      console.log(err);
      dispatch(setStatus(Status.ERROR));
    }
  };
}
