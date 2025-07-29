import Dashboard from "@/lib/components/dashboard/Dashboard";

function InstituteDashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="font-serif">
        <Dashboard>{children}</Dashboard>
      </div>
    </>
  );
}

export default InstituteDashboardLayout;
