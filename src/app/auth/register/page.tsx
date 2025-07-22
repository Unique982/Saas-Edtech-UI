"use client";
import { Provider } from "react-redux";
import { registerUser } from "@/lib/store/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hook";
import { Status } from "@/lib/types/type";
import { ChangeEvent, FormEvent, useState } from "react";
import { IRegisterData } from "./register.types";

function Register() {
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((store) => store.auth); // useAppSelector chai custom hook ho
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
    dispatch(registerUser(data));
    if (status === Status.SUCCESS) {
      // api all
    }
  };

  return (
    <>
      <div className="bg-gray-100 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8 ">
        <div className="w-full max-w-md space-y-8">
          <div className="bg-white shadow-md rounded-md p-6">
            <h2 className="mx-auto my-3 text-center font-bold text-3xl tracking-tight text-gray-900">
              Create Your Account
            </h2>
            <p className="mx-auto my-4 text-center text-xl font-medium text-gray-700">
              Join us today! It's quick and easy.
            </p>
            <form
              onSubmit={handleRegisterSubmission}
              className="space-y-6"
              method="POST"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <div className="mt-1">
                  <input
                    onChange={handleRegisterDataChange}
                    name="username"
                    type="username"
                    placeholder="Enter Username"
                    required
                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    onChange={handleRegisterDataChange}
                    name="email"
                    type="email-address"
                    placeholder="Enter Email"
                    required
                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    onChange={handleRegisterDataChange}
                    name="password"
                    type="password"
                    placeholder="Enter Password"
                    required
                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
                >
                  Register Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Register;
