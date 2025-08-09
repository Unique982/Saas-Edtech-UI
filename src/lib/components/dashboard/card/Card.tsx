export default function Card() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Student Course */}
        <div className="bg-white p-4 rounded-lg shadow-sm flex items-center space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-10 w-10 text-green-700"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
            />
          </svg>

          <div>
            <h2 className="text-lg  text-gray-700">Total Student</h2>
            <p className="text-2xl font-medium text-green-600">12+</p>
          </div>
        </div>
        {/* Course Code  */}
        <div className="bg-white p-4 rounded-lg shadow-sm flex items-center space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-10 w-10 text-yellow-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
            />
          </svg>

          <div>
            <h2 className="text-lg  text-gray-700">Total Course</h2>
            <p className="text-2xl font-medium text-yellow-600">3+</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm flex items-center space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-10 w-10 text-blue-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 6h.008v.008H6V6Z"
            />
          </svg>

          <div>
            <h2 className="text-lg  text-gray-700">Total Category</h2>
            <p className="text-2xl font-medium text-blue-600">12+</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h2 className="text-lg  text-gray-700">Total Teacher</h2>
          <p className="text-2xl font-medium text-amber-500">10+</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h2 className="text-lg  text-gray-700">Upcoming Classes</h2>
          <p className="text-2xl font-medium text-cyan-800">12+</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h2 className="text-lg  text-gray-700">Ongoing</h2>
          <p className="text-2xl font-medium text-purple-700">3+</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h2 className="text-lg  text-gray-700">Free Course</h2>
          <p className="text-2xl font-medium text-red-700">12+</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h2 className="text-lg  text-gray-700">Paid Course</h2>
          <p className="text-2xl font-medium text-amber-700">10+</p>
        </div>
      </div>
    </>
  );
}
