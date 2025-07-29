import { Status } from "@/lib/types/type";

export interface IStudentData {
  studentName: string;
  studentEmail: string;
  studentPhoneNumber: string;
  studentAddress: string;
  enrolledData: string;
  studentImage: string;
}
export interface IInstituteStudentInitialData {
  instituteStudent: IStudentData;
  status: Status;
}
