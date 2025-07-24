"use client";

import { useAppDispatch, useAppSelector } from "@/lib/store/hook";
import { ChangeEvent, FormEvent, useState } from "react";
import { ILoginData } from "./login.types";
import { loginUser } from "@/lib/store/auth/authSlice";

export default function Login() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((store) => store.auth);

  const [data, setData] = useState<ILoginData>({
    email: "",
    password: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleSubmission = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginUser(data));
    // api call
    // dispatch(loginUser(data));
  };
  return (
    <>
      <div className="bg-gray-100 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8 ">
        <div className="w-full max-w-md space-y-8">
          <div className="bg-white shadow-md rounded-md p-6">
            <h2 className="mx-auto my-2 text-center font-medium text-3xl tracking-tight text-gray-900">
              Welcome Back!
            </h2>
            <p className="mx-auto my-4 text-center text-xl font-medium text-gray-700">
              Please sign in to your account
            </p>
            <form
              onSubmit={handleSubmission}
              className="space-y-6"
              method="POST"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    name="email"
                    type="email-address"
                    onChange={handleChange}
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
                    name="password"
                    type="password"
                    onChange={handleChange}
                    placeholder="Enter Password"
                    required
                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white focus:ring-sky-400 focus:ring-offset-2"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
