import React from "react"
const ShapeTemplate = ({ shapeData, setSelectedShapeId }) => {
  return (
    <div
      onClick={() => setSelectedShapeId && setSelectedShapeId(shapeData._id)}
    >
      <div
        className={`rounded-full w-80 h-80 md:w-${
          shapeData.circleWidthUpdated
            ? shapeData.circleWidthUpdated
            : shapeData.circleDimensions.width
        } md:h-${
          shapeData.circleHeightUpdated
            ? shapeData.circleHeightUpdated
            : shapeData.circleDimensions.height
        }`}
        style={{
          boxShadow: `0px 10px ${shapeData.shapeShadowDark} `,
          position: "relative",
          background: `linear-gradient(to bottom,${shapeData.shapeGradientColor1}, ${shapeData.shapeGradientColor2})`,
          padding: `${shapeData.circleHeightUpdated ? "35px" : "25px"}`,
        }}
      >
        <div className="rounded-full bg-white border-t-16 border-indigo-100 w-full h-full flex justify-center items-center">
          <img
            className={`inline-block w-28 h-32 md:w-${
              shapeData.shapeWidthUpdated
                ? shapeData.shapeWidthUpdated
                : shapeData.shapeDimensions.width
            } md:h-${
              shapeData.shapeHeightUpdated
                ? shapeData.shapeWidthUpdated
                : shapeData.shapeDimensions.width
            }`}
            src={shapeData.shapeImage}
            alt={shapeData.shapeName}
          />
        </div>
      </div>
    </div>
  )
}

export default ShapeTemplate
