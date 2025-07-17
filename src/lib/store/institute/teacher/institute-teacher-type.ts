import { Status } from "@/lib/types/type";

export enum TeacherExpertise {
  Begineer = "begineer",
  Intermediate = "intermediate",
  Advance = "advance",
}
interface IInstituteTeacherInitialDataTeacherCourse {
  courseName: string;
  coursePrice: string;
  courseThumbnail: string;
}

export interface IInstituteTeacherInitialDataTeacher {
  teacherName: string;
  teacherEmail: string;
  teacherPhoneNumber: string;
  teacherExperties: TeacherExpertise;
  salary: string;
  joinedData: string;
}
interface IInitialTeacherDataWithCourse
  extends IInstituteTeacherInitialDataTeacher {
  course?: IInstituteTeacherInitialDataTeacherCourse;
}
export interface IInstituteTeacherInitailData {
  teacher: IInitialTeacherDataWithCourse;
  status: Status;
}

// teacherName,
//     teacherPhoneNumber,
//     teacherEmail,
//     teacherExperties,
//     salary,
//     joinedDate,
//     courseId,
