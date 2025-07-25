export default function TopHeader() {
  return (
    <>
      <header className="flex justify-end items-center mb-8 animate-fadeIn">
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-200 transition-colors duration-300 relative">
            Test
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full" />
          </button>
          <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold hover:bg-indigo-600 transition-colors duration-300 cursor-pointer">
            IA
          </div>
        </div>
      </header>
    </>
  );
}
