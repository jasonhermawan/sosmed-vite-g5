import { LOGIN_SUCCESS } from "./type";

const INITIAL_STATE = {
    username: "",
    email:"",
    password: "",
    
}

export const accountReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, username: action.payload.username, email: action.payload.email, password: action.payload.password };
        default:
            return state;
    }
}