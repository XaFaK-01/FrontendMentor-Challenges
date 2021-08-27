import React from "react"
import ThemeSwitcherButton from "./themeSwitcherButton"

const TopHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <h5 className="mt-auto">calc</h5>
      <ThemeSwitcherButton />
    </div>
  )
}

export default TopHeader
