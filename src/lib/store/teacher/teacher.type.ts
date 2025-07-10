import { Status } from "@/lib/types/type";

export interface ITeacher {
  teacherName: string;
  teacherPassword: string;
  teacherEmail: string;
  address: string;
}

export interface IInitialTeacherData {
  teacher: ITeacher;
  status: Status;
}
