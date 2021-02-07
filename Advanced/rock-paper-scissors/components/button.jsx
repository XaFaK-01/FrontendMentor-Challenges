import React from "react"

const Button = ({ buttonName, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-transparent border-2 border-gray-400 rounded-xl px-11 py-2 hover:bg-blue-800 cursor-pointer"
    >
      <p className="text-white text-4xl md:text-xl tracking-widest">
        {buttonName}
      </p>
    </div>
  )
}

export default Button
