import Image from 'next/image'
import React from 'react'

const SigninPage = () => {
  return (
    <div>
      <div className="flex w-screen flex-wrap text-slate-800">
        <div className="relative hidden h-screen select-none flex-col justify-center bg-black text-center md:flex md:w-1/2">
          <div className="mx-auto py-16 px-8 text-white xl:w-[40rem]">
            <span className="rounded-full bg-white px-3 py-1 font-medium text-primary">New Feature</span>
        
            <p className="my-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt necessitatibus nostrum repellendus ab totam.</p>
            <a href="#" className="font-semibold tracking-wide text-white underline underline-offset-4">Learn More</a>
          </div>

        </div>
        <div className="flex w-full flex-col md:w-1/2">
          <div className="flex justify-center pt-12 md:justify-start md:pl-12">
            <a href="/">
              <Image
                width={100}
                height={100}
                src="/assets/logo-small.png" className='h-10 object-contain' alt='logo' />
            </a>
          </div>
          <div className="my-auto mx-auto flex flex-col justify-center px-6 pt-8 md:justify-start lg:w-[28rem]">
            <p className="text-center text-3xl font-bold md:text-left md:leading-tight">Welcome back</p>
            <p className="mt-6 text-center font-medium md:text-left">
              Already a customer?{" "}
              <a href="#" className="whitespace-nowrap font-medium text-primary">Login here</a>
            </p>
            <button className="-2 mt-8 flex items-center justify-center rounded-md border px-4 py-3 outline-none ring-gray-400 ring-offset-2 transition hover:border-transparent hover:bg-black hover:text-white focus:ring-2"><img className="mr-2 h-5" src="/images/-9jfz8JJkYKu0yDYmD5WM.svg" alt="" /> Get started with Google</button>
            <div className="relative mt-8 flex h-px place-items-center bg-gray-200">
              <div className="absolute left-1/2 h-6 -translate-x-1/2 bg-white px-4 text-center text-sm text-gray-500">Or use email instead</div>
            </div>
            <form className="flex flex-col items-stretch pt-3 md:pt-8">
            
              <div className="flex flex-col pt-4">
                <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-primary">
                  <input type="email" id="login-email" className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Email" />
                </div>
              </div>
              <div className="mb-4 flex flex-col pt-4">
                <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-primary">
                  <input type="password" id="login-password" className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Password (minimum 8 characters)" />
                </div>
              </div>
              <div className="block">
                <input className="mr-2 h-5 w-5 appearance-none rounded border border-gray-300 bg-contain bg-no-repeat align-top text-black shadow checked:bg-primary focus:border-primary focus:shadow" type="checkbox" id="remember-me" checked />
                <label className="inline-block" htmlFor="remember-me"> I agree to the <a className="underline" href="#">Terms and Conditions</a></label>
              </div>
              <button type="submit" className="mt-6 rounded-lg bg-primary px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-primary focus:ring-2 md:w-32">Sign in</button>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SigninPage