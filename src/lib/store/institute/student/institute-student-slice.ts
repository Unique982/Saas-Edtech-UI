import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IInstituteStudentInitialData,
  IStudentData,
} from "./institute-student-type";
import { Status } from "@/lib/types/type";
import { AppDispatch } from "../../store";
import APIWITHTOKEN from "@/lib/http/APIWITHTOKEN";
import { stat } from "fs";

const initialState: IInstituteStudentInitialData = {
  instituteStudent: [],
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
      action: PayloadAction<IStudentData[]>
    ) {
      state.instituteStudent = action.payload;
    },
    fetchStudentData(
      state: IInstituteStudentInitialData,
      action: PayloadAction<IStudentData[]>
    ) {
      state.instituteStudent = action.payload;
    },
    setDeleteInstituteStudentById(state, action: PayloadAction<string>) {
      const index = state.instituteStudent.findIndex(
        (student) => student.id == action.payload
      );
      if (index !== -1) {
        state.instituteStudent.splice(index, 1);
      }
    },
    // sigleStudentDetails(
    //   state: IInstituteStudentInitialData,
    //   action: PayloadAction<IStudentData>
    // ) {
    //   const index = state.instituteStudent.findIndex(
    //     (student) => student.index == action.payload
    //   );
    // },
  },
});
const {
  setStatus,
  setStudentAdd,
  fetchStudentData,
  setDeleteInstituteStudentById,
} = instituteStudentSlice.actions;
export default instituteStudentSlice.reducer;

// api call method here
export function fetchInstituteStudent() {
  return async function fetchInstituteStudentThunk(dispatch: AppDispatch) {
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

// delete institute student
export function instituteStudentDeleteById(id: string) {
  return async function instituteStudentDeleteByIdThunk(dispatch: AppDispatch) {
    dispatch(setStatus(Status.LOADING));
    try {
      const response = await APIWITHTOKEN.delete("institute/student/" + id);
      if (response.status === 200) {
        dispatch(setStatus(Status.SUCCESS));
        dispatch(setDeleteInstituteStudentById(id));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (err) {
      dispatch(setStatus(Status.ERROR));
    }
  };
}

// fetch single student details
export function singleStudentDetails(id: string) {
  return async function singleStudentDetailsThunk(dispatch: AppDispatch) {
    try {
      const response = await APIWITHTOKEN.get("institute/student" + id);
      if (response.status === 200) {
        dispatch(setStatus(Status.SUCCESS));
        // response.data.data.length > 0 && dispatch(fetchStudentData(id));
      } else {
        dispatch(setStatus(Status.SUCCESS));
      }
    } catch (err) {
      dispatch(setStatus(Status.ERROR));
    }
  };
}
