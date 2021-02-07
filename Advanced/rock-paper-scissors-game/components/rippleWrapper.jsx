import React from "react"
const RippleWrapper = ({ children }) => {
  return (
    <div>
      <div
        className={`rounded-full w-80 h-80 md:w-96 md:h-96`}
        style={{
          boxShadow: "0px 0px 0px 270px rgb(255 255 255 / 3%)",
        }}
      >
        <div
          className="rounded-full"
          style={{
            boxShadow: "0px 0px 0px 170px rgb(255 255 255 / 4%)",
          }}
        >
          <div
            className="rounded-full"
            style={{
              boxShadow: "0px 0px 0px 80px rgba(255 213 229 / 5%)",
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RippleWrapper
