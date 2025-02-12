import React, { useState } from "react";
import { useSubscribeNewsletterMutation } from "../redux/api/features/newsletterApi";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [subscribeNewsletter, { isLoading, isSuccess, error }] =
    useSubscribeNewsletterMutation();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    await subscribeNewsletter(email);
  };

  return (
    <div className="flex justify-center bg-gray-50 mt-40">
      <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-xl font-extrabold leading-normal tracking-tight text-center text-gray-900 sm:text-2xl">
          <p>Get ₵15 off your first purchase of ₵250 or more.</p>
          <p>
            <span className="text-primary">Sign up for our newsletter.</span>
          </p>
        </h2>

        {isSuccess ? (
          <p className="mt-8 text-center text-green-600">
            Thank you for subscribing! 🎉
          </p>
        ) : (
          <form
            onSubmit={handleSubscribe}
            className="justify-center mt-8 sm:flex"
          >
            <input
              aria-label="Email address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-5 py-3 text-base leading-6 text-gray-900 placeholder-gray-500 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline focus:border-blue-300 sm:max-w-xs"
              placeholder="Enter your email"
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="flex items-center justify-center w-full px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-[#000] border border-transparent rounded-md hover:bg-[#000] focus:outline-none focus:shadow-outline"
                disabled={isLoading}
              >
                {isLoading ? "Subscribing..." : "Notify me"}
              </button>
            </div>
          </form>
        )}

        {error && (
          <p className="mt-4 text-center text-red-600">
            Something went wrong. Try again.
          </p>
        )}
      </div>
    </div>
  );
};

export default NewsLetter;
