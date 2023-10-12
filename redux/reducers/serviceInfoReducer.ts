import { Reducer } from "redux";

const SET_DATA_SERVICE = "SET_DATA_SERVICE";
const SET_IS_ADMIN = "SET_IS_ADMIN";
const RESET_SERVICE = "RESET_SERVICE";
const SET_DATA_INFO_SERVICE = "SET_DATA_INFO_SERVICE";
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
  imgCarousel: Array<string> | null;
}

interface IState {
  dataInfoService: IServiceInfo;
  dataService: IServiceInfo[];
  numberService: number;
  isAdmin: boolean;
}

export const initialServiceState: IState = {
  dataInfoService: null,
  dataService: [],
  numberService: 0,
  isAdmin: false,
};

const serviceInfoReducer: Reducer<IState> = (
  state = initialServiceState,
  action
) => {
  switch (action.type) {
    case SET_DATA_SERVICE:
      return {
        ...state,
        dataService: [...state.dataService, ...action.dataService],
      };
    case SET_DATA_INFO_SERVICE:
      return {
        ...state,
        dataInfoService: action.dataInfoService,
      };
   
    case SET_IS_ADMIN:
      return {
        ...state,
        isAdmin: action.isAdmin,
      };
    case RESET_SERVICE:
      return {
        ...state,
        dataService: [],
      };
    default:
      return state;
  }
};

export const setDataService = (data: IServiceInfo[]) => ({
  type: SET_DATA_SERVICE,
  dataService: data,
});

export const setDataInfoService = (data: IServiceInfo) => ({
  type: SET_DATA_INFO_SERVICE,
  dataInfoService: data,
});

export const setIsAdmin = (isAdmin: boolean) => ({
  type: SET_IS_ADMIN,
  isAdmin: isAdmin,
});
export const resetService = () => {
  return {
    type: RESET_SERVICE,
  };
};
export default serviceInfoReducer;
