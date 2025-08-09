"use client";

import MainContainer from "@/lib/components/dashboard/MainContent";
import { useAppDispatch, useAppSelector } from "@/lib/store/hook";
import { createCategory } from "@/lib/store/institute/category/institute-category-slice";
import { fetchInstituteCourse } from "@/lib/store/institute/course/institute-course-slices";
import { createInstituteTeacher } from "@/lib/store/institute/teacher/institute-teacher-slice";
import {
  IInstituteTeacherInitialDataTeacher,
  IInstituteteacherPostData,
} from "@/lib/store/institute/teacher/institute-teacher-type";
import { Status } from "@/lib/types/type";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";

function AddTeacher() {
  const dispatch = useAppDispatch();
  const { courses } = useAppSelector((store) => store.instituteCourse);
  console.log("course ma k aay ko xa" + courses);
  const { status } = useAppSelector((store) => store.instituteCategory);

  const [teacherData, setTeacherData] = useState<IInstituteteacherPostData>({
    courseId: "",
    teacherName: "",
    teacherEmail: "",
    teacherExperience: "",
    teacherPhoneNumber: "",
    joinedDate: "",
    salary: "",
    teacherPhoto: null,
    teacherAddress: "",
    createdAt: "",
  });

  // const input handle
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setTeacherData({
      ...teacherData,
      //@ts-ignore
      [name]: name === "teacherPhoto" ? e.target.files[0] : value,
    });
  };
  // form submit handle
  const handleSubmission = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dispatch(createInstituteTeacher(teacherData));
    if (status === Status.SUCCESS) {
      alert("create teacher successfully!");
    }
  };
  useEffect(() => {
    dispatch(fetchInstituteCourse());
  }, [dispatch]);

  return (
    <>
      <MainContainer title="Teacher Add">
        <p>This is teacher page!</p>
      </MainContainer>
      <div className="min-h-screen container mx-auto px-2 py-5">
        <div className="flex flex-col rounded-lg shadow overflow-hidden">
          <div className="w-full px-3 py-5 md:p-7">
            <form onSubmit={handleSubmission}>
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="w-full md:w-1/2">
                  <label className="block text-gray-800 font-bold mb-2">
                    Teacher Name
                  </label>
                  <input
                    className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                    id="teacherName"
                    type="text"
                    name="teacherName"
                    onChange={handleChange}
                    placeholder="John Doe"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label className="block text-gray-800 font-bold mb-2">
                    Email
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight "
                    id="email"
                    onChange={handleChange}
                    type="email"
                    name="teacherEmail"
                    placeholder="teacheremail@gmail.com"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="w-full md:w-1/2">
                  <label className="block text-gray-800 font-bold mb-2">
                    Phone Number:
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                    onChange={handleChange}
                    id="teacherPhoneNumber"
                    type="text"
                    name="teacherPhoneNumber"
                    placeholder="980-*******"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label className="block text-gray-800 font-bold mb-2">
                    Address:
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight "
                    id="teacherAddress"
                    onChange={handleChange}
                    type="text"
                    name="teacherAddress"
                    placeholder="KTM-Nepal"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="w-full md:w-1/2">
                  <label className="block text-gray-800 font-bold mb-2">
                    Salary:
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                    id="salary"
                    onChange={handleChange}
                    type="text"
                    name="salary"
                    placeholder="20,000"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label className="block text-gray-800 font-bold mb-2">
                    Experience:
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight "
                    id="teacherExperience"
                    type="text"
                    onChange={handleChange}
                    name="teacherExperience"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-gray-800 font-bold mb-2">
                  Photo:
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 
                  text-gray-700 leading-tight "
                  onChange={handleChange}
                  id="teacherPhoto"
                  type="file"
                  name="teacherPhoto"
                  placeholder="select teacher Image"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="w-full md:w-1/2">
                  <label className="block text-gray-800 font-bold mb-2">
                    Joined Data:
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                    onChange={handleChange}
                    id="joinedDate"
                    type="Date"
                    name="joinedDate"
                    placeholder="2025-04-21"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label className="block text-gray-800 font-bold mb-2">
                    Course List
                  </label>
                  <select
                    name="courseId"
                    onChange={handleChange}
                    id="courseId"
                    className="block w-full px-3 py-2 border border-gray-300 bg-white text-gray-700 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option disabled selected>
                      -- Select a course --
                    </option>
                    {courses.length > 0 ? (
                      courses.map((course) => (
                        <option key={course.id} value={course.id}>
                          {course.courseName}
                        </option>
                      ))
                    ) : (
                      <option disabled>Not Found Data</option>
                    )}
                  </select>
                </div>
              </div>

              <button
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTeacher;
