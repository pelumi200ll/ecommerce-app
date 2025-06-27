import { createContext, useReducer } from "react";

export const AuthContext = createContext();

// let acccessToken = null;
const initialState = {
    acccesSToken: null
}

function reduce (state, action) {
    if(action.type === "setToken"){
        state = { ...state, acccessToken: action.payload }
    }
    return state;
}


export const AuthProvider = ({ children, defaultState=initialState }) => {
    const [state, dispatch] = useReducer(reduce, defaultState)
    return(
        <AuthContext.Provider value={[state, dispatch]}>
            {children}
        </AuthContext.Provider>
    )
}