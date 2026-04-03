import React from "react";
import { useNavigate } from "react-router-dom";
import AuthCard from "../components/AuthCard";

export default function RoleSelect() {
  const navigate = useNavigate();

  return (
    <AuthCard title="Choose Account Type">
      <div className="flex flex-col gap-4">
        <button
          onClick={() => navigate("/signup/candidate")}
          className="w-full bg-blue-600 text-white p-3 rounded-xl"
        >
          Job Seeker
        </button>

        <button
          onClick={() => navigate("/signup/employer")}
          className="w-full bg-gray-200 p-3 rounded-xl"
        >
          Employer
        </button>

        <p className="text-center mt-3">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-600 cursor-pointer"
          >
            Login
          </span>
        </p>
      </div>
    </AuthCard>
  );
}
