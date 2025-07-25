import React from "react";

export default function MainContainer({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <>
      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
        <div className="mt-4 p-6 bg-white rounded-lg">{children}</div>
      </main>
    </>
  );
}
