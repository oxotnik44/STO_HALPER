import { Reducer } from "redux";
const SET_DATA_CAR_USER = "SET_DATA_CAR_USER";
const CLEAR_DATA_CAR_USER = "CLEAR_DATA_CAR_USER";
interface IRegState {
  carNumber: string | null;
  vinNumber: string | null;
  telephoneNumber: string | null;
}
export const initialRegState: IRegState = {
  carNumber: null,
  vinNumber: null,
  telephoneNumber: null,
};
const regCarUserReducer: Reducer<IRegState> = (
  state = initialRegState,
  action
) => {
  switch (action.type) {
    case SET_DATA_CAR_USER:
      return {
        ...state,
        carNumber: action.carNumber,
        vinNumber: action.vinNumber,
        telephoneNumber: action.telephoneNumber,
      };
    case CLEAR_DATA_CAR_USER:
      return {
        ...state,
        carNumber: null,
        vinNumber: null,
        telephoneNumber: null,
      };
    default:
      return state;
  }
};

export const setDataCarUser = (
  carNumber: string | null,
  vinNumber: string | null,
  telephoneNumber: string | null
) => ({
  type: SET_DATA_CAR_USER,
  carNumber,
  vinNumber,
  telephoneNumber,
});

export const clearDataCarUser = () => ({
  type: CLEAR_DATA_CAR_USER,
});
export default regCarUserReducer;
