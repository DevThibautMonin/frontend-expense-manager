import { useState } from "react"

const useInput = (validateValue) => {
  const [value, setValue] = useState('')
  const [isTouched, setIsTouched] = useState(false)
  const isValueValid = validateValue(value)
  const hasError = !isValueValid && isTouched

  const valueChangeHandler = (event) => {
    setValue(event.target.value)
  }

  const inputBlurHandler = () => {
    setIsTouched(true)
  }

  return {
    value: value, isValueValid: isValueValid, hasError: hasError, valueChangeHandler, inputBlurHandler
  }
}

export default useInput
