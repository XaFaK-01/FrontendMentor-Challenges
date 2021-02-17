import React from "react"
import Button from "./button"
import Layout from "../HOC/layout"

const BoostYourLinks = () => {
  return (
    <div className="py-28 md:py-10 bg-dark-violet-color bg-boost-mobile bg-no-repeat md:bg-boost-desktop bg-cover bg-right-top">
      <p className="font-bold text-center text-2xl md:text-2xl mx-auto md:w-2/4 text-white">
        Boost your links today
      </p>
      <div className="mx-auto mt-4 w-2/4 md:w-36">
        <Button
          buttonTitle="Get Started"
          titleSizeBase="text-xl"
          titleSizeMd="text-sm"
          paddingXMd="px-6"
          paddingYMd="py-2"
          paddingXBase="px-7"
          paddingYBase="py-4"
          rounded="rounded-3xl"
        />
      </div>
    </div>
  )
}

export default BoostYourLinks
