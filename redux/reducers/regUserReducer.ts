import { Reducer } from "redux";
const SET_USER_DATA = "SET_USER_DATA";
const SET_NUMBER_PAGE = "SET_NUMBER_PAGE";
const SET_DATA_CAR_USER = "SET_DATA_CAR_USER";
interface IRegState {
  login: string | null;
  password: string | null;
  repeatPassword: string | null;
  vinNumber: string | null;
  telephoneNumber: string | null;
  numberPage: Number;
}
export const initialRegState: IRegState = {
  login: null,
  password: null,
  repeatPassword: null,
  vinNumber: null,
  telephoneNumber: null,
  numberPage: 1,
};
const regUserReducer: Reducer<IRegState> = (
  state = initialRegState,
  action
) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        login: action.login,
        password: action.password,
        repeatPassword: action.repeatPassword,
      };
    case SET_NUMBER_PAGE:
      return {
        ...state,
        numberPage: action.numberPage,
      };
    case SET_DATA_CAR_USER:
      return{
        ...state,
        vinNumber:action.vinNumber,
        telephoneNumber:action.telephoneNumber
      }
    default:
      return state;
  }
};

export const setUserData = (
  login: string | null,
  password: string | null,
  repeatPassword: string | null
) => ({
  type: SET_USER_DATA,
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
export const setNumberPage = (numberPage: number) => ({
  type: SET_NUMBER_PAGE,
  numberPage,
});

export default regUserReducer;
