import { Status } from "@/lib/types/type";

// export enum TeacherExpertise {
//   Begineer = "begineer",
//   Intermediate = "intermediate",
//   Advance = "advance",
// }
export interface IInstituteTeacherInitialDataTeacherCourse {
  courseName: string;
  coursePrice: string;
  courseThumbnail: string;
}

export interface IInstituteTeacherInitialDataTeacher {
  teacherName: string;
  teacherEmail: string;
  teacherPhoneNumber: string;
  teacherExperience: string;
  salary: string;
  joinedDate: string;
  teacherAddress: string;
  teacherPhoto: File | null;
}

export interface IInitialTeacherDataWithCourse
  extends IInstituteTeacherInitialDataTeacher {
  course?: IInstituteTeacherInitialDataTeacherCourse;
}
export interface IInstituteTeacherInitailData {
  teacher: IInitialTeacherDataWithCourse;
  status: Status;
}
