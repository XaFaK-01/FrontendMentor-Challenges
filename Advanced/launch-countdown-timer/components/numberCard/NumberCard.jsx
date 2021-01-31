import React from "react"
import style from "./NumberCard.module.css"

const NumberCard = ({ cardName, cardValue }) => {
  return (
    <div>
      <div
        className="rounded-md border-b-1 border-black h-2/6 w-5/6 md:h-14 md:w-32 "
        style={{ backgroundColor: "hsl(235, 16%, 20%)" }}
      >
        <p
          className="text-4xl font-bold p-5 md:text-7xl text-center"
          style={{ color: "hsl(345, 95%, 68%)" }}
        >
          {cardValue}
        </p>
      </div>
      <div
        className="rounded-md border-t-1 border-black h-2/6 w-5/6 md:h-14 md:w-32 "
        style={{ backgroundColor: "hsl(236, 21%, 26%) ", boxShadow: "0px 6px" }}
      ></div>

      <p className={style.card}>{cardName}</p>
    </div>
  )
}

export default NumberCard
