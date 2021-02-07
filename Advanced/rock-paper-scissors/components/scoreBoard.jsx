import React from "react"

const ScoreBoard = ({ userScores }) => {
  return (
    <div
      className="border-gray-500 border-3 rounded-2xl px-8 py-6 sm:mt-16 flex justify-between mx-auto"
      style={{ width: "74rem" }}
    >
      <img src="images/logo.svg" alt="logo" />
      <div className="bg-white w-48 h-36 rounded-lg text-center p-2 md:p-4 ">
        <p className="text-blue-800 text-2xl md:text-xl tracking-widest">
          SCORE
        </p>
        <p className="text-gray-600 font-bold text-8xl md:text-7xl md:mt-1">
          {userScores}
        </p>
      </div>
    </div>
  )
}

export default ScoreBoard
