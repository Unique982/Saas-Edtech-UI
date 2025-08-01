import { Status } from "@/lib/types/type";

export interface IStudentData {
  id: string;
  studentName: string;
  studentEmail: string;
  studentPhoneNumber: string;
  studentAddress: string;
  enrolledData: string;
  studentImage: string;
  createdAt: string;
}
export interface IInstituteStudentInitialData {
  instituteStudent: IStudentData[];
  status: Status;
}
