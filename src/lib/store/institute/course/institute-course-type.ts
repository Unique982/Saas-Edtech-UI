import { Status } from "@/lib/types/type";

interface IInstituteCourseInitialDataCourse {
  courseName: string;
  coursePrice: string;
  id: string;
  // courseDescription: string;
  // courseDuration: string;
  // courseLevel: string;
  // courseThumbnail: string;
}
export interface IInstituteCourseInitialData {
  status: Status;
  courses: IInstituteCourseInitialDataCourse[];
}
