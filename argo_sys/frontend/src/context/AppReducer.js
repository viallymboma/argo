const AppReducer = (state, action) => {

    switch (action.type) {
        case "GET_SAILORS":
            return {
                ...state,
                loading: false,
                sailors: action.payload
            };

        case "DELETE_SAILOR":
            return {
                ...state,
                sailors: state.sailors.filter(sailor => sailor._id !== action.payload)
            };

        case "ADD_SAILOR":
            return {
                ...state,
                sailors: [...state.sailors, action.payload]
            };

        case "SAILOR_ERROR":
            return {
                ...state,
                sailors: action.payload
            };

        case "DELETE_SAILOR_ERROR":
            return {
                ...state,
                sailors: action.payload
            };

        default:
            return state;
    }
}

export default AppReducer;