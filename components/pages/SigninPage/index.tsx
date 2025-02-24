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
    <div className="relative min-h-screen w-full bg-bglight">
      <DefaultNavbar />

      <div className="container mx-auto px-4 py-8 md:py-16 flex items-center justify-center">
        <div className="w-full max-w-md">
          {/* Header */}
          <h1 className="mt-14 lg:mt-5 md:mt-5 text-2xl md:text-3xl font-semibold text-black transition-all duration-300 ease-in-out mb-6">
            {activeStep === 0 ? "Welcome back" : "Create your account"}
          </h1>

          {/* Toggle Buttons */}
          <div className=" mb-8 border border-black/20 p-1 rounded-full flex items-center gap-2 bg-white/80 backdrop-blur-sm shadow-sm">
            {forms.map((item, index) => (
              <button
                key={item}
                onClick={() => setActiveStep(index)}
                className={`
                  w-full py-2.5 md:py-3 rounded-full transition-all duration-500 ease-in-out
                  font-medium relative overflow-hidden
                  ${index === activeStep
                    ? "text-white"
                    : "text-black hover:bg-black/5"
                  }
                `}
              >
                <span className="relative z-10">{item}</span>
                <div
                  className={`
                    absolute inset-0 bg-black transition-transform duration-500 ease-in-out
                    ${index === activeStep ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                  `}
                />
              </button>
            ))}
          </div>

          {/* Form Container */}
          <div className="relative">
            <div
              className={`
                transform transition-all duration-500 ease-in-out
                ${activeStep === 0
                  ? 'translate-x-0 opacity-100 visible'
                  : '-translate-x-full opacity-0 invisible absolute top-0 left-0 w-full'
                }
              `}
            >
              <SigninComponent />
            </div>
            <div
              className={`
                transform transition-all duration-500 ease-in-out
                ${activeStep === 1
                  ? 'translate-x-0 opacity-100 visible'
                  : 'translate-x-full opacity-0 invisible absolute top-0 left-0 w-full'
                }
              `}
            >
              <SignupComponent />
            </div>
          </div>

          {/* Divider */}
          <div className="my-8">
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-full bg-black/10"></div>
              <p className="text-xs whitespace-nowrap text-black/50 font-medium">
                Or continue with
              </p>
              <div className="h-[1px] w-full bg-black/10"></div>
            </div>
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              {
                name: "Google",
                icon: "https://storage.googleapis.com/support-kms-prod/ZAl1gIwyUsvfwxoW9ns47iJFioHXODBbIkrK",
                iconClass: "w-5 h-5"
              },
              {
                name: "Facebook",
                icon: "https://www.wavetransit.com/wp-content/uploads/2021/08/Facebook-logo.png",
                iconClass: "w-8 h-8"
              },
              {
                name: "Apple",
                icon: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
                iconClass: "w-8 h-8"
              }
            ].map((provider) => (
              <button
                key={provider.name}
                className="h-12 border border-black/20 rounded-full flex items-center justify-center gap-3
                         text-black font-medium hover:bg-black/5 transition-all duration-300 ease-in-out
                         group relative overflow-hidden shadow-sm hover:shadow-md"
              >
                <img
                  src={provider.icon}
                  alt={provider.name.toLowerCase()}
                  className={`${provider.iconClass} object-contain shrink-0 
                            transition-transform duration-300 group-hover:scale-110`}
                />
                <span className="text-sm">{provider.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
