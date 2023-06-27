import { Reducer } from "redux";

const SET_DATA_SERVICE_INFO = "SET_DATA_SERVICE_INFO";
interface IRegState {
  nameAdmin: string | null;
  webAddress: string | null;
  nameService: string | null;
  startOfWork: string | null;
  endOfWork: string | null;
  telephoneNumber: string | null;
  city: string | null;
  address: string | null;
  index: string | null;
  workingNumber: string | null;
}

export const initialRegState: IRegState = {
  telephoneNumber: null,
  city: null,
  address: null,
  index: null,
  startOfWork: null,
  endOfWork: null,
  nameAdmin: null,
  webAddress: null,
  workingNumber: null,
  nameService: null,
};

const serviceInfoShowReducer: Reducer<IRegState> = (
  state = initialRegState,
  action
) => {
  switch (action.type) {
    case SET_DATA_SERVICE_INFO:
      return {
        ...state,
        ...action.data, // Заносим все данные из action.data в состояние
      };
      
    default:
      return state;
  }
};

export const setDataServiceInfo = (data: any) => ({
  type: SET_DATA_SERVICE_INFO,
  data,
});

export default serviceInfoShowReducer;
