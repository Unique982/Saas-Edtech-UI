import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ICategory,
  ICategoryData,
  ICategoryInitialData,
} from "./institute-category-type";
import { Status } from "@/lib/types/type";
import { setStatus } from "../../auth/authSlice";
import { stat } from "fs";
import { AppDispatch } from "../../store";
import APIWITHTOKEN from "@/lib/http/APIWITHTOKEN";
const initialState: ICategoryInitialData = {
  data: [],
  status: Status.LOADING,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setStatus(state: ICategoryInitialData, action: PayloadAction<Status>) {
      state.status = action.payload;
    },
    setAddCategory(
      state: ICategoryInitialData,
      action: PayloadAction<ICategory>
    ) {
      state.data.push(action.payload);
    },
    setFetchCategory(
      state: ICategoryInitialData,
      action: PayloadAction<ICategory[]>
    ) {
      state.data = action.payload;
    },
    setDeleteCategory(
      state: ICategoryInitialData,
      action: PayloadAction<string>
    ) {
      const categoryId = action.payload;
      const index = state.data.findIndex(
        (category) => category.id === categoryId
      );
      if (index !== -1) {
        state.data.splice(index, 1);
      }
    },
  },
});
const { setAddCategory, setFetchCategory, setDeleteCategory } =
  categorySlice.actions;
export default categorySlice.reducer;

// api method call here
export function createCategory(data: ICategoryData) {
  return async function createCategoryThunk(dispatch: AppDispatch) {
    dispatch(setStatus(Status.LOADING));
    try {
      const response = await APIWITHTOKEN.post("institute/category", data);
      if (response.status === 200) {
        dispatch(setStatus(Status.SUCCESS));
        response.data.data && dispatch(setAddCategory(response.data.data));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (err) {
      dispatch(setStatus(Status.ERROR));
    }
  };
}
// fetch category
export function fetchCategory() {
  return async function fetchCategoryThunk(dispatch: AppDispatch) {
    dispatch(setStatus(Status.LOADING));
    try {
      const response = await APIWITHTOKEN.get("institute/category");
      if (response.status === 200) {
        dispatch(setStatus(Status.SUCCESS));
        response.data.data.length > 0 &&
          dispatch(setFetchCategory(response.data.data));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (err) {
      dispatch(setStatus(Status.ERROR));
    }
  };
}

// delete category
export function deleteCategory(id: string) {
  return async function deleteCategoryThunk(dispatch: AppDispatch) {
    dispatch(setStatus(Status.LOADING));
    try {
      const response = await APIWITHTOKEN.delete("institute/category/" + id);
      if (response.status === 200) {
        dispatch(setDeleteCategory(id));
        dispatch(setStatus(Status.SUCCESS));
      }
    } catch (err) {
      dispatch(setStatus(Status.ERROR));
    }
  };
}
