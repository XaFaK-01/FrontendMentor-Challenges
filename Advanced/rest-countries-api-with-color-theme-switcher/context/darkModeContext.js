import { createContext, useState } from "react"

export const darkModeContext = createContext()

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <darkModeContext.Provider value={[darkMode, setDarkMode]}>
      {children}
    </darkModeContext.Provider>
  )
}
