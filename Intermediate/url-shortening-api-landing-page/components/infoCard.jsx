import React from "react"
import RoundedImage from "./roundedImage"

const InfoCard = ({ cardImage, cardTitle, cardInfo }) => {
  return (
    <>
      {/* <div className="relative bg-white rounded-md w-full md:w-64"> */}

      <div className="relative bg-white rounded-md w-full md:w-full">
        <div
          className="absolute left-32 md:left-6 -top-8"
          style={{ padding: "inherit" }}
        >
          <RoundedImage
            cardImage={cardImage}
            cardTitle={cardTitle}
            width="w-16"
            padding="p-4"
          />
        </div>
        <div className="px-6 pt-16 pb-9">
          <h4 className="my-2 font-bold text-very-dark-violet-color text-base md:text-lg">
            {cardTitle}
          </h4>
          <p className="text-grayish-violet-color text-xs">{cardInfo}</p>
        </div>
      </div>
    </>
  )
}

export default InfoCard
