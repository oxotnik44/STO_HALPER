import { Reducer } from "redux";
const SET_USER_DATA = "SET_USER_DATA";
const SET_DATA_CAR_USER = "SET_DATA_CAR_USER";
interface IRegState {
  userRole: string | null;
  login: string | null;
  password: string | null;
  repeatPassword: string | null;
  vinNumber: string | null;
  telephoneNumber: string | null;
}
export const initialRegState: IRegState = {
  userRole: "Кто вы?",
  login: null,
  password: null,
  repeatPassword: null,
  vinNumber: null,
  telephoneNumber: null,
};
const regUserReducer: Reducer<IRegState> = (
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
    case SET_DATA_CAR_USER:
      return {
        ...state,
        vinNumber: action.vinNumber,
        telephoneNumber: action.telephoneNumber,
      };
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
export const setDataCarUser = (
  vinNumber: string | null,
  telephoneNumber: string | null
) => ({
  type: SET_DATA_CAR_USER,
  vinNumber,
  telephoneNumber,
});

export default regUserReducer;
