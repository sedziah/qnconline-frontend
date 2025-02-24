"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useLoginMutation } from "../../redux/api/features/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/authSlice";

const SigninComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Clear any previous errors

    try {
      const response = await login({ email, password }).unwrap();

      console.log("Login successful:", response); // Debugging log

      // Dispatch user to Redux store if backend provides user info
      if (response?.user) {
        dispatch(setUser(response.user));
      }

      // Redirect to dashboard
      router.push("/dashboard");
    } catch (err: any) {
      console.error("Login failed:", err); // Debugging log

      // Handle errors
      if (err?.status === 401) {
        setError("Invalid email or password");
      } else if (err?.status >= 500) {
        setError("Server error. Please try again later.");
      } else {
        setError("An unknown error occurred. Please try again.");
      }
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isLoading}
          className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none"
          placeholder="Enter your email"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={isLoading}
          className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none"
          placeholder="Enter your password"
        />
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>} {/* Error message */}
      <button type="submit" className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition">
        {isLoading ? "Signing In..." : "Sign In"}
      </button>
    </form>
  );
};

export default SigninComponent;
