"use client";
import { useAppDispatch } from "@/lib/store/hook";
import { createInstitute } from "@/lib/store/institute/institute";
import { IInstitute } from "@/lib/store/institute/institute.type";
import { ChangeEvent, FormEvent, useState } from "react";

export default function InstituteBecome() {
  const dispatch = useAppDispatch();
  const [instituteData, setInstituteData] = useState<IInstitute>({
    instituteName: "",
    instituteEmail: "",
    institutePhoneNumber: "",
    instituteAddress: "",
    institutePanNumber: "",
    instituteVatNumber: "",
  });

  // hnadle input
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInstituteData({
      ...instituteData,
      [name]: value,
    });
  };

  // submit button
  const handleSubmission = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createInstitute(instituteData));
  };

  return (
    <>
      <div className="bg-gray-100 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8 ">
        <div className="w-full max-w-md space-y-8">
          <div className="bg-white shadow-md rounded-md p-6">
            <h2 className="mx-auto my-3 text-center font-medium text-3xl tracking-tight text-gray-900">
              Create an Institute
            </h2>
            <p className="mt-2 text-center text-xl text-gray-600 ">
              Fill in the details below to register a new institute.
            </p>

            <form
              onSubmit={handleSubmission}
              className="mt-6 space-y-6"
              method="POST"
            >
              <div>
                {/* Institute Name */}

                <label className="block text-sm font-medium text-gray-700">
                  Institute Name
                  <span className="text-2xl text-red-800">*</span>
                </label>

                <div className="mt-1">
                  <input
                    name="instituteName"
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter Your InstituteName"
                    required
                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* Institute Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Institute Email
                  <span className="text-2xl text-red-800">*</span>
                </label>
                <div className="mt-1">
                  <input
                    name="instituteEmail"
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter Your InstituteEmail"
                    required
                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* Institute Phone Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Institute Phone Number:
                  <span className="text-2xl text-red-800">*</span>
                </label>
                <div className="mt-1">
                  <input
                    name="institutePhoneNumber"
                    type="text"
                    onChange={handleChange}
                    placeholder="Enter Institute Number"
                    required
                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* Institute Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Institute Address
                  <span className="text-2xl text-red-800">*</span>
                </label>
                <div className="mt-1">
                  <input
                    name="instituteAddress"
                    type="text"
                    onChange={handleChange}
                    placeholder="Enter InstituteAddress"
                    required
                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* Institute Pan  */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Institute Pan
                  <span className="text-2xl text-red-800">*</span>
                </label>
                <div className="mt-1">
                  <input
                    name="institutePanNumber"
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter InstituteAddress"
                    required
                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* Institute Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Institute Vat
                  <span className="text-2xl text-red-800">*</span>
                </label>
                <div className="mt-1">
                  <input
                    name="instituteVatNumber"
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter InstituteAddress"
                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* Institute  */}
              {/* <div>
                <label className="block text-sm font-medium text-gray-700">
                  Selecte Insititute Regsiter
                  <span className=" text-2xl text-red-800">*</span>
                </label>
                <div className="mt-1">
                  <select
                    name="instituteRegister"
                    id=""
                    className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 bg-white shadow-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500 sm:text-sm"
                  >
                    <option disabled selected>
                      Select Id
                    </option>
                    <option value="PAN">PAN</option>
                    <option value="VAT">VAT</option>
                  </select>
                </div>
              </div> */}

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
                >
                  Create Institute
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
