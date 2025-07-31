"use client";
import MainContainer from "@/lib/components/dashboard/MainContent";
import { useAppDispatch, useAppSelector } from "@/lib/store/hook";
import { fetchCategory } from "@/lib/store/institute/category/institute-category-slice";
import { createInstituteCourse } from "@/lib/store/institute/course/institute-course-slices";
import { ICoursePostData } from "@/lib/store/institute/course/institute-course-type";
import { fetchInstituteTeacher } from "@/lib/store/institute/teacher/institute-teacher-slice";
import { Status } from "@/lib/types/type";
import { useLinkStatus } from "next/link";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

export default function AddTeacher() {
  const { courses, status } = useAppSelector((store) => store.instituteCourse);
  const { data } = useAppSelector((store) => store.instituteCategory);
  const { teacher } = useAppSelector((store) => store.instituteTeacher);

  const dispatch = useAppDispatch();
  const [courseData, setCourseData] = useState<ICoursePostData>({
    courseName: "",
    coursePrice: "",
    courseDescription: "",
    courseDuration: "",
    courseLevel: "",
    courseThumbnail: null,
    categoryId: "",
    teacherId: "",
  });

  // handle input
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setCourseData({
      ...courseData,
      //@ts-ignore
      [name]: name === "courseThumbnail" ? e.target.files[0] : value,
    });
  };

  // from submission
  const handleSubmission = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dispatch(createInstituteCourse(courseData));
    if (status === Status.SUCCESS) {
      alert("Course Create Successfully");
    }
  };

  useEffect(() => {
    dispatch(fetchCategory());
    if (data.length === 0) {
      dispatch(fetchCategory());
    }
  }, []);

  // fetch techer
  useEffect(() => {
    dispatch(fetchInstituteTeacher());
    if (teacher.length === 0) {
      dispatch(fetchInstituteTeacher);
    }
  }, []);
  return (
    <>
      <MainContainer title="Course Add">
        <p>Create course page!</p>
      </MainContainer>
      <div className="min-h-screen container mx-auto px-2 py-5">
        <div className="flex flex-col rounded-lg shadow overflow-hidden">
          <div className="w-full px-3 py-5 md:p-7">
            <form
              onSubmit={handleSubmission}
              method="POST"
              encType="multipart/form-data"
            >
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="w-full md:w-1/2">
                  <label className="block text-gray-800 font-bold mb-2">
                    Course Name:
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight "
                    onChange={handleChange}
                    id="courseName"
                    type="text"
                    name="courseName"
                    placeholder="MERN STACK,PHP,JAVA,..."
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label className="block text-gray-800 font-bold mb-2">
                    Price:
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                    onChange={handleChange}
                    id="coursePrice"
                    type="number"
                    name="coursePrice"
                    placeholder="999"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-800 font-bold mb-2">
                  Description:
                </label>
                <textarea
                  onChange={handleChange}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight "
                  id="courseDescription"
                  name="courseDescription"
                  placeholder="Learn the basics of web development including HTML, CSS, and JavaScript."
                ></textarea>
              </div>

              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="w-full md:w-1/2">
                  <label className="block text-gray-800 font-bold mb-2">
                    Course Level:
                  </label>
                  <select
                    onChange={handleChange}
                    name="courseLevel"
                    id="courseLevel"
                    className="block w-full px-3 py-2 border border-gray-300 bg-white text-gray-700 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">-- Select a course --</option>
                    <option value="beginner">Beginer</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advance">Advance</option>
                  </select>
                </div>
                <div className="w-full md:w-1/2">
                  <label className="block text-gray-800 font-bold mb-2">
                    Category:
                  </label>
                  <select
                    onChange={handleChange}
                    name="categoryId"
                    id="categoryId"
                    className="block w-full px-3 py-2 border border-gray-300 bg-white text-gray-700 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option disabled selected>
                      -- Select a Category --
                    </option>
                    {data.length > 0 ? (
                      data.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.categoryName}
                        </option>
                      ))
                    ) : (
                      <option disabled>Not Found Data</option>
                    )}
                  </select>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="w-full md:w-1/2">
                  <label className="block text-gray-800 font-bold mb-2">
                    Course Duration:
                  </label>
                  <input
                    onChange={handleChange}
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                    id="courseDuration"
                    type="date"
                    name="courseDuration"
                    placeholder="YYYY-MM-DD"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label className="block text-gray-800 font-bold mb-2">
                    Teacher:
                  </label>
                  <select
                    onChange={handleChange}
                    name="teacherId"
                    id="teacherId"
                    className="block w-full px-3 py-2 border border-gray-300 bg-white text-gray-700 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option selected disabled>
                      -- Select a Teacher --
                    </option>
                    {teacher.length > 0 ? (
                      teacher.map((teacher) => (
                        <option key={teacher.id} value={teacher.id}>
                          {teacher.teacherName}
                        </option>
                      ))
                    ) : (
                      <option disabled>Not Found Data</option>
                    )}
                  </select>
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-gray-800 font-bold mb-2">
                  Course Thumbnail
                </label>
                <input
                  onChange={handleChange}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight "
                  id="courseThumbnail"
                  type="file"
                  name="courseThumbnail"
                  placeholder="select Course Thumbnail"
                />
              </div>
              <button
                className="w-full bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Course
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
