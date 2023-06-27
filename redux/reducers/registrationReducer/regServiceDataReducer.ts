import { Reducer } from "redux";

const SET_DATA_REG_SERVICE_PAGE_ONE = "SET_DATA_REG_SERVICE_PAGE_ONE";
const SET_DATA_REG_SERVICE_PAGE_TWO = "SET_DATA_REG_SERVICE_PAGE_TWO";
const SET_DATA_REGISTRED_SERVICE = "SET_DATA_REGISTRED_SERVICE";
const SET_DATA_AUTH_SERVICE = "SET_DATA_AUTH_SERVICE";
const REMOVE_DATA_INFO = "REMOVE_DATA_INFO";
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

const regServiceDataReducer: Reducer<IRegState> = (
  state = initialRegState,
  action
) => {
  switch (action.type) {
    case SET_DATA_REG_SERVICE_PAGE_ONE:
      return {
        ...state,
        nameAdmin: action.nameAdmin,
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
    case SET_DATA_AUTH_SERVICE:
      return {
        ...state,
        nameAdmin: action.nameAdmin,
        webAddress: action.webAddress,
        nameService: action.nameService,
        startOfWork: action.startOfWork,
        endOfWork: action.endOfWork,
        telephoneNumber: action.telephoneNumber,
        city: action.city,
        address: action.address,
        index: action.index,
      };
    case REMOVE_DATA_INFO:
      return {
        nameAdmin: null,
        webAddress: null,
        nameService: null,
        startOfWork: null,
        endOfWork: null,
        telephoneNumber: null,
        city: null,
        address: null,
        index: null,
        workingNumber: null,
      };
    default:
      return state;
  }
};

export const setDataRegServicePageOne = (
  nameAdmin: string | null,
  webAddress: string | null,
  telephoneNumber: string | null,
  startOfWork: string | null,
  endOfWork: string | null
) => ({
  type: SET_DATA_REG_SERVICE_PAGE_ONE,
  nameAdmin,
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
export const removeDataInfo = () => ({
  type: REMOVE_DATA_INFO,
});

export const setDataAuthService = (data) => ({
  type: SET_DATA_AUTH_SERVICE,
  nameAdmin: data.nameAdmin,
  webAddress: data.webAddress,
  nameService: data.nameService,
  startOfWork: data.startOfWork,
  endOfWork: data.endOfWork,
  telephoneNumber: data.telephoneNumber,
  city: data.city,
  address: data.address,
  index: data.index,
});
export default regServiceDataReducer;
