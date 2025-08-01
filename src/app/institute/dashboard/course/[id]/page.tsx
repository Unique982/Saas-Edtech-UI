"use client";
import MainContainer from "@/lib/components/dashboard/MainContent";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function CourseViewPage() {
  const id = useParams();

  return (
    <>
      <MainContainer title="Course Deatils">
        <p>Course Details Page !</p>
      </MainContainer>
      <div className="flex flex-col mt-3 py-4">
        <div className="min-w-full inline-block align-middle">
          <div className="overflow-hidden bg-gray-50 shadow rounded-xl">
            <table className="min-w-full text-sm text-gray-900">
              <thead>
                <tr>
                  <th
                    colSpan={2}
                    className="bg-white  text-left px-6 py-4 border-b border-gray-200"
                  >
                    <Link
                      href="/institute/dashboard/course"
                      className="px-2 py-2 bg-green-700 text-white rounded "
                    >
                      ← Go Back
                    </Link>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td className="p-4 font-bold text-gray-600">Course</td>
                  <td className="p-4">Hari</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 font-bold text-gray-600">Description</td>
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
                  <td className="p-4 font-bold text-gray-600">Course Price</td>
                  <td className="p-4">KTM</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 font-bold text-gray-600">
                    course Duration:
                  </td>
                  <td className="p-4">hari@gmail.com</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-gray-600">
                    Selected Teahcer:
                  </td>
                  <td className="p-4">KTM</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 font-bold text-gray-600">
                    Course Thumbnail
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
                  <td className="p-4 font-bold text-gray-600">Course Level:</td>
                  <td className="p-4">2081-19-12</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 font-bold text-gray-600">
                    Category Name:
                  </td>
                  <td className="p-4">9000</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-gray-600">Created At:</td>
                  <td className="p-4">2081-19-12</td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="p-4 font-bold text-gray-600">Updated At:</td>
                  <td className="p-4">2025-07-28</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
