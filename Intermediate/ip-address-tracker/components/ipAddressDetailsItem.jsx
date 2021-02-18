import React from "react"

const IpAddressDetailsItem = ({ heading, detail, hasVerticalLine }) => {
  return (
    <div
      className={`md:inline-block ${
        hasVerticalLine && "md:ml-8"
      } md:pr-7 mb-auto`}
    >
      <p className="break-normal text-dark-gray font-bold md:font-medium md:mb-3 text-headingMobile md:text-xs lg:text-sm text-center md:text-left">
        {heading}
      </p>
      <h5 className="break-normal font-medium text-center mb-4 md:mb-0 text-lg md:text-base lg:text-xl xl:text-2xl md:text-left md:w-9/12">
        {detail}
      </h5>
    </div>
  )
}

export default IpAddressDetailsItem
