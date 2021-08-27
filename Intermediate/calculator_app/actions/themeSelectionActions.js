import { UPDATE_THEME } from "../constants/constants.js"

export const updateTheme = (themeId) => (dispatch) => {
  dispatch({
    type: UPDATE_THEME,
    payload: {
      themeId: themeId,
    },
  })
}
