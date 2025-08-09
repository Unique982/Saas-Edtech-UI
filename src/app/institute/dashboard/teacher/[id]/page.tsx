"use client";
import MainContainer from "@/lib/components/dashboard/MainContent";
import { useAppDispatch, useAppSelector } from "@/lib/store/hook";
import { singleTeacherFetch } from "@/lib/store/institute/teacher/institute-teacher-slice";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function TeacherViewPage() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { teacher } = useAppSelector((store) => store.instituteTeacher);
  useEffect(() => {
    if (typeof id == "string") {
      dispatch(singleTeacherFetch(id));
    }
  }, [id, dispatch]);

  return (
    <>
      <MainContainer title="Teacher Deatils">
        <p>Teacher Details Page !</p>
      </MainContainer>
      <div className="flex flex-col mt-3 py-4">
        <div className="min-w-full inline-block align-middle">
          <div className="overflow-hidden bg-gray-50 shadow rounded-xl">
            {teacher && (
              <table className="min-w-full text-sm text-gray-900">
                <thead>
                  <tr>
                    <th
                      colSpan={2}
                      className="bg-white  text-left px-6 py-4 border-b border-gray-200"
                    >
                      <Link
                        href="/institute/dashboard/teacher"
                        className="px-2 py-2 bg-green-700 text-white rounded "
                      >
                        ← Go Back
                      </Link>
                      <Link
                        href=""
                        className=" ml-4 px-2 py-2 bg-indigo-600 text-white rounded "
                      >
                        Download
                      </Link>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr>
                    <td className="p-4 font-medium text-gray-600">
                      Teacher Name
                    </td>
                    <td className="p-4"></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-medium text-gray-600">
                      Teacher Email:
                    </td>
                    <td className="p-4">hari@gmail.com</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-gray-600">Address:</td>
                    <td className="p-4">KTM</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-medium text-gray-600">
                      Phone Number:
                    </td>
                    <td className="p-4">hari@gmail.com</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-gray-600">
                      Course Selected:
                    </td>
                    <td className="p-4">KTM</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-medium text-gray-600">
                      Teacher Photo
                    </td>
                    <td className="p-4">
                      <img
                        src="https://imgs.search.brave.com/7ksJ6lfckr162NlmA5sj7dcLc53s53Rrqjatc-VSH18/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/aGFuZC1kcmF3bi1i/bGFjay10ZWFjaGVy/LWNsaXBhcnQtaWxs/dXN0cmF0aW9uXzIz/LTIxNTA5MjMxODYu/anBnP3NlbXQ9YWlz/X2h5YnJpZCZ3PTc0/MA"
                        alt="teacher Image"
                        className="w-24 h-24 rounded-full object-cover border"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-gray-600">
                      Joined Date:
                    </td>
                    <td className="p-4">2081-19-12</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-medium text-gray-600">Salary:</td>
                    <td className="p-4">9000</td>
                  </tr>

                  <tr className="bg-gray-50">
                    <td className="p-4 font-medium text-gray-600">
                      Created At:
                    </td>
                    <td className="p-4">2025-07-28</td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
