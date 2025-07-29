export default function Card() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h2 className="text-lg  text-gray-700">Total Student</h2>
          <p className="text-2xl font-medium text-green-600">12+</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h2 className="text-lg  text-gray-700">Total Course</h2>
          <p className="text-2xl font-medium text-yellow-600">3+</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h2 className="text-lg  text-gray-700">Total Category</h2>
          <p className="text-2xl font-medium text-blue-600">12+</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h2 className="text-lg  text-gray-700">Total Teacher</h2>
          <p className="text-2xl font-medium text-amber-500">10+</p>
        </div>
      </div>
    </>
  );
}
