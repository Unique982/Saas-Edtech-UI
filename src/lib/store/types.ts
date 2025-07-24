export interface IUserInitialState {
  name: string | null;
  address: string | null;
}

export interface IInititalStudentData {
  data: string;
}
export interface IIncomingUserPayload {
  name: string;
  address: string;
  phoneNumber: number;
}
