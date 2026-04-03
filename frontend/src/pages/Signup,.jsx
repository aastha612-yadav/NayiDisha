import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../components/Input";
import AuthCard from "../components/AuthCard";
import api from "../api";

const candidateSchema = yup.object().shape({
  fullName: yup.string().required("Full name required"),
  email: yup.string().email().required("Email required"),
  mobile: yup.string().min(10).required("Mobile required"),
  password: yup.string().min(6).required("Password required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required(),
  candidateCategory: yup
    .string()
    .oneOf(["women-returnee", "pwd", "prefer-not"])
    .required("Select category"),
});

const employerSchema = yup.object().shape({
  fullName: yup.string().required("Full name required"),
  companyName: yup.string().required("Company name required"),
  email: yup.string().email().required("Email required"),
  password: yup.string().min(6).required("Password required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required(),
});

export default function Signup() {
  const navigate = useNavigate();
  const { role } = useParams();

  const schema = role === "employer" ? employerSchema : candidateSchema;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await api.post("/auth/signup", { ...data, role });
      alert("Account created!");
      navigate("/login");
    } catch (err) {
      alert("Signup failed");
    }
  };

  return (
    <AuthCard title={`Sign Up — ${role === "candidate" ? "Job Seeker" : "Employer"}`}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <Input id="fullName" label="Full Name" register={register} errors={errors} />

        {role === "employer" && (
          <Input
            id="companyName"
            label="Company Name"
            register={register}
            errors={errors}
          />
        )}

        <Input id="email" type="email" label="Email" register={register} errors={errors} />

        <Input id="mobile" label="Mobile" register={register} errors={errors} />

        <Input id="password" type="password" label="Password" register={register} errors={errors} />

        <Input
          id="confirmPassword"
          type="password"
          label="Confirm Password"
          register={register}
          errors={errors}
        />

        {role === "candidate" && (
          <div>
            <label className="text-sm mb-1">Candidate Category</label>
            <select
              {...register("candidateCategory")}
              className="w-full p-3 border rounded-xl"
            >
              <option value="">Select</option>
              <option value="women-returnee">Women Returnee</option>
              <option value="pwd">Person with Disability (PWD)</option>
              <option value="prefer-not">Prefer Not to Say</option>
            </select>
            {errors.candidateCategory && (
              <p className="text-red-500 text-xs">
                {errors.candidateCategory.message}
              </p>
            )}
          </div>
        )}

        <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-xl">
          Create Account
        </button>
      </form>
    </AuthCard>
  );
}
