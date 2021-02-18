import React, { useState } from "react"

const IntroSection = ({ searchIpAddressHandler, fetching, error }) => {
  const [ipAddress, setIpAddress] = useState("")
  return (
    <div className="bg-pattern bg-no-repeat bg-cover pt-5 md:pt-8 pb-40 px-8 md:px-0 text-2xl">
      <h3 className="text-center md:text-4xl text-white font-medium">
        IP Address Tracker
      </h3>
      <div className="rounded-xl flex items-center h-14 w-full md:w-4/12 mt-5 overflow-hidden md:mx-auto bg-white">
        <input
          style={{ fontSize: "18px" }}
          title="ip_address"
          name="ip_address"
          className="w-11/12 outline-none px-5 py-6 rounded-xl text-sm"
          placeholder="Enter IP address"
          value={ipAddress}
          onChange={(e) => setIpAddress(e.target.value)}
        />
        <div
          className={`bg-clip-padding mx-auto bg-very-dark-gray ${
            !fetching && "hover:bg-dark-gray"
          } cursor-pointer`}
          style={{ padding: "100% 0", width: "12%" }}
          onClick={() => searchIpAddressHandler(ipAddress)}
        >
          {fetching ? (
            <img className="w-9 mx-auto p-1" src="svg_loaders/oval.svg" />
          ) : (
            <img
              className="w-2 mx-auto"
              src="images/icon-arrow.svg"
              alt="icon-arrow"
            />
          )}
        </div>
      </div>
      {error.error && (
        <p className="text-center text-red-500  mt-3 font-bold">
          {error.message}
        </p>
      )}
    </div>
  )
}

export default IntroSection
