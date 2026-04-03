import React from "react";

export default function Input({ label, id, type = "text", register, errors }) {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium mb-1" htmlFor={id}>
        {label}
      </label>

      <input
        id={id}
        type={type}
        {...register(id)}
        className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400"
      />

      {errors[id] && (
        <p className="text-red-500 text-xs mt-1">{errors[id]?.message}</p>
      )}
    </div>
  );
}
