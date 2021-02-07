import React, { useState, useRef } from "react"
import ShapeTemplate from "../components/shapeTemplate"
import BlankShapeTemplate from "../components/blankShapeTemplate"
import RippleWrapper from "../components/rippleWrapper"
const ChosenShape = ({
  userChosenShapeData,
  systemChosenShapeData,
  setShapeSelected,
  showResult,
  setShowResult,
  showSystemCard,
  setShowSystemCard,
}) => {
  const resultStatus = useRef("")
  if (userChosenShapeData._id === 2 && systemChosenShapeData._id === 1) {
    resultStatus.current = "YOU WIN"
  } else if (userChosenShapeData._id === 3 && systemChosenShapeData._id === 2) {
    resultStatus.current = "YOU WIN"
  } else if (userChosenShapeData._id === 1 && systemChosenShapeData._id === 3) {
    resultStatus.current = "YOU WIN"
  } else if (userChosenShapeData._id === systemChosenShapeData._id) {
    resultStatus.current = "DRAW..."
  } else {
    resultStatus.current = "YOU LOSE"
  }

  const playAgainHandler = () => {
    setShowResult(false)
    setShapeSelected(false)
    setShowSystemCard(false)
  }

  return (
    // w-5/12
    <div className="mt-80 md:mt-24 mx-auto px-16 md:px-0">
      <div
        className={`grid grid-cols-2 `}
        style={{ columnGap: `${showResult && "20rem"}` }}
      >
        <h3 className="text-white text-6xl md:text-3xl text-center tracking-widest">
          YOU PICKED
        </h3>
        <h3 className="text-white text-6xl md:text-3xl text-center tracking-widest">
          THE HOUSE PICKED
        </h3>
      </div>
      <div
        className={`grid grid-cols-2 ${
          showResult && resultStatus.current !== ""
            ? "md:grid-cols-3"
            : "md:grid-cols-2"
        } gap-x-16 gap-y-20 mt-16`}
      >
        {showResult && resultStatus.current === "YOU WIN" ? (
          <div className="order-1 flex justify-center">
            <RippleWrapper>
              <ShapeTemplate
                shapeData={{
                  ...userChosenShapeData,
                  circleWidthUpdated: "96",
                  circleHeightUpdated: "96",
                  shapeWidthUpdated: "32",
                  shapeHeightUpdated: "36",
                }}
              />
            </RippleWrapper>
          </div>
        ) : (
          <div className="mr-40 order-1 flex justify-center">
            <ShapeTemplate
              shapeData={{
                ...userChosenShapeData,
                circleWidthUpdated: "96",
                circleHeightUpdated: "96",
                shapeWidthUpdated: "32",
                shapeHeightUpdated: "36",
              }}
            />
          </div>
        )}

        {showSystemCard ? (
          <>
            {showResult && (
              <div className="col-span-2 md:col-span-1 flex justify-center flex-col order-3 md:order-2">
                <h1 className="text-white text-center font-bold text-9xl md:text-7xl">
                  {resultStatus.current}
                </h1>
                <button
                  className="bg-white w-4/6 h-36 md:h-auto md:w-72 py-4 mx-auto text-5xl md:text-2xl mt-6 text-center rounded-2xl md:rounded-md tracking-widest text-blue-900 hover:text-red-600"
                  onClick={playAgainHandler}
                >
                  PLAY AGAIN
                </button>
              </div>
            )}
            {showResult && resultStatus.current === "YOU LOSE" ? (
              <div className="order-2 md:order-3 flex justify-center">
                <RippleWrapper>
                  <ShapeTemplate
                    shapeData={{
                      ...systemChosenShapeData,
                      circleWidthUpdated: "96",
                      circleHeightUpdated: "96",
                      shapeWidthUpdated: "32",
                      shapeHeightUpdated: "36",
                    }}
                  />
                </RippleWrapper>
              </div>
            ) : (
              <div className="order-2 md:order-3 flex justify-center">
                <ShapeTemplate
                  shapeData={{
                    ...systemChosenShapeData,
                    circleWidthUpdated: "96",
                    circleHeightUpdated: "96",
                    shapeWidthUpdated: "32",
                    shapeHeightUpdated: "36",
                  }}
                />
              </div>
            )}
          </>
        ) : (
          <div
            className={`${
              showSystemCard ? "order-2" : "order-3"
            } flex justify-center`}
          >
            <BlankShapeTemplate />
          </div>
        )}
      </div>
    </div>
  )
}

export default ChosenShape
