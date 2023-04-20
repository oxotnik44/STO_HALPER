import { Reducer } from "redux";

const SET_DATA_REG_SERVICE_PAGE_ONE = "SET_DATA_REG_SERVICE_PAGE_ONE";
const SET_DATA_REG_SERVICE_PAGE_TWO = "SET_DATA_REG_SERVICE_PAGE_TWO";
const SET_DATA_REGISTRED_SERVICE = "SET_DATA_REGISTRED_SERVICE";

interface IRegState {
  whatsappNumber: string | null;
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
  whatsappNumber: null,
  webAddress: null,
  workingNumber: null,
  nameService: null,
};

const regServiceDataReducer: Reducer<IRegState> = (
  state = initialRegState,
  action
) => {
  switch (action.type) {
    case SET_DATA_REG_SERVICE_PAGE_ONE:
      return {
        ...state,
        whatsappNumber: action.whatsappNumber,
        webAddress: action.webAddress,
        telephoneNumber: action.telephoneNumber,
        startOfWork: action.startOfWork,
        endOfWork: action.endOfWork,
      };
    case SET_DATA_REG_SERVICE_PAGE_TWO:
      return {
        ...state,
        city: action.city,
        address: action.address,
        index: action.index,
        workingNumber: action.workingNumber,
        nameService: action.nameService,
      };
    case SET_DATA_REGISTRED_SERVICE:
      return {
        ...state,
        registeredServiceData: action.payload,
      };
    default:
      return state;
  }
};

export const setDataRegServicePageOne = (
  whatsappNumber: string | null,
  webAddress: string | null,
  telephoneNumber: string | null,
  startOfWork: string | null,
  endOfWork: string | null
) => ({
  type: SET_DATA_REG_SERVICE_PAGE_ONE,
  whatsappNumber,
  webAddress,
  telephoneNumber,
  startOfWork,
  endOfWork,
});

export const setDataRegServicePageTwo = (
  city: string | null,
  address: string | null,
  index: string | null,
  workingNumber: string | null,
  nameService: string | null
) => ({
  type: SET_DATA_REG_SERVICE_PAGE_TWO,
  city,
  address,
  index,
  workingNumber,
  nameService,
});
export const setDataRegistredService = (data) => ({
  type: SET_DATA_REGISTRED_SERVICE,
  payload: data,
});
export default regServiceDataReducer;
