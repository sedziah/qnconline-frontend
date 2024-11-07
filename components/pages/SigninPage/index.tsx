/* eslint-disable @next/next/no-img-element */
"use client";
import SigninComponent from '@/components/auth/SigninComponent';
import SignupComponent from '@/components/auth/SignupComponent';
import DefaultNavbar from '@/components/Navbars/DefaultNavbar';
import React, { useState } from 'react';

const SigninPage = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const forms = ["Sign In", "Register"];

  return (
    <div className="px-4 h-screen overflow-hidden overflow-y-scroll bg-bglight flex items-center justify-center">
      <DefaultNavbar />
      <div className="w-full max-w-lg mx-auto">
        <h1 className="text-2xl font-semibold text-black">
          {activeStep === 0 ? "Sign In" : "Create an account"}
        </h1>

        <div className="my-5 border border-black px-2 py-1.5 rounded-full flex items-center gap-2">
          {forms.map((item, index) => (
            <button
              key={item}
              onClick={() => setActiveStep(index)}
              className={`w-full h-10 rounded-full transition-all ${
                index === activeStep ? "bg-black text-white" : "bg-white text-black"
              } flex items-center justify-center font-medium`}
            >
              {item}
            </button>
          ))}
        </div>

        {activeStep === 0 ? <SigninComponent /> : <SignupComponent />}

        <div className="my-7">
          <div className="flex items-center gap-3">
            <div className="h-0.5 w-full bg-lightGray/40"></div>
            <p className="text-xs text-center text-black">Or continue with</p>
            <div className="h-0.5 w-full bg-lightGray/40"></div>
          </div>
        </div>

        <div className="flex gap-x-3">
          <button className="h-12 border border-black w-full rounded-full flex items-center justify-center text-black font-semibold hover:bg-lightGray/20 transition">
            <img src="https://storage.googleapis.com/support-kms-prod/ZAl1gIwyUsvfwxoW9ns47iJFioHXODBbIkrK" alt="google" className="w-9 h-9 rounded-full" />
            Google
          </button>
          <button className="h-12 border border-black w-full rounded-full flex items-center justify-center text-black font-semibold hover:bg-lightGray/20 transition">
            <img src="https://www.wavetransit.com/wp-content/uploads/2021/08/Facebook-logo.png" alt="facebook" className="w-9 h-9 rounded-full" />
            Facebook
          </button>
          <button className="h-12 border border-black w-full rounded-full flex items-center justify-center text-black font-semibold hover:bg-lightGray/20 transition">
            <img src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png" alt="apple" className="w-9 h-9 rounded-full" />
            Apple
          </button>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
