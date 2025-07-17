import { Status } from "@/lib/types/type";

export interface IUserData {
  email: string;
  password: string;
}
export interface IRegisterdata extends IUserData {
  username: string;
}
export interface IInitialState {
  user: IUserData;
  status: Status;
}
