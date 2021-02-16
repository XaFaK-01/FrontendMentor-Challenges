import React from "react"

const RoundedImages = ({ cardImage, cardTitle, width, padding }) => {
  return (
    <>
      <div
        className={`bg-dark-violet-color overflow-hidden ${width} rounded-full `}
      >
        <img
          className={` bg-dark-violet-color ${width} mx-auto ${padding}`}
          src={cardImage}
          alt={cardTitle}
        />
      </div>
    </>
  )
}

export default RoundedImages
