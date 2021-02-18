import React from "react"

const VerticalLine = ({ height }) => {
  return (
    <hr
      className="hidden md:inline-block ml-4 bg-gray-400"
      style={{ height, width: "1px" }}
    />
  )
}

export default VerticalLine
