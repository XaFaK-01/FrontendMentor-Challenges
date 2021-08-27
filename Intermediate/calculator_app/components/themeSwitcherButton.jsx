import React from "react"
import { updateTheme } from "../actions/themeSelectionActions"

import { useDispatch, useSelector } from "react-redux"

const ThemeSwitcherButton = () => {
  const dispatch = useDispatch()
  const currentTheme = useSelector((state) => state.currentTheme)

  const handleThemeChange = (event) => {
    if (event.target.value === "1") {
      dispatch(updateTheme("1"))
    }

    if (event.target.value === "2") {
      dispatch(updateTheme("2"))
    }

    if (event.target.value === "3") {
      dispatch(updateTheme("3"))
    }
  }

  return (
    <div className="flex justify-between">
      <p className="mt-auto mr-2" style={{ fontSize: "10px" }}>
        THEME
      </p>

      <div>
        <div className="mb-1 flex items-start justify-between">
          <p
            className="inline-block"
            style={{ fontSize: "10px", margin: "0px 2px" }}
          >
            1
          </p>
          <p
            className="inline-block"
            style={{ fontSize: "10px", margin: "0px 2px" }}
          >
            2
          </p>
          <p
            className="inline-block"
            style={{ fontSize: "10px", margin: "0px 2px" }}
          >
            3
          </p>
        </div>
        <div
          className={`${
            currentTheme.id === "1"
              ? `bg-theme-1-backgrounds-toggle-background text-theme-1-text-1-color`
              : currentTheme.id === "2"
              ? "bg-theme-2-backgrounds-toggle-background text-theme-2-text-2-color"
              : "bg-theme-3-backgrounds-toggle-background text-theme-3-text-1-color"
          } flex h-3 justify-between rounded-full`}
        >
          <div>
            <input
              type="radio"
              id="option-1"
              className=" hidden"
              name="radio-input"
              value="1"
              checked={currentTheme.id === "1"}
              onChange={handleThemeChange}
            />
            <label htmlFor="option-1" className="">
              <span
                className={`mx-1 inline-block rounded-full ${
                  currentTheme.id === "1" && "bg-theme-1-keys-2-key-background"
                }`}
                style={{
                  height: "15px",
                  width: "15px",
                  marginBottom: "16px",
                  marginLeft: "5px",
                }}
              ></span>
            </label>
          </div>

          <div>
            <input
              type="radio"
              id="option-2"
              className=" hidden"
              name="radio-input"
              value="2"
              checked={currentTheme.id === "2"}
              onChange={handleThemeChange}
            />
            <label htmlFor="option-2" className="">
              <span
                className={`w-2 h-2 mx-1 inline-block rounded-full ${
                  currentTheme.id === "2" && "bg-theme-2-keys-2-key-background"
                }`}
                style={{
                  height: "15px",
                  width: "15px",
                  marginBottom: "16px",
                  marginLeft: "5px",
                }}
              ></span>
            </label>
          </div>

          <div>
            <input
              type="radio"
              id="option-3"
              className=" hidden"
              name="radio-input"
              value="3"
              checked={currentTheme.id === "3"}
              onChange={handleThemeChange}
            />
            <label htmlFor="option-3" className="">
              <span
                className={`w-2 h-2 mx-1 inline-block rounded-full ${
                  currentTheme.id === "3" && "bg-theme-3-keys-2-key-background"
                }`}
                style={{
                  height: "15px",
                  width: "15px",
                  marginBottom: "16px",
                  marginLeft: "5px",
                }}
              ></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThemeSwitcherButton
