import { Reducer } from "redux";

const SET_DATA_SERVICE = "SET_DATA_SERVICE";
const SET_NUMBER_SERVICE = "SET_NUMBER_SERVICE";
const SET_IS_ADMIN = "SET_IS_ADMIN";
interface IServiceInfo {
  whatsappNumber: string;
  webAddress: string;
  nameService: string;
  startOfWork: string;
  endOfWork: string;
  telephoneNumber: string;
  city: string;
  address: string;
  index: string;
  assistanceServices: Array<string> | null;
  imgCarousel: Array<string> | null;
}

interface IState {
  dataService: IServiceInfo[];
  numberService: number;
  isAdmin: boolean;
}

export const initialServiceState: IState = {
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
    case SET_NUMBER_SERVICE:
      return {
        ...state,
        numberService: action.numberService,
      };
    case SET_IS_ADMIN:
      return {
        ...state,
        isAdmin: action.isAdmin,
      };
    default:
      return state;
  }
};

export const setDataService = (data: IServiceInfo[]) => ({
  type: SET_DATA_SERVICE,
  dataService: data,
});

export const setNumberService = (numberService: number) => ({
  type: SET_NUMBER_SERVICE,
  numberService: numberService,
});
export const setIsAdmin = (isAdmin: boolean) => ({
  type: SET_IS_ADMIN,
  isAdmin: isAdmin,
});

export default serviceInfoReducer;
