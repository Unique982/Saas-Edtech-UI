import { Status } from "@/lib/types/type";
import {
  ICoursePostData,
  IInstituteCourseInitialData,
  IInstituteCourseInitialDataCourse,
} from "./institute-course-type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";
import { AppDispatch } from "../../store";
import API from "@/lib/http";
import { useAppDispatch } from "../../hook";
import APIWITHTOKEN from "@/lib/http/APIWITHTOKEN";

const initialState: IInstituteCourseInitialData = {
  status: Status.LOADING,
  courses: [],
};
const instituteCourse = createSlice({
  name: "institute-course",
  initialState,
  reducers: {
    setStatus(state, action: PayloadAction<Status>) {
      state.status = action.payload;
    },
    setCourse(
      state,
      action: PayloadAction<IInstituteCourseInitialDataCourse[]>
    ) {
      state.courses = action.payload;
    },
    setFetchCourse(
      state,
      action: PayloadAction<IInstituteCourseInitialDataCourse[]>
    ) {
      state.courses = action.payload;
    },
    setDeleteCourseById(state, action: PayloadAction<string>) {
      const index = state.courses.findIndex(
        (course) => course.id == action.payload
      );
      if (index !== -1) {
        state.courses.splice(index, 1);
      }
    },
    setEditCourse(state, action: PayloadAction<any>) {
      const id = action.payload.id;
      const data = action.payload.data;
      const index = state.courses.findIndex((course) => course.id == id);
      if (index !== -1) {
        state.courses[1] = data;
      }
    },
  },
});
const {
  setStatus,
  setCourse,
  setDeleteCourseById,
  setEditCourse,
  setFetchCourse,
} = instituteCourse.actions;
export default instituteCourse.reducer;

// create method
export function createInstituteCourse(data: ICoursePostData) {
  return async function createInstituteCourse(dispatch: AppDispatch) {
    dispatch(setStatus(Status.LOADING));
    try {
      const response = await APIWITHTOKEN.post("institute/course", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 200) {
        response.data.data && dispatch(setCourse(response.data.data));
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
// fetch method
export function fetchInstituteCourse() {
  return async function fetchInstituteCourseThunk(dispatch: AppDispatch) {
    dispatch(setStatus(Status.LOADING));
    try {
      const response = await APIWITHTOKEN.get("institute/course");
      if (response.status === 200) {
        response.data.data.length > 0 &&
          dispatch(setFetchCourse(response.data.data));
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
// delete method
export function deleteInstituteCourse(id: string) {
  return async function deleteInstituteCourseThunk(dispatch: AppDispatch) {
    dispatch(setStatus(Status.LOADING));
    try {
      const response = await APIWITHTOKEN.delete("institute/course/" + id);
      if (response.status === 200) {
        dispatch(setDeleteCourseById(id));
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
// edit method
export function editInstituteCourse(id: string, data: any) {
  return async function editInstituteCourseThunk(dispatch: AppDispatch) {
    dispatch(setStatus(Status.LOADING));
    try {
      const response = await API.patch("institute/course", id, data);
      if (response.status === 200) {
        dispatch(setStatus(Status.SUCCESS));
        dispatch(setEditCourse({ id, data }));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (err) {
      console.log(err);
      dispatch(setStatus(Status.ERROR));
    }
  };
}
