import { GET_SAILORS } from "../actions/types.js"

const initialState = {
    sailors: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_SAILORS:
            return {
                ...state,
                sailors: action.payload
            };
    
        default:
            return state;
    }
}