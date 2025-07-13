import { registerUser } from "@/lib/store/auth/authSlice";
import { useAppSelector } from "@/lib/store/hook";
import { Status } from "@/lib/types/type";
import { ChangeEvent, FormEvent, useState } from "react";
import { IRegisterData } from "./register.types";

export function Register() {
  const { status } = useAppSelector((store) => store.auth);
  const [data, setData] = useState<IRegisterData>({
    username: "",
    email: "",
    password: "",
  });
  // handling type garko kura
  const handleRegisterDataChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  // form submit handling
  const handleRegisterSubmission = (e: FormEvent<HTMLFormElement>) => {
    registerUser(data);
    if (status === Status.SUCCESS) {
      // api all
    }
  };

  return (
    <>
      <h1>This is regiter page, will be greate soon..</h1>
    </>
  );
}
