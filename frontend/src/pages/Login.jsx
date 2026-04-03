import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AuthCard from "../components/AuthCard";
import api from "../api";

export default function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await api.post("/auth/login", data);
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <AuthCard title="Login">
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            {...register("email")}
            placeholder="Email"
            className="w-full p-3 border rounded-xl"
          />
        </div>

        <div>
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-xl"
          />
        </div>

        <button className="w-full bg-blue-600 text-white p-3 rounded-xl">
          Login
        </button>

        <p className="text-center mt-3">
          Don't have an account?{" "}
          <span onClick={() => navigate("/")} className="text-blue-600 cursor-pointer">
            Sign Up
          </span>
        </p>
      </form>
    </AuthCard>
  );
}
