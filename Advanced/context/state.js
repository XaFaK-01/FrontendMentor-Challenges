import { createContext, useState, useContext } from "react"

const globalStateContext = createContext()

export const GlobalStateProvider = ({ children }) => {
  const [sharedState, setSharedState] = useState({
    showRules: true,
    shapeSelected: false,
    userScores: 0,
    shapeId: null,
    showResult: false,
    userChosenShapeData: [],
    showResult: false
  })

  return (
    <globalStateContext.Provider value={[sharedState, setSharedState]}>
      {children}
    </globalStateContext.Provider>
  )
}

export function useGlobalContext() {
  return useContext(globalStateContext)
}
