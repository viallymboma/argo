import React, {useRef, useState} from 'react'
import { useEffect } from 'react';
import useInput from './useInput';

// const SimpleInput = (props) => {

//     const { 
//         value: enteredName, 
//         isValid: enteredNameIsValid,
//         hasError: nameInputHasError, 
//         valueChangeHandler: nameChangedHandler, 
//         inputBlurHandler: nameBluredHandler,
//         reset: clear
//     } = useInput( value => value.trim() !== '');

//     let formIsValid = false;

//     if (enteredNameIsValid) {
//         formIsValid = true
//     }

//     const formSubmissionHandler = evt => {
//         evt.preventDefault();
        
//         if (nameInputHasError) {
//             return;
//         }

//         console.log(enteredName);
//         clear ()
//     }

//     const nameInputClasses = nameInputHasError ? 'form_control invalid' : 'form_control';

//     return (

//         <form onSubmit={ formSubmissionHandler }>

//             <div className={ nameInputClasses }>
//                 <label htmlFor="name">Your Name</label>
//                 <input 
//                     value={enteredName}

//                     type="text" 
//                     name="name" 
//                     id="nameID" 
//                     onChange={nameChangedHandler} 
//                     onBlur={ nameBluredHandler } />
//             </div>

//             {nameInputHasError && <p className='modalities'>Name must not be empty</p>}

//             <div className="form_action">
//                 <button disabled={!formIsValid}>Submit</button>
//             </div>

//         </form>

//     )
// }

// export default SimpleInput


























const SimpleInput = (props) => {

    const [enteredName, setEnteredName] = useState ('');
    const [ enteredNameTouched, setEnteredNameTouched ] = useState(false);
    
    const enteredNameIsValid = enteredName.trim() !== '';
    const namedInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

    let formIsValid = false;

    if (enteredNameIsValid) {
        formIsValid = true
    }

    const nameInputChangeHandler = evt => {
        setEnteredName(evt.target.value);
    }

    const nameInputBlurHandler = () => {
        setEnteredNameTouched (true);
    }

    const formSubmissionHandler = evt => {
        evt.preventDefault();

        setEnteredNameTouched (true)

        if (namedInputIsInvalid) {
            return;
        }
        console.log(enteredName);

        setEnteredName('')
        setEnteredNameTouched (false);
    }

    const nameInputClasses = namedInputIsInvalid ? 'form_control invalid' : 'form_control';

    return (

        <form onSubmit={ formSubmissionHandler }>

            <div className={ nameInputClasses }>
                <label htmlFor="name">Your Name</label>
                <input 
                    value={enteredName}

                    type="text" 
                    name="name" 
                    id="nameID" 
                    onChange={nameInputChangeHandler} 
                    onBlur={ nameInputBlurHandler } />
            </div>

            {namedInputIsInvalid && <p className='modalities'>Name must not be empty</p>}

            <div className="form_action">
                <button disabled={!formIsValid}>Submit</button>
            </div>

        </form>

    )
}

export default SimpleInput
















// const SimpleInput = (props) => {
//     // const nameInputRef = useRef();
//     const [enteredName, setEnteredName] = useState ('');
//     // const [ enteredNameIsValid, setEnteredNameIsValid ] = useState(false);
//     const [ enteredNameTouched, setEnteredNameTouched ] = useState(false);
    
//     const enteredNameIsValid = enteredName.trim() !== '';
//     const namedInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

//     // const setEnteredNameIsValid = () => {
//     //     enteredNameIsValid = true
//     // }

//     const nameInputChangeHandler = evt => {
//         setEnteredName(evt.target.value);

//         // if (evt.target.value.trim() !== '') {
//         //     setEnteredNameIsValid(true)
//         // }
//     }

//     const nameInputBlurHandler = () => {
//         setEnteredNameTouched (true);

//         // if (enteredName.trim() === '') {
//         //     setEnteredNameIsValid(false)
//         // }
//     }

//     const formSubmissionHandler = evt => {
//         evt.preventDefault();

//         setEnteredNameTouched (true)

//         if (namedInputIsInvalid) {
//             // setEnteredNameIsValid(false)
//             // console.log("field is empty");
//             return;
//         }

//         // setEnteredNameIsValid(true)

//         console.log(enteredName);
//         // const enteredValue = nameInputRef.current.value;
//         // console.log(enteredValue);

//         // nameInputRef.current.value = '' # Not ideal because it directly manaipulates the DOM...Let REACTmanipulate the DOM
//         // setting the input back to empty 
//         setEnteredName('')
//         setEnteredNameTouched (false);
//         // enteredNameIsValid = true
//         // setEnteredNameIsValid ();
//     }


//     const nameInputClasses = namedInputIsInvalid ? 'form_control invalid' : 'form_control';

//     return (

//         <form onSubmit={ formSubmissionHandler }>

//             <div className={ nameInputClasses }>
//                 <label htmlFor="name">Your Name</label>
//                 <input 
//                     value={enteredName}
//                     // ref={ nameInputRef } 
//                     type="text" 
//                     name="name" 
//                     id="nameID" 
//                     onChange={nameInputChangeHandler} 
//                     onBlur={ nameInputBlurHandler } />
//             </div>

//             {namedInputIsInvalid && <p className='modalities'>Name must not be empty</p>}

//             <div className="form_action">
//                 <button>Submit</button>
//             </div>

//         </form>

//     )
// }