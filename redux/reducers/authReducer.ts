import { Reducer } from "redux";

const SET_USER_LOGIN = "SET_USER_LOGIN";
const SET_USER_PASSWORD = "SET_USER_PASSWORD"


interface IAuthState {
    login: string | null;
    password: string | null;
}

export const initialAuthState: IAuthState = {
    login: null,
    password: null,
};


const authReducer: Reducer<IAuthState> = (
    state = initialAuthState,
    action
) => {
    switch (action.type) {
        case SET_USER_LOGIN:
            return {
                ...state,
                login: action.login
            };
        case SET_USER_PASSWORD:
            return {
                ...state,
                password: action.password
            }
        default:
            return state;
    }
};


export const setUserLogin = (login: string | null) => ({
    type: SET_USER_LOGIN,
    login: login,
});

export const setUserPassword = (password: string | null) => ({
    type: SET_USER_PASSWORD,
    password: password,
});
export default authReducer;