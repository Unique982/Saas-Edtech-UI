import { Status } from "@/lib/types/type";
import { IInstituteCourseInitialData } from "./institute-course-type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";
import { AppDispatch } from "../../store";
import API from "@/lib/http";
import { useAppDispatch } from "../../hook";

const initailState: IInstituteCourseInitialData = {
  status: Status.LOADING,
  courses: [
    {
      courseName: "node.js",
      coursePrice: "900",
      id: "1",
      //      courseDescription: "",
      // courseDuration: "",
      // courseLevel: "",
      // courseThumbnail:""
    },
    {
      courseName: "node.js",
      coursePrice: "900",
      id: "1",
      //      courseDescription: "",
      // courseDuration: "",
      // courseLevel: "",
      // courseThumbnail:""
    },
  ],
};
const instituteCourse = createSlice({
  name: "institute-course",
  initialState: initailState,
  reducers: {
    setStatus(state, action: PayloadAction<Status>) {
      state.status = action.payload;
    },
    setCourse(state, action: PayloadAction<any>) {
      state.courses = action.payload;
    },
    setDeleteCourse(state, action: PayloadAction<string>) {
      const index = state.courses.findIndex(
        (course) => course.id == action.payload
      );
      if (index != -1) {
        state.courses.slice(index, 1);
      }
    },
    setEditCourse(state, action: PayloadAction<any>) {
      const id = action.payload.id;
      const data = action.payload.data;
      const index = state.courses.findIndex((course) => course.id == id);
      if (index != -1) {
        state.courses[1] = data;
      }
    },
  },
});
const { setStatus, setCourse, setDeleteCourse, setEditCourse } =
  instituteCourse.actions;
export default instituteCourse.reducer;

// create method
export function createInstituteCourse(data: any) {
  return async function createInstituteCourse(dispatch: AppDispatch) {
    dispatch(setStatus(Status.LOADING));
    try {
      const response = await API.post("institute/course", data);
      if (response.status === 200) {
        dispatch(setCourse(response.data.data));
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
export function fetchInstituteCourse(data: any) {
  return async function fetchInstituteCourseThunk(dispatch: AppDispatch) {
    dispatch(setStatus(Status.LOADING));
    try {
      const response = await API.get("institute/course", data);
      if (response.status === 200) {
        response.data.data.length > 0 &&
          dispatch(setDeleteCourse(response.data.data));
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
      const response = await API.delete("institute/course" + id);
      if (response.status === 200) {
        dispatch(setDeleteCourse(id));
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
