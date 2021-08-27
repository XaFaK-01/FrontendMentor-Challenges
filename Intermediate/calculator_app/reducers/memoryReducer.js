import {
  PUSH_VALUE_TO_MEMORY,
  DELETE_VALUE_FROM_MEMORY,
  RESET_MEMORY,
  CLEAR_OPERATIONAL_VALUE,
  VALUE_CALCULATED,
} from "../constants/constants.js"

export const memoryReducer = (
  state = { currentValue: 0, operationalValue: "" },
  action
) => {
  switch (action.type) {
    case PUSH_VALUE_TO_MEMORY:
      return {
        ...state,
        operationalValue: action.payload.value,
      }

    case DELETE_VALUE_FROM_MEMORY:
      return {
        ...state,
        operationalValue: action.payload.value,
      }
    case RESET_MEMORY:
      return {
        currentValue: 0,
        operationalValue: [],
      }

    case VALUE_CALCULATED:
      return {
        currentValue: action.payload.value,
        operationalValue: [],
      }
    case CLEAR_OPERATIONAL_VALUE:
      return {
        ...state,
        operationalValue: [],
      }
    default:
      return state
  }
}
