import { Status } from "@/lib/types/type";

export interface IInstituteTeacherInitialDataTeacherCourse {
  id: string;
  courseName: string;
  coursePrice: string;
  courseThumbnail: string;
}
export interface IInstituteteacherPostData
  extends IInstituteTeacherInitialDataTeacherCourse {
  courseId: string;
  teacherName: string;
  teacherEmail: string;
  teacherPhoneNumber: string;
  teacherExperience: string;
  salary: string;
  joinedDate: string;
  teacherAddress: string;
  teacherPhoto: File | null;
  createdAt: string;
}
export interface IInstituteTeacherInitialDataTeacher
  extends IInstituteteacherPostData {
  id: string;
}

export interface IInitialTeacherDataWithCourse
  extends IInstituteTeacherInitialDataTeacher {
  course?: IInstituteTeacherInitialDataTeacherCourse;
}
export interface IInstituteTeacherInitailData {
  teacher: IInitialTeacherDataWithCourse[];
  status: Status;
}
