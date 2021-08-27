import React from "react"
import { useSelector } from "react-redux"

const Screen = () => {
  const currentTheme = useSelector((state) => state.currentTheme)
  const memory = useSelector((state) => state.memory)

  return (
    <div
      className={`mt-2 sm: ${
        currentTheme.id === "1"
          ? `bg-theme-1-backgrounds-screen-background text-theme-1-text-2-color`
          : currentTheme.id === "2"
          ? "bg-theme-2-backgrounds-screen-background text-theme-2-text-2-color"
          : "bg-theme-3-backgrounds-screen-background text-theme-3-text-1-color"
      } rounded pt-1 pb-2 px-2`}
    >
      {/* {memory.operationalValue.length > 0 ? (
        memory.operationalValue.map((value) => (
          <p key={value} className="text-lg text-right inline">
            {value}
          </p>
        ))
      ) : (
        <p className="text-lg text-right">{memory.currentValue}</p>
      )} */}

      {memory.operationalValue == "" ? (
        <p className="text-lg text-right">{memory.currentValue}</p>
      ) : (
        <p className="text-lg text-right">{memory.operationalValue}</p>
      )}
    </div>
  )
}

export default Screen
