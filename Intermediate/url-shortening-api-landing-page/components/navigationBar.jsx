import React, { useState } from "react"
import Button from "./button"
import MenuIcon from "./menuIcon"
const NavigationBar = () => {
  const [showNavigationBar, setShowNavigationBar] = useState(false)
  return (
    <>
      <header>
        <div className="grid grid-cols-2 md:block">
          <img src="/images/logo.svg" alt="logo" className="md:inline-block w-min " />

          <div
            onClick={() => setShowNavigationBar((prevState) => !prevState)}
            className={`inline-block my-auto ml-auto md:hidden`}
          >
            <MenuIcon />
          </div>
          <div
            className={` col-span-2  ${
              showNavigationBar
                ? "inline-block absolute md:static mt-10 w-10/12"
                : "hidden"
            } mt-6 md:inline-block md:w-10/12 md:mt-0 `}
          >
            <div className="md:flex md:justify-between md:items-center bg-dark-violet-color px-5 md:bg-transparent rounded-lg py-8">
              <div className="md:space-x-3 space-y-7 md:space-y-0">
                <p className="text-white md:text-grayish-violet-color text-base md:text-sm  md:inline-block text-center font-bold cursor-pointer  hover:text-dark-violet-color">
                  Features
                </p>
                <p className="text-white md:text-grayish-violet-color text-base md:text-sm  md:inline-block text-center font-bold cursor-pointer hover:text-dark-violet-color">
                  Pricing
                </p>
                <p className="text-white md:text-grayish-violet-color text-base md:text-sm  md:inline-block text-center font-bold cursor-pointer hover:text-dark-violet-color">
                  Resources
                </p>
              </div>
              <div className="mt-5 md:mt-0 md:space-x-3 space-y-7 md:space-y-0">
                <hr
                  className="md:hidden bg-gray-500 border-none"
                  style={{ height: "1px" }}
                />

                <p className="text-white md:text-grayish-violet-color text-base md:text-sm  md:inline-block text-center font-bold cursor-pointer hover:text-dark-violet-color">
                  Login
                </p>
                <div className="text-white md:text-very-dark-violet-color md:inline-block w-full md:w-auto cursor-pointer">
                  <Button
                    buttonTitle="Sign up"
                    titleSizeBase="text-lg"
                    titleSizeMd="text-base"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default NavigationBar
