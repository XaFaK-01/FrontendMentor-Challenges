import React, { useContext } from "react"
import { darkModeContext } from "../context/darkModeContext"
import { faMoon } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

const HeaderBar = () => {
  const [darkMode, setDarkMode] = useContext(darkModeContext)

  return (
    <div className={`${darkMode && "dark"}`}>
      <div
        className={`bg-dark-mode-text-and-light-mode-elements dark:bg-dark-mode-elements
        text-light-mode-text
        dark:text-dark-mode-text-and-light-mode-elements
        
        px-5 md:px-16 py-3 fixed top-0 w-full flex justify-between items-center ${
          !darkMode && "border-b-2"
        } shadow-sm`}
      >
        <Link href="/">
          <a>
            <p
              className={`text-light-mode-text text-base md:text-2xl font-extrabold dark:text-dark-mode-text-and-light-mode-elements`}
            >
              Where in the world?
            </p>
          </a>
        </Link>
        <div
          onClick={() => setDarkMode((prevState) => !prevState)}
          className={`flex justify-between items-center cursor-pointer text-light-mode-text dark:text-dark-mode-text-and-light-mode-elements`}
        >
          <div className="inline-block w-4">
            <FontAwesomeIcon icon={faMoon} />
          </div>
          <p className="inline-block text-sm p-3">
            {darkMode ? "Light Mode" : "Dark Mode"}
          </p>
        </div>
      </div>
    </div>
  )
}

export default HeaderBar
