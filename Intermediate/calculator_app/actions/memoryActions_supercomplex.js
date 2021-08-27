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

  let valueInMemory = [...memory.operationalValue]

  // step 1
  // breaking all values in string to array
  valueInMemory = valueInMemory.slice()

  // step 2
  // joining together array values that don't have any operator between them

  let formattedValue = []
  let numericalValue = ""

  valueInMemory.forEach((value, i) => formatValues(value, i))

  function formatValues(currentValue, i) {
    if (Number(currentValue)) {
      numericalValue = numericalValue.concat(currentValue)
      // pushing values in numericalValue only if they are the last values in checkingVariable's last index
      if (i === valueInMemory.length - 1) {
        formattedValue.push(Number(numericalValue))
      }
    } else {
      formattedValue.push(Number(numericalValue))
      numericalValue = ""
      formattedValue.push(currentValue)
    }
  }

  // step 3
  // calculating the values based on DMAS rule

  var operatorSequence = ["/", "*", "+", "-"]

  var latestCalculatedValue = 0
  var currentOperatorIndexValue = 0

  let tempArray = [...formattedValue]

  calculateValuesBasedOnDMASRule()

  function calculateValuesBasedOnDMASRule() {
    operatorSequence.forEach((operator) => {
      // finding the index for the current operator
      tempArray.forEach(
        (value, i) => value === operator && (currentOperatorIndexValue = i)
      )

      // calculating values for current operator
      if (operator == "/") {
        latestCalculatedValue =
          tempArray[currentOperatorIndexValue - 1] /
          tempArray[currentOperatorIndexValue + 1]
      }
      if (operator == "*") {
        latestCalculatedValue =
          tempArray[currentOperatorIndexValue - 1] *
          tempArray[currentOperatorIndexValue + 1]

        console.log("latestCalculatedValue: " + latestCalculatedValue)

        console.log(tempArray[currentOperatorIndexValue - 1])
        console.log(tempArray[currentOperatorIndexValue + 1])
      }
      if (operator == "-") {
        latestCalculatedValue =
          tempArray[currentOperatorIndexValue - 1] -
          tempArray[currentOperatorIndexValue + 1]
      }
      if (operator == "+") {
        latestCalculatedValue =
          tempArray[currentOperatorIndexValue - 1] +
          tempArray[currentOperatorIndexValue + 1]
      }

      console.log("latest calculated value")
      console.log(latestCalculatedValue)

      // removing the current operator and its related operands from the array
      tempArray.splice(currentOperatorIndexValue - 1, 3)

      console.log("array after removing operator and operands")
      console.log(tempArray)

      // adding the newly calculated value at this position
      tempArray.splice(currentOperatorIndexValue - 1, 0, latestCalculatedValue)

      console.log("array after including newly calculated value")
      console.log(tempArray)
    })

    return latestCalculatedValue
  }

  dispatch({
    type: VALUE_CALCULATED,
    payload: { value: latestCalculatedValue },
  })
}

export const clearOperationalValue = () => (dispatch) => {
  dispatch({
    type: CLEAR_OPERATIONAL_VALUE,
  })
}
