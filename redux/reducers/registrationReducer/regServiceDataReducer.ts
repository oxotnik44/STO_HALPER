import { Reducer } from "redux";
const SET_DATA_REG_SERVICE_PAGE_ONE = "SET_DATA_REG_SERVICE_PAGE_ONE";
const SET_DATA_REG_SERVICE_PAGE_TWO = "SET_DATA_REG_SERVICE_PAGE_TWO";
interface IRegState {
  surname: string | null;
  name: string | null;
  patronymic: string | null;
  telephoneNumber: string | null;
  city: string | null;
  address: string | null;
  index: string | null;
  workingNumber: string | null;
}
export const initialRegState: IRegState = {
  surname: null,
  name: null,
  patronymic: null,
  telephoneNumber: null,
  city: null,
  address: null,
  index: null,
  workingNumber: null,
};
const regServiceDataReducer: Reducer<IRegState> = (
  state = initialRegState,
  action
) => {
  switch (action.type) {
    case SET_DATA_REG_SERVICE_PAGE_ONE:
      return {
        ...state,
        surname: action.surname,
        name: action.name,
        patronymic: action.patronymic,
        telephoneNumber: action.telephoneNumber,
      };
    case SET_DATA_REG_SERVICE_PAGE_TWO:
      return {
        ...state,
        city: action.city,
        address: action.address,
        index: action.index,
        workingNumber: action.workingNumber,
      };
    default:
      return state;
  }
};

export const setDataRegServicePageOne = (
  surname: string | null,
  name: string | null,
  patronymic: string | null,
  telephoneNumber: string | null
) => ({
  type: SET_DATA_REG_SERVICE_PAGE_ONE,
  surname,
  name,
  patronymic,
  telephoneNumber,
});
export const setDataRegServicePageTwo = (
  city: string | null,
  address: string | null,
  index: string | null,
  workingNumber: string | null
) => ({
  type: SET_DATA_REG_SERVICE_PAGE_TWO,
  city,
  address,
  index,
  workingNumber,
});
export default regServiceDataReducer;
