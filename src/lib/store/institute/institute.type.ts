import { Status } from "@/lib/types/type";

export interface IInstitute {
  instituteName: string;
  instituteEmail: string;
  institutePanNumber?: string;
  instituteVatNumber?: string;
  instituteAddress: string;
  institutePhoneNumber: string | number;
}

export interface IInstituteInitialData {
  institute: IInstitute;
  status: Status;
}
