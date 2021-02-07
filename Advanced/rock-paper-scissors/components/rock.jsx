import React from "react"
const Rock = () => {
  return (
    <div>
      <div
        className="rounded-full  w-88 h-88"
        style={{
          boxShadow: "0px 13px hsl(349, 71%, 41%) ",
          position: "relative",
          background:
            "linear-gradient(to bottom,hsl(349, 71%, 52%), hsl(349, 70%, 56%))",
          padding: "30px",
        }}
      >
        <div className="rounded-full bg-white border-t-16 border-indigo-100 w-full h-full flex justify-center items-center">
          <img
            className="inline-block md:w-32 md:h-32 "
            src="/images/icon-rock.svg"
            alt="icon-rock"
          />
        </div>
      </div>
    </div>
  )
}

export default Rock
