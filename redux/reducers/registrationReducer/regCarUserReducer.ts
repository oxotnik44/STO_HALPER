import { Reducer } from "redux";
const SET_DATA_CAR_USER = "SET_DATA_CAR_USER";
interface IRegState {
  gosnomer: string | null;
  vinNumber: string | null;
  telephoneNumber: string | null;
}
export const initialRegState: IRegState = {
  gosnomer: null,
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
        gosnomer: action.gosnomer,
        vinNumber: action.vinNumber,
        telephoneNumber: action.telephoneNumber,
      };
    default:
      return state;
  }
};

export const setDataCarUser = (
  gosnomer: string | null,
  vinNumber: string | null,
  telephoneNumber: string | null
) => ({
  type: SET_DATA_CAR_USER,
  gosnomer,
  vinNumber,
  telephoneNumber,
});

export default regCarUserReducer;
