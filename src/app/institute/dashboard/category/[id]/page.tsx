"use client";
import MainContainer from "@/lib/components/dashboard/MainContent";
import { useAppDispatch, useAppSelector } from "@/lib/store/hook";
import { singleCategory } from "@/lib/store/institute/category/institute-category-slice";
import Link from "next/link";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CategoryViewPage() {
  const dispatch = useAppDispatch();

  const { data } = useAppSelector((store) => store.instituteCategory);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      dispatch(singleCategory(id));
    }
  }, []);

  return (
    <>
      <MainContainer title="Category Deatils">
        <p>Category Details Page !</p>
      </MainContainer>
      <div className="flex flex-col mt-3 py-4">
        <div className="min-w-full inline-block align-middle">
          <div className="overflow-hidden bg-gray-50 shadow-sm rounded-xl">
            <table className="min-w-full text-sm text-gray-900">
              <thead>
                <tr>
                  <th
                    colSpan={2}
                    className="bg-white  text-left px-6 py-4 border-b border-gray-200"
                  >
                    <Link
                      href="/institute/dashboard/category"
                      className="px-2 py-2 bg-green-700 text-white rounded "
                    >
                      ← Go Back
                    </Link>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td className="p-4 font-bold text-gray-600">
                    Category Name :
                  </td>
                  <td className="p-4">Web Application Developer</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 font-bold text-gray-600">
                    Category Description :
                  </td>
                  <td className="p-4">
                    <textarea
                      className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
                      readOnly
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Assumenda, ad.
                    </textarea>
                  </td>
                </tr>

                <tr>
                  <td className="p-4 font-bold text-gray-600">Created At:</td>
                  <td className="p-4">2081-19-12</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 font-bold text-gray-600">Updated At:</td>
                  <td className="p-4">9000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
