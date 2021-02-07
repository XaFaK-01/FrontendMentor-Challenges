import React from "react"
import ShapeTemplate from "../components/shapeTemplate"

const PickShape = ({ allShapes, setSelectedShapeId }) => {
  return (
    <div
      onClick={console.log("clicked")}
      className="mt-96 flex justify-center mx-auto"
      style={{ width: "80rem" }}
    >
      <div className="relative mx-auto">
        <div className="absolute right-20 bottom-0 cursor-pointer ">
          <ShapeTemplate
            shapeData={allShapes[0]}
            setSelectedShapeId={setSelectedShapeId}
          />
        </div>
        <div className="absolute left-20 bottom-0 cursor-pointer">
          <ShapeTemplate
            shapeData={allShapes[1]}
            setSelectedShapeId={setSelectedShapeId}
          />
        </div>
        <div className="absolute w-full right-36 md:right-28 top-20 cursor-pointer">
          <ShapeTemplate
            shapeData={allShapes[2]}
            setSelectedShapeId={setSelectedShapeId}
          />
        </div>
      </div>
    </div>
  )
}

export default PickShape
