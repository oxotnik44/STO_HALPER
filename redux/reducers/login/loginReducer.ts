import { Reducer } from "redux";

const SET_IS_ADMIN = "SET_IS_ADMIN";
const RESET_SERVICE = "RESET_SERVICE";
const SET_DATA_SERVICE_FOR_USER = "SET_DATA_SERVICE_FOR_USER";
const SET_DATA_SERVICE_FOR_ADMIN = "SET_DATA_SERVICE_FOR_ADMIN";
const SET_IS_SEND = "SET_IS_SEND";
const SET_NUMBER_SERVICE = "SET_NUMBER_SERVICE";

interface IServiceInfo {
  nameAdmin: string;
  webAddress: string;
  nameService: string;
  startOfWork: string;
  endOfWork: string;
  telephoneNumber: string;
  city: string;
  address: string;
  index: string;
  reviews: string[];
  assistanceServices: Array<string> | null;
  application: [
    {
      login: String;
      listAssistances: [String];
      date: String;
      time: String;
    }
  ];
  // imgCarousel: Array<string> | null;
}

interface IState {
  dataServiceForUser: IServiceInfo[];
  dataServiceForAdmin: IServiceInfo | null;
  numberService: number;
  isAdmin: boolean;
  isSend: boolean;
}

export const initialServiceState: IState = {
  dataServiceForUser: [],
  dataServiceForAdmin: null,
  numberService: 0,
  isAdmin: false,
  isSend: false,
};

const loginReducer: Reducer<IState> = (state = initialServiceState, action) => {
  switch (action.type) {
    case SET_DATA_SERVICE_FOR_USER:
      return {
        ...state,
        dataServiceForUser: [
          ...state.dataServiceForUser,
          ...action.dataServiceForUser,
        ],
      };
    case SET_DATA_SERVICE_FOR_ADMIN:
      return {
        ...state,
        dataServiceForAdmin: action.dataServiceForAdmin,
      };

    case SET_IS_ADMIN:
      return {
        ...state,
        isAdmin: action.isAdmin,
      };
    case RESET_SERVICE:
      return {
        ...state,
        dataServiceForUser: [],
        dataServiceForAdmin: null,
      };
    case SET_IS_SEND:
      return {
        ...state,
        isSend: action.isSend,
      };
    case SET_NUMBER_SERVICE:
      return {
        ...state,
        numberService: action.numberService,
      };
    default:
      return state;
  }
};

export const setDataServiceForUser = (data: IServiceInfo[]) => ({
  type: SET_DATA_SERVICE_FOR_USER,
  dataServiceForUser: data,
});

export const setDataServiceForAdmin = (data: IServiceInfo) => ({
  type: SET_DATA_SERVICE_FOR_ADMIN,
  dataServiceForAdmin: data,
});

export const setIsAdmin = (isAdmin: boolean) => ({
  type: SET_IS_ADMIN,
  isAdmin: isAdmin,
});
export const setNumberService = (numberService: number) => ({
  type: SET_NUMBER_SERVICE,
  numberService: numberService,
});
export const resetService = () => ({
  type: RESET_SERVICE,
});
export const setIsSend = (isSend: boolean) => ({
  type: SET_IS_SEND,
  isSend: isSend,
});
export default loginReducer;
