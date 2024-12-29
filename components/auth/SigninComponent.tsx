// components/auth/SigninComponent.tsx
"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLoginMutation } from "../../redux/api/features/authApi";

const SigninComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [checkingAuth, setCheckingAuth] = useState(true); // State for auth check
  const router = useRouter();
  const [login, { isLoading, error: loginError }] = useLoginMutation();

  const handleLogin = async (e: React.FormEvent) => {
    
    e.preventDefault();
    try {
      setError(null); // Reset previous errors
      const user = await login({ email, password }).unwrap(); // Use the mutation
      if (user) {
        router.push('/dashboard'); // Redirect to dashboard on successful login
      }
    } catch (err) {
      setError("Invalid email or password"); // Display error on login failure
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
          className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none"
          placeholder="Enter your password"
        />
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>} {/* Error message */}
      <button type="submit" className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition">
        Sign In
      </button>
    </form>
  );
};

export default SigninComponent;
