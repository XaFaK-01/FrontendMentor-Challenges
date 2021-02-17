import React from "react"

const IntroductorySection = () => {
  return (
    <div className="grid grid-cols-2 py-12 grid-rows-3">
      <div className="order-2 col-span-2 sm:order-1 sm:col-span-1 row-span-3">
        <h1 className="mt-5 text-4xl md:text-7xl font-bold text-very-dark-violet-color text-center md:text-left md:mt-16">
          More than just shorter links
        </h1>

        <p className="text-grayish-violet-color font-medium text-center mt-3 text-lg md:text-lg md:text-left md:mt-2">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>

        <div className="cursor-pointer mt-8 rounded-3xl px-8 py-3 bg-cyan-button-color hover:bg-cyan-button-hover-color md:inline-block mx-auto w-9/12 md:mx-0 md:w-auto">
          <p
            className={`text-white text-center text-2xl md:text-base font-bold`}
          >
            Get Started
          </p>
        </div>
      </div>
      <div className="md:relative order-1 col-span-2 sm:order-2 sm:col-span-1 row-span-3 overflow-hidden  ">
        <img
          className="md:absolute -right-12 mx-auto md:mx-0 md:left-20"
          src="/images/illustration-working.svg"
          alt="illustration-working"
        />
      </div>
    </div>
  )
}

export default IntroductorySection
