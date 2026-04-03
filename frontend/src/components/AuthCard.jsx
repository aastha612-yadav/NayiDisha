import React from "react";

export default function AuthCard({ title, children }) {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold text-center mb-6">{title}</h2>
        {children}
      </div>
    </div>
  );
}
