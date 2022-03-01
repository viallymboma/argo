import React from 'react'
import { useState } from 'react';

const useInput = (validateValue) => {

    const [enteredValue, setEnteredVale] = useState('');

    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = evt => {
        setEnteredVale(evt.target.value);
    }

    const inputBlurHandler = () => {
        setIsTouched (true);
    }

    const reset = () => {
        setEnteredVale('');
        setIsTouched(false);
    }

    return {
        value: enteredValue, 
        isValid: valueIsValid,
        hasError,
        valueChangeHandler, 
        inputBlurHandler, 
        reset
    }
}

export default useInput