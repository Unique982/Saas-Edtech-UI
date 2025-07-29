import { useAppDispatch, useAppSelector } from "@/lib/store/hook";
import { createCategory } from "@/lib/store/institute/category/institute-category-slice";
import { ICategoryData } from "@/lib/store/institute/category/institute-category-type";

import { Status } from "@/lib/types/type";
import { ChangeEvent, useState } from "react";
interface ICloseModal {
  closeModal: () => void;
}

const Modal: React.FC<ICloseModal> = ({ closeModal }) => {
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((store) => store.instituteCategory);
  const [categoryData, setCategoryData] = useState<ICategoryData>({
    categoryName: "",
    categoryDescription: "",
  });

  //
  const handleCategoryChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCategoryData({
      ...categoryData,
      [name]: value,
    });
  };
  ///
  const handleSubmission = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    await dispatch(createCategory(categoryData));
    if (status === Status.SUCCESS) {
      closeModal();
    }
  };

  return (
    <>
      <div
        id="modal"
        className="fixed inset-0 z-50 flex items-center justify-center"
      >
        <div className="fixed inset-0 bg-black/50" />
        <div className="relative w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Create Category
            </h3>
            <button
              onClick={closeModal}
              id="closeModalButton"
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <svg
                className="h-4 w-4 inline-block ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <form onSubmit={handleSubmission} method="POST">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Category Name
                </label>
                <input
                  type="text"
                  onChange={handleCategoryChange}
                  name="categoryName"
                  id="categoryName"
                  className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
                  placeholder="Web Development"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Category Description
                </label>
                <textarea
                  name="categoryDescription"
                  onChange={handleCategoryChange}
                  id="categoryDescription"
                  className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
                  placeholder="Category description"
                ></textarea>
              </div>
              <div className="flex justify-end gap-3">
                <button
                  onClick={closeModal}
                  id="cancelButton"
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-md bg-gradient-to-r from-green-600 to-green-600 hover:from-green-700 hover:to-green-700 green:from-indigo-500 dark:to-green-500 dark:green:from-indigo-600 dark:hover:to-green-600">
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Modal;
