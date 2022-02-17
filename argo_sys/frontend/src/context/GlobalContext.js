import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

const initialState = {
    sailors: [],
    error: null,
    loading: true
}

console.log(initialState.sailors)

// Create context
export const GlobalContext = createContext(initialState)

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    const getSailors = async () => {
        try {
            const res = await axios.get('api/matello/');
            console.log(res.data.data)
            dispatch({
                type: 'GET_SAILORS',
                payload: res.data.data
            })
        } catch (error) {
            dispatch({
                type: 'SAILOR_ERROR',
                payload: error.response.data.error
            })
        }
    }

    const deleteSailor = async (id) => {
        try {
            console.log(id)
            const res = await axios.delete(`api/matello/${id}`);
            dispatch ({
                type: 'DELETE_SAILOR',
                payload: res.data.data,
            })

        } catch (err) {
            
            dispatch ({
                type: 'DELETE_SAILOR_ERROR',
                payload: err.response.data.error,
            })
        }
    }

    const addSailor = async (sailor) => {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('api/matello/', sailor, config)
            dispatch ({
                type: 'ADD_SAILORS',
                payload: res.data.data,
            })
        } catch (err) {
            dispatch ({
                type: 'SAILORS_ERROR',
                payload: err.response.data.error,
            })
        }

    }

    return (<GlobalContext.Provider value={{
        sailors: state.sailors,
        error: state.error,
        loading: state.loading,
        getSailors,
        addSailor,
        deleteSailor,
    }}>
        {children}
    </GlobalContext.Provider>);
}











// transactions: [
//     { id: 1, item_name: 'Flower', amount: -20 },
//     { id: 2, item_name: 'Salary', amount: 4000 },
//     { id: 3, item_name: 'Book', amount: -20 },
//     { id: 4, item_name: 'Shirt', amount: -50 },
//     { id: 5, item_name: 'Table', amount: -150 },
//     // { id: 5, name: 'Table', amount: -150 },
// ]