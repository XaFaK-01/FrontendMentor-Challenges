import {
  PUSH_VALUE_TO_MEMORY,
  DELETE_VALUE_FROM_MEMORY,
  RESET_MEMORY,
  CLEAR_OPERATIONAL_VALUE,
  VALUE_CALCULATED,
} from "../constants/constants.js"

export const pushValueToMemory = (valueToPush) => (dispatch, getState) => {
  const { memory } = getState()

  let value = [...memory.operationalValue]

  value = value.concat(valueToPush)

  dispatch({
    type: PUSH_VALUE_TO_MEMORY,
    payload: { value },
  })
}

export const deleteValueFromMemory = () => (dispatch, getState) => {
  const { memory } = getState()

  let value = [...memory.operationalValue]

  value = value.slice(0, -1)

  dispatch({
    type: DELETE_VALUE_FROM_MEMORY,
    payload: { value },
  })
}

export const resetMemory = () => (dispatch) => {
  dispatch({
    type: RESET_MEMORY,
  })
}

export const calculateValue = () => (dispatch, getState) => {
  const { memory } = getState()

  let operationalValueInMemory = [...memory.operationalValue]
  let currentValueInMemory = memory.currentValue

  let finalCalculatedValue = 0
  let formattedValue = []
  let numericalValue = ""

  // joining together array values that don't have any operator between them

  function formatValues(currentValue, i) {
    if (Number(currentValue)) {
      numericalValue = numericalValue.concat(currentValue)
      // pushing values in numericalValue only if they are the last values in checkingVariable's last index
      if (i === operationalValueInMemory.length - 1) {
        formattedValue.push(numericalValue)
      }
    } else {
      formattedValue.push(numericalValue)
      numericalValue = ""
      formattedValue.push(currentValue)
    }
  }

  operationalValueInMemory.forEach((value, i) => formatValues(value, i))
  if (currentValueInMemory === 0) {
    finalCalculatedValue = Number(
      eval(formattedValue.toString().replace(/,/g, " ").replace(/\s/g, ""))
    ).toFixed(2)
  } else {
    // replacing the first value in array with the value present in currentValueInMemory
    formattedValue[0] = currentValueInMemory

    finalCalculatedValue = Number(
      eval(formattedValue.toString().replace(/,/g, " ").replace(/\s/g, ""))
    ).toFixed(2)
  }

  dispatch({
    type: VALUE_CALCULATED,
    payload: { value: finalCalculatedValue },
  })
}

export const clearOperationalValue = () => (dispatch) => {
  dispatch({
    type: CLEAR_OPERATIONAL_VALUE,
  })
}
