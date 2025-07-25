import Dashboard from "@/lib/components/dashboard/Dashboard";
import TopHeader from "@/lib/components/dashboard/Header";

function InsitituteDashboard() {
  return (
    <>
      <TopHeader />
      <div className="container mx-auto p-4 md:p-6">
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-8 mb-4 ">
          <p className="text-3xl font-bold mt-4 font-serif text-black">
            Welcome to Institute Admin Dashboard
          </p>
          <p className="text-2zl font-serif mt-2 text-black">
            Good Evening ! Mr.Unique Neupane (Saas Project)
          </p>
        </div>
      </div>
    </>
  );
}
export default InsitituteDashboard;
