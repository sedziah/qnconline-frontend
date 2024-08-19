import React from 'react'

const NewsLetter = () => {
  return (
    <div className="flex justify-center bg-gray-50 mt-40">
      <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-xl font-extrabold leading-normal tracking-tight text-center text-gray-900 sm:text-2xl">
          <p>
            Get ₵15 off your first purchase of ₵250 or more.
          </p>
          <p>
            <span className="text-primary">Sign up for our newsletter.</span>
          </p>
        </h2>
        <form action="https://github.us3.list-manage.com/subscribe/post?u=6a33c422777aedd88e9a9488e&amp;id=9b99f013b8"
          method="post" target="_blank" className="justify-center mt-8 sm:flex">
          <input aria-label="Email address" name="EMAIL" type="email" required={true} className="w-full px-5 py-3 text-base leading-6 text-gray-900 placeholder-gray-500 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline focus:border-blue-300 sm:max-w-xs" placeholder="Enter your email"/>
            <input type="hidden" value="8" name="group[27425][8]" id="mce-group[27425]-27425-3"/>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <button className="flex items-center justify-center w-full px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-[#000] border border-transparent rounded-md hover:bg-[#000] focus:outline-none focus:shadow-outline">
                  Notify me
                </button>
              </div>
            </form>
          </div>
      </div>
  )
}

export default NewsLetter