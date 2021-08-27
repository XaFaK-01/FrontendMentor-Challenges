import { UPDATE_THEME } from "../constants/constants.js"

export const currentThemeReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return {
        ...state,
        id: action.payload.themeId,
      }
    default:
      return state
  }
}
