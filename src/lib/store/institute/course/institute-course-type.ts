import { Status } from "@/lib/types/type";

export interface IInstituteCourseInitialDataCourse extends ICoursePostData {
  courseName: string;
  coursePrice: string;
  id: string;
  createdAt: string;
}

export interface ICoursePostData {
  courseName: string;
  coursePrice: string;
  courseDescription: string;
  courseLevel: string;
  courseThumbnail: File | null;
  categoryId: string;
  teacherId: string;
  courseDuration: string;
}
export interface IInstituteCourseInitialData {
  status: Status;
  courses: IInstituteCourseInitialDataCourse[];
}
