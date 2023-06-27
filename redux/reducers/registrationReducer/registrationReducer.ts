import { Reducer } from "redux";

const SET_USER_DATA = "SET_USER_DATA";
const RESET_DATA = "RESET_DATA";

interface IRegState {
  userRole: string | null;
  login: string | null;
  password: string | null;
  repeatPassword: string | null;
}

export const initialRegState: IRegState = {
  userRole: "Кто вы?",
  login: null,
  password: null,
  repeatPassword: null,
};

const registrationReducer: Reducer<IRegState> = (
  state = initialRegState,
  action
) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        userRole: action.userRole,
        login: action.login,
        password: action.password,
        repeatPassword: action.repeatPassword,
      };
    case RESET_DATA:
      return initialRegState;
    default:
      return state;
  }
};

export const setUserData = (
  userRole: string | null,
  login: string | null,
  password: string | null,
  repeatPassword: string | null
) => ({
  type: SET_USER_DATA,
  userRole,
  login,
  password,
  repeatPassword,
});

export const resetData = () => ({
  type: RESET_DATA,
});

export default registrationReducer;
