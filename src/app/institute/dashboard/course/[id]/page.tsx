"use client";
import MainContainer from "@/lib/components/dashboard/MainContent";
import { useParams } from "next/navigation";

export default function CourseViewPage() {
  const params = useParams();
  const courseId = params.id;
  return (
    <>
      <MainContainer title="Category Deatils">
        <p>Category Details Page !</p>
      </MainContainer>
      <div className="flex flex-col mt-5 ">
        <div className="min-w-full inlinze-block align-middle ">
          <div className="overflow-hidden  bg-gray-50 ">
            <table className="min-w-full rounded-xl text-white ">
              <thead>
                <tr>
                  <th className="p-2 text-center text-sm leading-6 font-semi text-gray-900 capitalize ">
                    id:
                  </th>
                  <td className="p-2 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                    hello Name
                  </td>
                </tr>
                <tr>
                  <th className="p-2 text-center text-sm leading-6 font-semi text-gray-900 capitalize ">
                    id:
                  </th>
                  <td className="p-2 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                    <p>Hello</p>
                  </td>
                </tr>
                <tr>
                  <th className="p-2 text-center text-sm leading-6 font-semibold text-gray-900 capitalize rounded-t-xl">
                    id:
                  </th>
                  <td className="p-2 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                    hello Name
                  </td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
