import { Status } from "@/lib/types/type";

// input data
export interface ICategoryData {
  categoryName: string;
  categoryDescription: string;
}
export interface ICategory extends ICategoryData {
  id: string;
  createdAt: string;
}

export interface ICategoryInitialData {
  data: ICategory[];
  status: Status;
}
