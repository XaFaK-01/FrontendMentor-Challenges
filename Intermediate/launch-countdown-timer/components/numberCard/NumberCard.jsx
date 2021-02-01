import React from "react"
import style from "./NumberCard.module.css"

const NumberCard = ({ cardName, cardValue }) => {
  return (
    <div>
      <div className={style.upperHalfCard}>
        <p className={style.cardValue}>{cardValue}</p>
      </div>
      <div className={style.lowerHalfCard}></div>

      <p className={style.cardName}>{cardName}</p>
    </div>
  )
}

export default NumberCard
